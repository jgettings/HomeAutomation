import main from '../tasks/main';
import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';

/**
 * Triggered by a button for now.
 * Need to figure out how to automate this when phone is not on home WiFi
 */
export default function(req, res) {
	res.send('OK');

	// Turn inside lights off
	main.off();
	
	var lights = MyHouse.initLights();
	lights.sendCommands(commands.rgbw.off(MyHouse.lights.bedroom));
	lights.close();
};
