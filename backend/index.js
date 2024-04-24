import express from 'express';
import bodyParser from 'body-parser'

const app = express();
import connection from './database/db.config.js'
// const connection  = require('./database/db.config')
// const cors = require('cors')
import cors from 'cors'
import Routes from './routes/route.js'

// const Routes = require('./routes/route')

const PORT = 8000;


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.use('/', Routes)

app.listen(PORT, ()=>{
    console.log("connected to port 8000");
})


