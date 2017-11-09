import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';

export default function(req, res) {
	res.send('OK');

	var lights = MyHouse.initLights();

	var zone = MyHouse.lights.livingRoom;

	lights.sendCommands(commands.rgbw.off(zone));
	lights.pause(200);
	lights.sendCommands(
		commands.rgbw.on(zone),
		commands.rgbw.whiteMode(zone),
		commands.rgbw.brightness(100)
	);

	lights.close();
};
