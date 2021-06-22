<script>
	import CardContent from './CardContent.svelte';
	import { cats, catImages, action } from '../store';

	// acción carga los datos en el store.
    action.load();

	// con observers accedo a datos del store.
    $: firstNeutralCat = cats.firstNeutralCat($cats);
	$: catImage = catImages.catImage($catImages);
</script>

<div class="card">
	{#if firstNeutralCat}
		<CardContent cat={firstNeutralCat} url={catImage(firstNeutralCat.id)} />
	{:else}
		<div id="loading">Loading...</div>
	{/if}
</div>

<style>
	.card {
		margin: auto;
		background-color: #ffeedb;
		height: 70vh;
		width: 40vw;
		text-align: center;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
	}

	#loading {
		text-align: center;
	}
</style>
