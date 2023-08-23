import axios from "axios";

export default axios.create ({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '228db233264b4d868d9ef892798a3850'
	}
})