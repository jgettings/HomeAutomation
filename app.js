import express from 'express';

import index from './controllers/index';
import test from './controllers/test';
import prewake from './controllers/prewake';
import wake from './controllers/wake';
import home from './controllers/home';
import bed from './controllers/bed';

var app = express();

app.get('/', index);
app.get('/test', test);
app.get('/sunrise', prewake);
app.get('/wake', wake);
app.get('/home', home);
app.get('/bed', bed);

app.listen(3000, function() {
	console.log('Home Automation server has started on port 3000');
});

