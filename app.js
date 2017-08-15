var express = require("express"),
    lowdb = require("lowdb");

var db = lowdb("./data/locations.json");

var app = express();

var locationsController = require('./controllers/locations-controller')(db);
var documentsController = require('./controllers/documents-controller')();

app.get('/getlocations', locationsController.get);
app.get('/getdocument1', documentsController.get1);
app.get('/getdocument2', documentsController.get2);
app.get('/getdocument3', documentsController.get3);
app.get('/getdocument4', documentsController.get4);
app.set("port", (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});