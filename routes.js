const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

function configureRoutes(app, db) {

  app.get('/', function (request, response) {

  });

  //ruta para lista de productos con handlebar
  app.get('/tienda', function (req, res) {

    var filters = {
      
    };

    if (req.query.price_lt) {
      filters.price = {
        $lt: parseInt(req.query.price_lt)
      }
    }

    if (req.query.categoty) {
      filters.categoty = {
        $eq: req.query.categoty
      }
    }

    if (req.query.tematic) {
      filters.tematic = {
        $eq: req.query.tematic
      }
    }

    if (req.query.material) {
      filters.material = {
        $eq: req.query.material
      }
    }


    if (req.query.weight_lt) {

    }

    if (req.query.rating_lt) {

    }

    if (req.query.search) {

    }
  
    const collection = db.collection('products');
    collection.find(filters).toArray(function (err, docs) {
      assert.equal(err, null);

      var context = {
        products: docs,
        isDisney: req.query.categoty === 'Disney',
        isApapachoOficial: req.query.categoty === 'ApapachoOficial',
        isDisney: req.query.categoty === 'Disney',
        isDisney: req.query.categoty === 'Disney',
        isDisney: req.query.categoty === 'Disney',
      }
      res.render('list', context);

    });
    //objeto context
    
    


  });

  // /producto/:name/:id -> se utiliza para enviar la o las variables principales (leemos en req.params.name)
  // ?weight_lt=4000 -> se utiliza para variables opcionales (leemos en req.query.weight_lt)

  app.get('/producto', function (req, res) {
    
  });


  app.get('/sobre-nosotros', function (req, res) {

  });

}
module.exports = configureRoutes;