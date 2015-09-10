var http = require('http');
var https = require('https');
var cp = require('child_process');
var path = require('path');
var log = require(path.join(process.cwd(), '/lib/logger'));
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

module.exports = function (port) {
  http.createServer(function (req, res) {
    var args = req.url.split('/');

    if(req.method==='GET' && req.url==='/hello'){
      res.end('Hello')
    }

    else if(req.method==='GET' && req.url==='/news'){
      request.get('http://reddit.com', function(err, xhr, body){
        var $ = cheerio.load(body);
        $('a').attr('href', 'http://media.giphy.com/media/jir4LEGA68A9y/giphy.gif');
        res.end($.html());
      });
    }

    else if(req.method==='GET' && req.url==='/topnews'){
      request.get('http://reddit.com', function(err, xhr, body){
        res.end($(body).find('#siteTable a.title').first().text());
      });
    }

    else if(req.method==='GET' && req.url==='/starwars'){
      res.writeHeader(200, {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      });

      request('https://swapi.co/api/films/', function(err, xhr, body){
        var data = JSON.parse(body);
        data.results.forEach(function(r){
          res.write(r.title+ '\n');
        })
        res.end();
      })
    }
    // }else if(args[1]==='cal'){
    //   res.writeHeader(200, {
    //     'Content-Type' : 'application/json',
    //     'Access-Control-Allow-Origin' : '*'
    //   });

    //   var arguments = args.splice(2);
    //   console.log(arguments);
    //   var output = cp.execFileSync(path.join(process.cwd(), '/cal.js', arguments);
    //   res.write(output);
    //   res.end();
    else{
      res.writeHead(403);
      res.end('Access Denied');
    }

    console.log(log(req));
    //write log to logfile
    fs.appendFile('logfile.log', log(req), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  }).listen(port);
}

