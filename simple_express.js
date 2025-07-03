const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.send('hello world');
})

const server = app.listen(8080, function(){
    const adrs = server.address()
    const port = server.port()

    console.log('listening port ', adrs, port);
})