module.exports = {
  apps: [
    {
      name: "backend",
      script: "server.js",     // entry file (inside backend folder)
      cwd: "./backend",        // set working directory to backend
      watch: true,
      env: {
        PORT: 3000,
        SECRET_KEY_JWT: "sectetkeyofjwtiskainaiok",
        CLOUDINARY_CLOUD_NAME: "dceaiwew4",
        CLOUDINARY_API_KEY: "929939487612843",
        CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk"
      }
    },
    {
      name: "frontend",
      script: "npx",
      args: "serve -s build -l 3001", // serve build at port 3001
      cwd: "./frontend",              // set working directory to frontend
      env: {
        REACT_APP_API_URL: "http://15.206.212.143:3000",
        REACT_APP_CLOUDINARY_CLOUD_NAME: "dceaiwew4"
      }
    }
  ]
};
