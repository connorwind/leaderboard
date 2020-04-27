const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://connor:Peppet12@cluster0-lmisd.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true} );
const http = require('http');

var results;

client.connect(err => {
    const collection = client.db("superhero").collection("leaderboard");
      
  
      
      var obj = collection.find({}).toArray(function(err, result) {
          if (err) throw err;
          results = result;
          console.log(results);
          
  
    client.close();
      });
  });


const server = http.createServer((request, response) => {

     response.writeHead(200, {'Content-Type': 'application/json'});
     response.write(JSON.stringify(results));
     response.end();

});

server.listen(8081);



