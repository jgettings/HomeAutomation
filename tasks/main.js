import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';

/**
 * Turns on the living room
 */
const on = function() {
	var lights = MyHouse.initLights();

	lights.sendCommands(
		commands.rgbw.on(MyHouse.lights.livingRoom),
		commands.rgbw.whiteMode(MyHouse.lights.livingRoom),
		commands.rgbw.brightness(MyHouse.lights.livingRoom, 100));

	lights.close();
};

/**
 * Turns off the living room
 */
const off = function() {
	var lights = MyHouse.initLights();

	lights.sendCommands(commands.rgbw.off(MyHouse.lights.livingRoom));

	lights.close();
};

export default {
	on,
	off
};
