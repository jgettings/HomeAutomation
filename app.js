import express from 'express';

import test from './controllers/test';
import prewake from './controllers/prewake';
import main from './controllers/main';
import home from './controllers/home';

var app = express();

app.get('/', home);
app.get('/test', test);
app.get('/sunrise', prewake);
app.get('/main/on', main.on);
app.get('/main/off', main.off);

app.listen(3000, function() {
	console.log('Home Automation server has started on port 3000');
});

