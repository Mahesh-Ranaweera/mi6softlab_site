var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
app.set('view engine', 'pug');


app.use(express.static('public'));

router.use(function(req, res, next) {
		console.log("/" + req.method);
		next();
});

app.get('/', function(req, res) {
		res.render('index', {
				title: 'mi6softlab'
		});
});

app.get('/dev', function(req, res) {
    res.render('dev', {
        title: 'dev'
    });
});

app.get('/design', function(req, res) {
    res.render('design', {
        title: 'design'
    });
});

app.get('/about', function(req, res) {
		res.render('about',{
			title: "about"
		});
});

app.use("/", router);

app.use("/", function(req, res) {
		res.sendFile(path + "404.html");
});

app.listen(process.env.PORT || 3000);
console.log("SERVER ON PORT:3000");