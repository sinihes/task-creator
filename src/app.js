/* Importación de dependencias */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/route');

const app = express();

/* middleware */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


/* Settings */
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, '/views') )


//routes
app.use('/', router);



/* Conexion a DB Atlas */
mongoose.connect(process.env.URI_MONGODB)
    .then(()=>{console.log('Conexion a DB, OK');})
    .catch(err => {console.log(err);})

/* Escuchando en el servidor 3002 */
const port = 3002;
app.listen(port, ()=>{console.log(`server Ok, http://localhost:${port}`);}) 