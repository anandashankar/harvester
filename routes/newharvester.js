// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var Harvester = require('./models/harvester');
var Pressure = require('./models/pressure');
var Oillevel = require('./models/oillevel');
var Fuellevel = require('./models/fuellevel');

//to avoid mongoose promise error
mongoose.Promise = global.Promise;

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/harvesterapp');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

function log(req, res, next){
  console.log(new Date(), req.method, req.url);
  next();
}

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', log, function(req, res) {
res.json([{message: 'Harvester App successfuly running!'}]);
});

var idRoute = router.route('/:id')
idRoute.get(log, function(req, res, next){
var id = req.param['id'];
db.harvesterapp.find(function(err, id){
  console.log(id);
res.json(id);
});
});

// Create a new route with the prefix /harvester/:id
var harvestersRoute = router.route('/:id/harvesters');

  // Create a new instance of the Harvester model
  var harvester = new Harvester();
// Create endpoint /api/harvesters for POSTS
  harvestersRoute.post(function(req, res) {
  // Set the harvester properties that came from the POST data
  harvester.id = req.body.id;
  harvester.step_ms = req.body.step_ms;
  harvester.oillevel = 'http://localhost:3000/api/:id/harvesters/oillevel';
  harvester.fuellevel = 'http://localhost:3000/api/:id/harvesters/fuellevel';
  harvester.pressure = 'http://localhost:3000/api/:id/harvesters/pressure';


  // Save the harvester and check for errors
  harvester.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Haraverster data', data: harvester });
  });
});


//creating new route using endpoint /harvesters/pressure for POST
var pressureHarvestersRoute = router.route('/:id/harvesters/pressure');
pressureHarvestersRoute.post(function(req, res){
var pressure = new Pressure();
  pressure.pressure = req.body.pressure;

  pressure.save(function(err){
  if (err)
  res.send(err);
  res.json({ message: 'Haraverster data', data: pressure });
});
});

//creating new route using endpoint /harvesters/pressure for GET
pressureHarvestersRoute.get(log, function(req, res){
Pressure.find(function(err, pressure){
  if(err)
    res.send(err);
  res.json(pressure);
});
});

//creating new route using endpoint /harvesters/oillevel for POST
  var oillevelHarvestersRoute = router.route('/:id/harvesters/oillevel');
  oillevelHarvestersRoute.post(function(req, res){
  var oillevel = new Oillevel();
  oillevel.oillevel = req.body.oillevel;

  oillevel.save(function(err){
  if (err)
  res.send(err);
  res.json({ message: 'Haraverster data', data: oillevel });
});
});

//creating new route using endpoint /harvesters/oillevel for GET
oillevelHarvestersRoute.get(log, function(req, res){
Oillevel.find(function(err, oillevel){
  if(err)
    res.send(err);
  res.json(oillevel);
});
});

//creating new route using endpoint /harvesters/fuellevel for POST
 var fuellevelHarvestersRoute = router.route('/:id/harvesters/fuellevel');
  fuellevelHarvestersRoute.post(function(req, res){
  var fuellevel = new Fuellevel();
  fuellevel.fuellevel = req.body.fuellevel;

  fuellevel.save(function(err){
  if (err)
  res.send(err);
  res.json({ message: 'Haraverster data', data: fuellevel });
});
});

//creating new route using endpoint /harvesters/fuellevel for GET
fuellevelHarvestersRoute.get(log, function(req, res){
Fuellevel.find(function(err, fuellevel){
  if(err)
    res.send(err);
  res.json(fuellevel);
});
});

// -- New Code Below Here -- //

// Create endpoint /api/harvesters for GET
harvestersRoute.get(log, function(req, res) {
  // Use the Harvester model to find all beer
  Harvester.find(function(err, harvesters) {
    if (err)
      res.send(err);

    res.json(harvesters);
  });
});

// Create a new route with the /harvesters/:harvester_id prefix
var harvesterRoute = router.route('/:id/harvesters/:harvester_id');

// Create endpoint /api/beers/:beer_id for GET
harvesterRoute.get(function(req, res) {
  // Use the Beer model to find a specific beer
  Harvester.findById(req.params.harvester_id, function(err, harvester) {
    if (err)
      res.send(err);

    res.json(harvester);
  });
});

// Create endpoint /api/harvesters/:harvesters_id for DELETE
harvesterRoute.delete(function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Harvester.findByIdAndRemove(req.params.harvester_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Harvester data removed' });
  });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Harvester data on port ' + port);


var idRoute = router.route('/:id')
idRoute.get(log, function(req, res, next){
var id = req.param['id'];
db.harvesterapp.find(function(err, id){
  console.log(id);
res.json(id);
});
});