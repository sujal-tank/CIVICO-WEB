module.exports = {
  apps: [
    {
      name: "civico-backend",
      script: "server.js",
      cwd: "./backend",
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: "production",
        SECRET_KEY_JWT: "sectetkeyofjwtiskainaiok",
        CLOUDINARY_CLOUD_NAME: "dceaiwew4",
        CLOUDINARY_API_KEY: "929939487612843",
        CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk",
      }
    },
   {
  name: "civico-frontend",
  script: "npm",
  args: "run preview -- --host 0.0.0.0 --port 5173",
  cwd: "./frontend",
  env: {
    NODE_ENV: "production"
  }
}
  ]
};
