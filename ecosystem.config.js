module.exports = {
  apps: [
    {
      name: "civico-backend",
      script: "server.js",       // backend entry
      cwd: "./backend",          // backend folder
      watch: false,              // disable watch in production (better performance)
      env: {
        PORT: 3000,
        SECRET_KEY_JWT: "sectetkeyofjwtiskainaiok",
        CLOUDINARY_CLOUD_NAME: "dceaiwew4",
        CLOUDINARY_API_KEY: "929939487612843",
        CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk",
        NODE_ENV: "PRODUCTION"
      }
    },
    {
      name: "civico-frontend",
      script: "serve",                      // use "serve" to serve frontend dist
      cwd: "./frontend",                    // frontend folder
      args: "-s dist -l 5173",              // serve from dist on port 5173
      env: {
        VITE_API_URL: "http://civico.co.in:3000/api",
        NODE_ENV: "production"
      }
    }
  ]
};
