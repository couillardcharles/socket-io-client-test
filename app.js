var express = require("express"),
	path = require('path');


var app = express();

console.log("Configuring app for " + app.get('env') + " environment");


app.configure(function() {
	app.set('views', path.join(__dirname, '/views'));
	app.set('view engine', 'jade');
	app.use(express.logger());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public/'));
    app.use(express.errorHandler());
});

app.get("/", function(req, res) {
    res.render("index");
});

var port = process.env.PORT || 5001;
app.listen(port, function() {
  console.log("Listening on " + port);
});