<script>
	import YesButton from './YesButton.svelte';
	import NoButton from './NoButton.svelte';
	export let cat;
    export let url;
</script>

<div class="card-content">
	<h2>{cat.name}</h2>
	<h4>{cat.origin}</h4>
	<div class="image">
        {#if url}
		    <img src={url} alt={cat.name} />
        {/if}
	</div>
	<div class="info">
		<p>{cat.description}</p>
		<p>Temperament: {cat.temperament}</p>
	</div>
</div>
<div class="buttons-container">
	<div class="buttons">
		<NoButton catId={cat.id} />
		<YesButton catId={cat.id} />
	</div>
</div>

<style>
	.card-content {
		overflow: scroll;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	.card-content h2 {
		font-size: 2em;
		margin-bottom: -0.5em;
	}

	.card-content h4 {
		font-weight: 500;
		font-size: 1.2rem;
	}

	.info {
		font-size: 1.1rem;
		width: 80%;
		margin: auto;
		text-align: justify;
	}

	.buttons-container {
		width: 100%;
		padding-bottom: 1rem;
	}

	.buttons {
		width: 100%;
		margin: auto;
		display: flex;
		justify-content: space-evenly;
	}

	.image {
		height: auto;
		margin: auto;
		margin-bottom: 2rem;
		text-align: center;
	}

	.image img {
		width: auto;
		height: 20rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>
