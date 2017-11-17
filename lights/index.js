/**
 * Common lights functions
 */
import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';

const on = function(zone, brightness, color) {
	var lights = MyHouse.initLights();

	lights.sendCommands(
		commands.rgbw.on(zone),
		commands.rgbw.brightness(zone, 40),
		commands.rgbw.hue(zone, color));

	lights.close();
};

const onWhite = function(zone) {
	var lights = MyHouse.initLights();

	lights.sendCommands(
		commands.rgbw.on(zone),
		commands.rgbw.whiteMode(zone),
		commands.rgbw.brightness(zone, 100));

	lights.close();
};

/**
 * Turns off the bedroom lights
 */
const off = function(zone) {
	var lights = MyHouse.initLights();

	lights.sendCommands(commands.rgbw.off(zone));

	lights.close();
};

/**
 * Slowly turns on the lights from darkest red to brightest yellow
 */
const sunrise = function(zone, totalTimeInMinutes) {
	var lights = MyHouse.initLights();

	var red = 26;
	var yellow = 52;
	var totalBrightness = 100;
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

export default {
	on,
	onWhite,
	off,
	sunrise
};
