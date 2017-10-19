var Milight = require('node-milight-promise').MilightController;
var commands = require('node-milight-promise').commandsV6;
var MyHouse = require('../my-house');

export const sunrise = function(zone) {
	var light = new Milight({
		ip: MyHouse.lights.bridgeIP,
		type: 'v6'
	});

	var red = 26;
	var yellow = 52;
	var totalBrightness = 100;
	var totalTimeInMinutes = 1;
	var pauseTime = (totalTimeInMinutes * 60 * 1000) / totalBrightness;

	light.sendCommands(commands.rgbw.brightness(zone, 0));
	light.sendCommands(commands.rgbw.on(zone));

	var color = red;
	for (var brightness = 0; brightness <= totalBrightness; brightness++) {
		light.sendCommands(commands.rgbw.brightness(zone, brightness));

		if (brightness % 3 == 0 && brightness < yellow) {
			light.sendCommands(commands.rgbw.hue(zone, color));
			color++;
		}

		light.pause(pauseTime);
	}

	light.close();
};
