//importar modulos
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//importar express
const express = require ('express');
//importar path
const path= require('path');
//importar express-handlebars
const exphbs = require ('express-handlebars');

//
const configureRoutes = require('./routes')

//instalar servidor de express/APLICACIÓN cree un nuevo servidor y ponlo en la
//variable- crear servidor
const app = express();

//configurar carpeta publica
app.use(express.static('public'));

//registrar motor de render
app.engine('handlebars', exphbs());

//use el motor de render handlebars
app.set('view engine', 'handlebars');


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'apapachoStore';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  configureRoutes (app, db);
});
app.listen(3000, function () {
  console.log('servidor iniciado en puerto 3000');
});