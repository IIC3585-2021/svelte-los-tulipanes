<script>
    import Button from "./Button.svelte"
    const alertMessage = () => {
        alert("Hello there No")
    }
</script>

<Button clickHandling={alertMessage}>
    No
</Button>