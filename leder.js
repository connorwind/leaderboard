const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://connor:Peppet12@cluster0-lmisd.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true}, {useCreateIndex: true} );
const http = require('http');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var results;
var server = http.Server(app);
app.use(express.static('client'));




  client.connect(err=>{
    const collection = client.db("superhero").collection("leaderboard");
    
      var obj = collection.find({}).toArray(function(err, result) {
          if (err) throw err;
          results = result;
          console.log(results);
          client.close();
      });
    });





    server.listen(PORT,function() {
    console.log("server is running");
    });


    



app.get('/', function(req,res){
 
  res.send(results)


});

app.post('/post', function(req,res){
var name = req.query.name
res.send(name);
});




