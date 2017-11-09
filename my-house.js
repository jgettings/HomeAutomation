import { MilightController as Milight } from 'node-milight-promise';

export default {
	lights: {
		bridgeIP: '192.168.1.9',
		livingRoom: 1,
		bedroom: 2,
		outside: 3
	},
	initLights: function() {
		return new Milight({
			ip: this.lights.bridgeIP,
			type: 'v6'
		});
	}
};
