<script>
    import Button from "./Button.svelte"
    const alertMessage = () => {
        alert("Hello there Yes")
    }
</script>

<Button clickHandling={alertMessage} color="green">
    Yes
</Button>