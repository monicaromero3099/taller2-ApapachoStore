const assert = require('assert');


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
  
    var sortings = {};

    if (req.query.sort == "pricemM"){
      sortings.price = 1;
    }

    if (req.query.sort == "priceMm"){
      sortings.price = -1;
    }

    if (req.query.sort == "heightmM"){
      sortings.height = 1;
    }

    if (req.query.sort == "heightMm"){
      sortings.height = -1;
    }
    if (req.query.sort == "rating"){
      sortings.rating = -1;
    }

    const collection = db.collection('products');
    collection.find(filters).sort(sortings).toArray(function (err, docs) {
      assert.equal(err, null);

      var context = {
        products: docs,
        isDisney: req.query.categoty === 'Disney',
        isApapachoOficial: req.query.categoty === 'ApapachoOficial',
        isPixar: req.query.categoty === 'Pixar',
        isMyLittlePonny: req.query.categoty === 'MyLittlePonny',

        isSanValantine: req.query.tematic === 'SanValantine',
        isHalloween: req.query.tematic === 'Halloween',
        
        ispoliester: req.query.material === 'poliester',
        isfelpa: req.query.material === 'felpa',
        
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