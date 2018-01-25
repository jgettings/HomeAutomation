import MyHouse from '../my-house';
import values from 'object.values';

/**
 * Home page for the web app
 */
export default function(req, res) {
	res.render('home', {
		'things': [
			{path: '/prewake', name: 'Sunrise', icon: 'wb_sunny'},
			{path: '/wake', name: 'Wake Up', icon: 'local_cafe'},
			{path: '/leave', name: 'Leave', icon: 'directions_walk'},
			{path: '/home', name: 'Come Home', icon: 'home'},
			{path: '/timeForBed', name: 'Time for Bed', icon: 'watch_later'},
			{path: '/bed', name: 'Go to Bed', icon: 'local_hotel'}
		],
		'lights': values(MyHouse.lights)
	});
};
