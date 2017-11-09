import main from '../tasks/main';

/**
 * Triggered when cell phone alarm is dismissed via tasker
 */
export default function(req, res) {
	res.send('OK');
	// Turn main house lights on
	// TODO: only if it is still dark out
	main.on();
	
	// TODO: start tea?
	// TODO: more fun things?
};

