var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [{
	customerName: "Brian",
	phoneNumber: "9085106980",
	customerEmail: "kara",
	customerID: "12"
}];
var waitingList = [];

app.get("/", function(req, res) {
  	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
  	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/waiting-list", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
})

app.post("/api/new", function(req, res) {
  	var newReservation = req.body;

  	if(reservations.length < 6){
  		reservations.push(newReservation);
  	}
  	else {
  		waiting-list.push(newReservation);
  	}
});

app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
});

