const express = require("express");

const app = express();


app.use(express.static("/"));

//app.get( "/", (req, res) =>{

   
//})

app.listen(5000, () =>{
console.log("Listening on port 5000")
})
