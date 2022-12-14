import axios from 'axios';

export async function Api() {
	let {data} = await axios.get('https://randomuser.me/api?limit=1');
	return data;
}
