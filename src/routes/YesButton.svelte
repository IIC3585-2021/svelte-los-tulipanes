<script>
    import Button from "./Button.svelte"
    import { cats } from "../store"
    export let catId;
    const handling = () => {
        cats.like(catId)
    }
</script>

<Button clickHandling={handling} color="green">
    Yes
</Button>