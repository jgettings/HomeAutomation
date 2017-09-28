var express = require('express');
var Milight = require('node-milight-promise').MilightController;
var commands = require('node-milight-promise').commandsV6;

var app = express();

// Sunrise
app.get('/', function(req, res) {
	res.send('Starting sunrise...')

	var light = new Milight({
	        ip: "192.168.1.9",
	        type: 'v6'
	    });

	var bedroom = 2;
	var red = 26;
	var yellow = 52;
	var totalBrightness = 100;
	var totalTimeInMinutes = 45;
	var pauseTime = (totalTimeInMinutes * 60 * 1000) / totalBrightness;

  light.sendCommands(commands.rgbw.on(bedroom));

  var color = red;
  for (var brightness = 0; brightness <= totalBrightness; brightness++) {
  		light.sendCommands(commands.rgbw.brightness(bedroom, brightness))
  		light.sendCommands(commands.rgbw.hue(bedroom, color));
  		light.pause(pauseTime);

  		if (brightness % 3 == 0 && brightness < yellow) {
  			color++;
  		}
  }

	light.close();
});




var server = app.listen(3000, function() {
  console.log('Home Automation server has started on port 3000');

  // var discoverBridges = require('node-milight-promise').discoverBridges;
	// discoverBridges({
	//     type: 'all'
	// }).then(function (results) {
	//     console.log(results);
	// });
});

