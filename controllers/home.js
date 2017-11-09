import main from '../tasks/main';

/**
 * Triggered when connecting to home WiFi
 */
export default function(req, res) {
	res.send('OK');

	// Turn main house lights on
	// TODO: only if it is dark out
	main.on();
	
	// TODO: blink outside lights
};

