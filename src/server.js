//
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();

const { DB } = require('./config/DB');


//Ruta del usuario
const materialRoutes = require('./routes/material');
const tableRoutes = require('./routes/table');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect (DB)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

// configuración del puerto del servidor
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/material', materialRoutes);
app.use('/table', tableRoutes);


// ruta para los archivos staticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
} );