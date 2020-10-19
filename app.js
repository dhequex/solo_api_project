const knex = require('knex')({
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      user : '3301hakuba',
      database : 'solo_api'
    }
  })

 


const express = require("express");

const app = express();


app.use(express.static("/"));

app.get( "/", (req, res) =>{
res.send("Hello World")
});



app.listen(5000, () =>{
console.log("Listening on port 5000")
})
