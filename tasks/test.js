var Milight = require('node-milight-promise').MilightController;
var commands = require('node-milight-promise').commandsV6;
var MyHouse = require('../my-house');

export const test = function() {
	var light = new Milight({
		ip: MyHouse.lights.bridgeIP,
		type: 'v6'
	});

	var zone = 1;

	light.sendCommands(commands.rgbw.on(zone));
	light.pause(100);
	light.sendCommands(commands.rgbw.hue(zone, 40));
	light.pause(100);
	light.sendCommands(commands.rgbw.off(zone));

	light.close();
};
