module.exports = {
  apps: [
    {
      name: "backend",
      script: "server.js", // change to your entry file (e.g., index.js or app.js)
      watch: true,
      env: {
        PORT: 3000,
        SECRET_KEY_JWT: "sectetkeyofjwtiskainaiok",
        CLOUDINARY_CLOUD_NAME: "dceaiwew4",
        CLOUDINARY_API_KEY: "929939487612843",
        CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk",
      }
    }
  ]
};
