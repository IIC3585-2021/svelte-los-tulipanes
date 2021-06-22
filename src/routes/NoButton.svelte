<script>
    import Button from "./Button.svelte"
    import { cats } from "../store"
    export let catId;
    const handling = () => {
        cats.dislike(catId)
        console.log(catId)
    }
</script>

<Button clickHandling={handling}>
    No
</Button>