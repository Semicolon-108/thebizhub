module.exports = {
  apps: [
    {
      name: "Guest",
      script: "./.output/server/index.mjs",
      port: 9090,
      exec_mode: 'cluster',
      instances: 'max',
      args: 'start'
    }
  ]
};

