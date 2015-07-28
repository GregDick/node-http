var http = require('http');
var https = require('https');
var cp = require('child_process');


http.createServer(function (req, res) {

  var args = req.url.split('/');

  if(req.method==='GET' && req.url==='/starwars'){
    res.writeHeader(200, {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    });
    https.get('https://swapi.co/api/films/')
      .on('response', function (xhr) {
        xhr.pipe(res);
      });
    }else if(args[1]==='cal'){
      res.writeHeader(200, {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      });
      var arguments = args.splice(2);
      console.log(arguments);
      var output = cp.execFileSync('/Users/Greg/Documents/NSS/code/calendar-cli/cal.js', arguments);
      res.write(output);
      res.end();
    }else{
      res.writeHead(403);
      res.end('Access Denied');
    }

}).listen(1337);

console.log('Server running on http://localhost:1337')
