const express = require('express')

const app = express();


app.use(express.json());
app.listen(3001, () => {
   console.log("running server");
});