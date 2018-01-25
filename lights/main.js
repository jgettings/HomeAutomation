import MyHouse from '../my-house';
import lights from './';

var zone = MyHouse.lights.livingRoom.zone;

/**
 * Turns on the living room
 */
const on = function() {
	lights.onWhite(zone);
};

/**
 * Turns off the living room
 */
const off = function() {
	lights.off(zone);
};

export default {
	on,
	off
};
