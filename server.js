var express = require('express');
var app = express();

var PORT = 3000;


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request ' + new Date().toString() + '' + req.method + ' ' + req.originalUrl );
		next();
	}
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);


// app.get('/',function (req, res){
// 	res.send('hello Express');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('hello Express 2');
});


app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Express server started at Port : ' + PORT);
});