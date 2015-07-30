var expect = require('chai').expect;
var http = require('http');
var path = require('path');

describe('routes', function(){
  this.timeout(30000);
  var port = Math.floor(Math.random()*50000+10000);
  //start server before test
  before(function(){
    require(path.join(process.cwd(), '/lib/server'))(port);
  });

  //test the cal route at the current date
  it('should respond to the /cal route', function(done){
    var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var month = MONTH_NAMES[now.getMonth()];
    http.get('http://localhost:' + port + '/cal', function(res){
      var body = '';

      expect(res.statusCode).to.equal(200);

      res
      .on('data', function(chunk){
        body += chunk;
      })
      .on('end', function(){
        expect(body).to.contain(month);
        done();
      })
    })
  });

  //test the cal route with params
  it('should respond to the /cal/7/1999 route', function(done){
    http.get('http://localhost:' + port + '/cal/7/1999', function(res){
      var body = '';

      expect(res.statusCode).to.equal(200);

      res
      .on('data', function(chunk){
        body += chunk;
      })
      .on('end', function(){
        expect(body).to.contain('1999');
        done();
      })
    })
  });

  //test the starwars route
  it('should respond to the /starwars route', function(done){
    http.get('http://localhost:' + port + '/starwars', function(res){
      var body = '';

      expect(res.statusCode).to.equal(200);

      res
      .on('data', function(chunk){
        body += chunk;
      })
      .on('end', function(){
        expect(body).to.contain('A New Hope');
        done();
      })
    })
  });

  //display the port number
  console.log('Server is running on localhost:', port);
});
