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
  customerID: "1"
},{
  customerName: "Xiaoying",
  phoneNumber: "9085106777",
  customerEmail: "xiaoying@abc.com",
  customerID: "2"
}];

var waitingList = [{
  customerName: "Tom",
  phoneNumber: "9085106980",
  customerEmail: "Tom@aaa.com",
  customerID: "2"
},{
  customerName: "Helen",
  phoneNumber: "9085106777",
  customerEmail: "helen@wild.com",
  customerID: "1"
}];

app.get("/", function(req, res) {
  	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
  	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/waiting-list", function(req, res){
	res.sendFile(path.join(__dirname, "waiting-list.html"));
})

app.post("/api/new", function(req, res) {
  	var newReservation = req.body;

  	if(reservations.length < 5){
  		reservations.push(newReservation);
  	}
  	else {
  		waitinglist.push(newReservation);
  	}
    res.json(reservations);
});

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waiting-list", function(req, res) {
    return res.json(waitingList);
});

app.get("/api/clear", function(req, res){
    reservations = [];
    waitinglist = [];  
});

app.listen(port, function() {
  	console.log("App listening on PORT " + port);
});

