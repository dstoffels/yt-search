import axios from 'axios';

const KEY = 'AIzaSyDZJnVRk-6xet4pnMF5rsGOOZt5XvFa62k';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 10,
		key: KEY,
	},
});
