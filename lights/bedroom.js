import MyHouse from '../my-house';
import lights from './';

var zone = MyHouse.lights.bedroom;

/**
 * Turns the bedroom lights on at a dimness/color that is good for just before sleeps
 */
const on = function() {
	var color = 170;
	var brightness = 40;

	lights.on(zone, brightness, color);
};

/**
 * Turns off the bedroom lights
 */
const off = function() {
	lights.off(zone);
};

/**
 * Slowly turns on the lights from darkest red to brightest yellow
 */
const sunrise = function() {
	var totalTimeInMinutes = 45;
	lights.sunrise(zone, totalTimeInMinutes);
};

export default {
	on,
	off,
	sunrise
};
