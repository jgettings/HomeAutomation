import bedroom from '../lights/bedroom';

export default function(req, res) {
	res.send('OK');

	bedroom.on();
};
