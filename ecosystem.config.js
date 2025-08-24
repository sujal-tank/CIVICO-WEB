// module.exports = {
//   apps: [
//     {
//       name: "civico-backend",
//       script: "server.js",
//       cwd: "./backend",
//       watch: true,
//       env: {
//         PORT: 3000,
//         NODE_ENV: "production",
//         SECRET_KEY_JWT: "sectetkeyofjwtiskainaiok",
//         CLOUDINARY_CLOUD_NAME: "dceaiwew4",
//         CLOUDINARY_API_KEY: "929939487612843",
//         CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk",
//       }
//     },
//     {
//       name: "civico-frontend",
//       script: "npm",
//       args: "run preview",  // if Vite frontend
//       cwd: "./frontend",
//       env: {
//         PORT: 5173, // or 4173 depending on vite preview
//         NODE_ENV: "production",
//       }
//     }
//   ]
// };


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
        CLOUDINARY_API_SECRET: "ESUbW1n-e6_K0WeUPJ0ESoodNgk"
      }
    }
  ]
};
