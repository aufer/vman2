const path = require('path');

const env = {loglevel: 'debug'};

const cwd = path.join(__dirname, 'packages');

module.exports = {
  apps: [
    {
      name: '@nx-abi-mgmt/nx-abi-ui',
      script: 'nx',
      args: 'run nx-abi-bff:serve',
      interpreter: '/bin/bash',
      cwd,
      env
    },
    {
      name: '@nx-abi-mgmt/nx-abi-bff',
      script: 'nx',
      args: 'run nx-abi-bff:serve',
      interpreter: '/bin/bash',
      cwd,
      watch: [path.join(cwd, 'apps', 'nx-abi-bff', 'src')],
      env
    },
    {
      name: '@nx-abi-mgmt/mongodb',
      script: 'mongod',
      args: '--dbpath /Users/andre.ufer/ws/dbs/',
      interpreter: '/bin/bash',
      cwd,
      watch: [path.join(cwd, 'apps', 'nx-abi-bff', 'src')],
      env
    }
  ]
};
