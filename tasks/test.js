import { MilightController as Milight, commandsV6 as commands } from 'node-milight-promise';
import MyHouse from '../my-house';

export default function() {
	var light = new Milight({
		ip: MyHouse.lights.bridgeIP,
		type: 'v6'
	});

	var zone = MyHouse.lights.livingRoom;

	light.sendCommands(commands.rgbw.off(zone));
	light.pause(200);
	light.sendCommands(
		commands.rgbw.on(zone),
		commands.rgbw.whiteMode(zone),
		commands.rgbw.brightness(50)
	);

	light.close();
};
