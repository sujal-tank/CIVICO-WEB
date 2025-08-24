const express = require('express')
const dotenv = require('dotenv')
const Connectdb = require('./config/db')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const app = express()
dotenv.config()
Connectdb()
const corsOptions = {
    origin: process.env.NODE_ENV === "production" ? 'http://civico.co.in:3000' : "http://localhost:5173", // Replace with the client URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };
app.use(cors(corsOptions))
const _dirname = path.dirname("");
const buildpath = path.join(_dirname,'../frontend/dist')
app.use(express.static(buildpath))
app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cookieparser())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',require('./routes/indexRouter'))
app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err)
    console.log(`Server Running On The Port : - ${process.env.PORT}`);
  console.log(process.env.NODE_ENV)
})