const assert = require ('assert');
function configureRoutes (app, db){

app.get('/', function (request, response) {
    console.log('hola en la consola');
    //response.send('hola en chrome');
    response.sendFile(path.join(__dirname, '/public/index.html'));
  });
  
  
  app.get('/contacto', function (request, response){
      console.log('hola desde contacto');
      //response.send('hola en chrome');
      response('pagina de contacto');
      
  
  });
  
  //ruta para lista de productos con handlebar
  app.get('/tienda', function (req, res){
  
    //objeto contexto
    var context = {
   
    }
      res.render('list', context);
  
  });
  
  // /producto/:name/:id -> se utiliza para enviar la o las variables principales (leemos en req.params.name)
  // ?weight_lt=4000 -> se utiliza para variables opcionales (leemos en req.query.weight_lt)
  
  app.get('/producto', function(req,res){
    console.log(req.query);
  
  
    if(req.query.price_lt){

    }
  
    if(req.query.weight_lt){
        
    }
  
    if(req.query.rating_lt){
    
    }

    if(req.query.search){

    }

        // Get the documents collection
        const collection = db.collection('products');
        // Find some documents
        collection.find({}).toArray(function(err, docs) {
          assert.equal(err, null);

          var context ={
            list: filtered,
          }
        
          res.render('list',context);
        });
    
  
 
    
  
  });
  
  app.get('/sobre-nosotros', function (req, res){
      console.log('hola desde contacto');
      //response.send('hola en chrome');
      res.send('texto cool sobre nosotros');
      
  
  } );

}
module.exports =configureRoutes;