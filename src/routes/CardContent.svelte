<script>
    import YesButton from "./YesButton.svelte"
    import NoButton from "./NoButton.svelte"
    let content = {
        breed: "American",
        img: "../static/favicon.png",
        description: "A beautiful cat"
    }
</script>

<h1>Breed: {content.breed}</h1>
<img src={content.img} alt="Cat">
<p>{content.description}</p>

<div class="btn-holder">
    <YesButton color="green">
        Yes
    </YesButton>
    
    <NoButton>
        No
    </NoButton>
</div>

<style>
    h1 {
        color:#3e363f;
        padding-top: 1rem;
    }
    .btn-holder {
        padding-top: 10rem;
        margin-bottom: 1rem;
    }
</style>