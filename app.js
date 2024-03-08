const express = require('express')
const app = express();
const route = require('./routes')

app.use('/', route);

//server start
app.listen(2000, ()=>{
console.log('Server is running......')
});