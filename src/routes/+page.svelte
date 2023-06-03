<script>
    import { goto } from "$app/navigation";
    import { newSession } from "../lib/pocketbase";

    async function handleNewSessionClick() {
        const session = await newSession();

        goto(`/session/${session.id}`);
    }
</script>

<h1>Quotes</h1>

<button on:click={handleNewSessionClick}>Begin new session</button>