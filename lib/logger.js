var path = require('path');
var logStart = require(path.join(process.cwd(), '/lib/logStart'));
var logTime = require(path.join(process.cwd(), '/lib/logTime'));
var logMethod = require(path.join(process.cwd(), '/lib/logMethod'));
var logUser = require(path.join(process.cwd(), '/lib/logUser'));
var logError = require(path.join(process.cwd(), '/lib/logError'));
var logEnd = require(path.join(process.cwd(), '/lib/logEnd'));

module.exports = function(req, res){
  var date = (new Date()).toUTCString();
  var cyan = '\u001b[36m';
  var white = '\u001b[39m';

  return '[' + date + '] ' + '"' + cyan + req.method + white + ' ' + cyan + req.url + white + '" ' + '"' + req.headers['user-agent'] + '"'
}
