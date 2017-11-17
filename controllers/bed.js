import main from '../tasks/main';

/**
 * Triggered when plugging in phone for bedtime
 */
export default function(req, res) {
	res.send('OK');

	// Turn main house lights off
	main.off();
};

