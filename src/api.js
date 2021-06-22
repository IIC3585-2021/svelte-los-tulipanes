export async function getCatData() {
	try {
		const authKey = "f4282147-4f32-4aab-9423-0ef68e3822d2";
		const response = await fetch('https://api.thecatapi.com/v1/breeds/', {
			method: 'GET',
			headers: {
				'x-api-key': authKey
			}
		});
		const json = await response.json();
		return json;
	} catch {
		return [
			{
				alt_names: '',
				experimental: 0,
				hairless: 0,
				hypoallergenic: 0,
				id: 'abys',
				life_span: '14 - 15',
				name: 'Abyssinian',
				natural: 1,
				origin: 'Egypt',
				rare: 0,
				reference_image_id: null,
				rex: 0,
				short_legs: 0,
				suppressed_tail: 0,
				temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
				weight_imperial: '7  -  10',
				wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)'
			}
		];
	}
}

export async function getCatImageUrl(catId) {
	try {
		const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${catId}`);
		const json = await response.json();
		return json[0].url;
	} catch (err) {
		return 'https://http.cat/404';
	}
}
