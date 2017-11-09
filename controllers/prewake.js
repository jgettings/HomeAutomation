import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';

var sunrise = function(zone) {
	var lights = MyHouse.initLights();

	var red = 26;
	var yellow = 52;
	var totalBrightness = 100;
	var totalTimeInMinutes = 1;
	var pauseTime = (totalTimeInMinutes * 60 * 1000) / totalBrightness;

	lights.sendCommands(commands.rgbw.brightness(zone, 0), commands.rgbw.on(zone));

	var color = red;
	for (var brightness = 0; brightness <= totalBrightness; brightness++) {
		lights.sendCommands(commands.rgbw.brightness(zone, brightness));

		if (brightness % 3 == 0 && brightness < yellow) {
			lights.sendCommands(commands.rgbw.hue(zone, color));
			color++;
		}

		lights.pause(pauseTime);
	}

	lights.close();
};


export default function(req, res) {
	res.send('OK');
	sunrise(MyHouse.lights.bedroom);
};
