import express from 'express';
import MyHouse from './my-house';
import test from './tasks/test';
import sunrise from './tasks/sunrise';

var app = express();

app.get('/', function(req, res) {
	res.send('Welcome Home!');
});

app.get('/test', function(req, res) {
	res.send('Running Test...');
	test();
});

app.get('/sunrise', function(req, res) {
	res.send('Starting sunrise...');
	sunrise(MyHouse.lights.bedroom);
});

app.listen(3000, function() {
	console.log('Home Automation server has started on port 3000');
});

