
const connection  = require('./database/db.config')
const express = require('express')

const app = express();

const PORT = 8001


connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

app.listen(PORT, () =>{
    console.log("Hello backend");
})