const express = require('express');
const app = express();
const morgan = require('morgan');


//enviroment variables
app.set('port', process.env.port || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use('/api/employees',require('./routes/employees.routes'))



module.exports = app;