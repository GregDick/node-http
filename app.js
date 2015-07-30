var chalk = require('chalk');

require('./lib/server')(1337);


console.log('Server running on ' + chalk.bgMagenta('http://localhost:1337'));
