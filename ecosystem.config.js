module.exports = {
  apps: [
    {
      name: "civico-app",
      script: "server.js",     // entry point
      cwd: "./backend",        // backend folder
      watch: true,
      env: {
        PORT: 3000,
        SECRET_KEY_JWT: "sectetkeyofjwtiskainaiok",
        CLOUDINARY_CLOUD_NAME: "dceaiwew4",
        CLOUDINARY_API_KEY: "929939487612843",
        CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk",
        NODE_ENV: "PRODUCTION",
        VITE_API_URL: "http://civico.co.in:3000/api"
      }
    }
  ]
};
