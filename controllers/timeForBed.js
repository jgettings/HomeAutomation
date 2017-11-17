import { commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';


export default function(req, res) {
	res.send('OK');

	var lights = MyHouse.initLights();
	var zone = MyHouse.lights.bedroom;
	var color = 170;

	lights.sendCommands(
		commands.rgbw.on(zone),
		commands.rgbw.brightness(zone, 40),
		commands.rgbw.hue(zone, color));

	lights.close();
};
