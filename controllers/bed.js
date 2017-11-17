import main from '../tasks/main';
import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';


/**
 * Triggered when plugging in phone for bedtime
 */
export default function(req, res) {
	res.send('OK');

	// Turn main house lights off
	main.off();

	var lights = MyHouse.initLights();
	lights.sendCommands(commands.rgbw.off(MyHouse.lights.bedroom));
	lights.close();
};