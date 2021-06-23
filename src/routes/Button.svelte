<script>
    export let color;
    export let clickHandling;
    if (color == "green"){
        color = "green"
    } else {
        color = "#f76027"
    }
    
</script>

<button on:click={clickHandling} style="--btn-color: {color}">
        <slot/>
</button>

<style>
    button {
        background-color: var(--btn-color);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        justify-content: space-evenly;
        border-radius: 50%;
        height: 6em;
        width: 6em;
        justify-items: center;
        border: 0;
        cursor: pointer;
    }
    button:hover {
        filter: brightness(120%);
        transition: filter 100ms linear;
    }
    :global(body.dark-mode) button {
        background-color: #0084f6;
        color: white;
    }
</style>