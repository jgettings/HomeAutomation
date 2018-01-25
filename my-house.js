import { MilightController as Milight } from 'node-milight-promise';

export default {
	bridgeIP: '192.168.1.9',
	lights: {
		livingRoom: {
			zone: 1,
			name: 'Living Room',
			icon: 'weekend',
			dimColor: 52
		},
		bedroom: {
			zone: 2,
			name: 'Bedroom',
			icon: 'local_hotel',
			dimColor: 170
		},
		outside: {
			zone: 3,
			name: 'Outside',
			icon: 'local_florist',
			dimColor: 170
		},
		kitchen: {
			zone: 4,
			name: 'Kitchen',
			icon: 'kitchen',
			dimColor: 26
		}
	},
	initLights: function() {
		return new Milight({
			ip: this.bridgeIP,
			type: 'v6'
		});
	}
};
