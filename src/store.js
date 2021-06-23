import { writable } from 'svelte/store';
import { getCatData, getCatImageUrl } from './api';

const likeStatus = {
	disliked: 0,
	neutral: 1,
	liked: 2
};

const createCats = () => {
	const { subscribe, update} = writable([]);
	// Cuando haga referencia a 'cats' voy a estar refiriendome al writable
	let cats;
	subscribe((v) => (cats = v));

	return {
		subscribe,
		firstNeutralCat: () => {
			return cats.find((cat) => cat.liked === likeStatus.neutral);
		},
		likedCatNames: () => {
			return cats.filter((cat) => cat.liked === likeStatus.liked).map((cat) => cat.name);
		},
		like: (catId) =>
			update((catsList) => {
				const cat = catsList.find((cat) => cat.id === catId);
				const index = catsList.indexOf(cat);
				cat.liked = likeStatus.liked;
				catsList[index] = cat;
				return catsList;
			}),
		dislike: (catId) =>
			update((catsList) => {
				const cat = catsList.find((cat) => cat.id === catId);
				const index = catsList.indexOf(cat);
				cat.liked = likeStatus.disliked;
				catsList[index] = cat;
				return catsList;
			}),
		add: (cat) =>
			{update((catsList) => {
				return [...catsList, { ...cat, liked: likeStatus.neutral }];
			})
		},
		hasLoaded: () => {
			return cats.filter((cat) => cat.liked === likeStatus.neutral).length
		}
	};
};

const createCatImages = () => {
	const { subscribe, update } = writable({});

	let catImages;
	subscribe((v) => (catImages = v));
	return {
		subscribe,
		catImage: () => (catId) => {
			return catImages[catId];
		},
		addImg: ({ catId, imageUrl }) =>
			update((catImagesObject) => {
				catImagesObject[catId] = imageUrl;
				return catImagesObject;
			})
	};
};

export const cats = createCats();
export const catImages = createCatImages();

const createActions = () => {
	const { subscribe, set } = writable(false);

	const loadImage = async (catId) => {
		const imageUrl = await getCatImageUrl(catId);
		// console.log(imageUrl);
		catImages.addImg({ catId, imageUrl });
	};
	return {
		subscribe,
		load: async () => {
			const catsRequest = await getCatData();
			await Promise.all(
				catsRequest.map(async (cat) => {
					cats.add(cat);
					await loadImage(cat.id);
					set(true);
				})
			);
		}
	};
};

export const action = createActions();
