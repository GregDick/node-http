var expect = require('chai').expect;
var path = require('path');
var log = require(path.join(process.cwd(), '/lib/logger'));

describe('log', function () {
  it('should create the log', function () {
    var date = (new Date()).toUTCString();
    var req1 = {
      method: 'GET',
      url: '/this/is/a/path.png',
      headers: {
        'user-agent': 'Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d'
      }
    };

    var req2 = {
      method: 'POST',
      url: '/my/form',
      headers: {
        'user-agent': 'curl/7.43.0'
      }
    };

    var goal1 = '[' + date + '] "\u001b[36mGET\u001b[39m \u001b[36m/this/is/a/path.png\u001b[39m" "Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d"';
    var goal2 = '[' + date + '] "\u001b[36mPOST\u001b[39m \u001b[36m/my/form\u001b[39m" "curl/7.43.0"';
    expect(log(req1)).to.equal(goal1);
    expect(log(req2)).to.equal(goal2);
  });
  it('should change color based on the response status code')
});



















// var expect = require('chai').expect;
// var path = require('path');

// var logStart = require(path.join(process.cwd(), '/lib/logStart'));
// var logTime = require(path.join(process.cwd(), '/lib/logTime'));
// var logMethod = require(path.join(process.cwd(), '/lib/logMethod'));
// var logUser = require(path.join(process.cwd(), '/lib/logUser'));
// var logError = require(path.join(process.cwd(), '/lib/logError'));
// var logEnd = require(path.join(process.cwd(), '/lib/logEnd'));

// describe('server log', function(){
//   it('should log a start message and instructions on how to stop the server', function(){
//     expect(logStart()).to.equal('Starting up http-server, serving ./ on: http://localhost:1337\nHit CTRL-C to stop the server');
//   })

//   it('should log a timestamp on every log', function(){
//     expect(logTime()).to.contain('[Thu, 30 Jul 2015 ');
//   })

//   it('should log the reqest method and path', function(){
//     expect(logMethod()).to.equal('"GET /"');
//   })

//   it('should log the user agent on success', function(){
//     expect(logUser()).to.equal('"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36"');
//   })

//   it('should log the status code on error', function(){
//     expect(logError()).to.equal('Error (404): "Not found"');
//   })

//   it('should log a stop message when server is stopped', function(){
//     expect(logEnd()).to.equal('^Chttp-server stopped.');
//   })
// })
