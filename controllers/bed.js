import main from '../lights/main';
import bedroom from '../lights/bedroom';


/**
 * Triggered when plugging in phone for bedtime
 */
export default function(req, res) {
	res.send('OK');

	// Turn all of the lights off
	main.off();
	bedroom.off();
};
