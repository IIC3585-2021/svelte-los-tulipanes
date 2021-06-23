<script>
	import CardContent from './CardContent.svelte';
	import { cats, catImages, action } from '../store';
	import EndPage from "./EndPage.svelte"
	// acción carga los datos en el store.
    action.load();

	// con observers accedo a datos del store.
    $: firstNeutralCat = cats.firstNeutralCat($cats);
	$: catImage = catImages.catImage($catImages);
    $: hasLoaded = cats.hasLoaded($cats);
</script>

{#await firstNeutralCat}
	<div id="loading">Loading...</div>
{:then firstNeutralCat}
	{#if firstNeutralCat}
		<div class="card">
			<CardContent cat={firstNeutralCat} url={catImage(firstNeutralCat.id)} />
		</div>
	{/if}
{/await}
{#if !hasLoaded}
<EndPage/>
{/if}


<style>
	.card {
		margin: auto;
		background-color: #ffeedb;
		width: 40vw;
		text-align: center;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
		border-radius: 1rem;
		overflow:hidden;
	}

	#loading {
		text-align: center;
	}
</style>
