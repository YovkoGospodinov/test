var express = require("express"),
    lowdb = require("lowdb");

var db = lowdb("./data/locations.json");

var app = express();

var locationsController = require('./controllers/locations-controller')(db);
app.get('/getlocations', locationsController.get);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});