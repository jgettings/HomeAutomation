import main from '../lights/main';
import bedroom from '../lights/bedroom';

/**
 * Triggered by a button for now.
 * Need to figure out how to automate this when phone is not on home WiFi
 */
export default function(req, res) {
	res.send('OK');

	// Turn inside lights off
	main.off();
	bedroom.off();
};
