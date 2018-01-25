import lights from '../lights/';

/**
 * Triggered when plugging in phone for bedtime
 */
export default function(req, res) {
	res.send('OK');

	var zone = req.params.zone;
	var action = req.params.action;

	if (action === 'on') {
		lights.onWhite(zone);
	} else if (action === 'off') {
		lights.off(zone);
	} else if (action === 'dim') {
		lights.dim(zone);		
	}
};
