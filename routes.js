const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {

  app.get('/', function (request, response) {

  });

  //ruta para lista de productos con handlebar
  app.get('/tienda', function (req, res) {
    
    const collection = db.collection('products');
    collection.find({}).toArray(function (err, docs) {
      assert.equal(err, null);

      var context = {
        products: docs,
      }
      res.render('list', context);

    });
    //objeto contexto
   



    if (req.query.price_lt) {

    }

    if (req.query.weight_lt) {

    }

    if (req.query.rating_lt) {

    }

    if (req.query.search) {

    }

  });

  // /producto/:name/:id -> se utiliza para enviar la o las variables principales (leemos en req.params.name)
  // ?weight_lt=4000 -> se utiliza para variables opcionales (leemos en req.query.weight_lt)

  app.get('/producto', function (req, res) {
    
  });


  app.get('/sobre-nosotros', function (req, res) {

  });

}
module.exports = configureRoutes;