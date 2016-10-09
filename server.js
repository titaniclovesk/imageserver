//This is image server
var express = require("express");
var app = express();
var fs = require('fs');

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

app.get('/:action', function (req, res) 
{
   var action= req.params.action;
   console.log('Received GET Req:' + action);

	  if(action== "poster_small")
    {
      fs.readFile('posters/small/'+ req.query.movieid + '.jpg', function(err, contents) {

          if (err) console.log(err);
          else 
            {              
              res.write(contents);
              res.end();
          }
        }); 
    }
    else if(action== "poster_big")
    {
      fs.readFile('posters/big/'+ req.query.movieid + '.jpg', function(err, contents) {

          if (err) console.log(err);
          else 
            {              
              res.write(contents);
              res.end();
          }
        }); 
    }
    else if(action== "poster_tiny")
    {
      fs.readFile('posters/tiny/'+ req.query.movieid + '.jpg', function(err, contents) {

          if (err) console.log(err);
          else 
            {              
              res.write(contents);
              res.end();
          }
        }); 
    }
    else
    {
    	 res.end("unknown request" );
    }
})
