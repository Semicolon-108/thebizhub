module.exports = {
  apps: [
    {
      name: "Guest",
      script: "serve -s dist -l 9090",
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
};

