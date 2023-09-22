module.exports = {
  apps: [
    {
      name: "Guest",
      script: "serve -s dist -l 9090",
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      args: 'start'
    }
  ]
};

