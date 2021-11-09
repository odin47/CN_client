import axios from 'axios';
import { DOMAIN_URL } from '../settings';

const getService = async (url) => {
	try {
		const response = await axios.get(
			`${DOMAIN_URL}/api/v1${url}`
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export default getService;
