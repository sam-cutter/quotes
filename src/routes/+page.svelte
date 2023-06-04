<script lang="ts">
    import { goto } from "$app/navigation";
    import { newSession } from "../lib/pocketbase";

    async function handleNewSessionClick() {
        const session = await newSession();

        goto(`/sessions/${session.id}`);
    }
</script>

<h1>Quotes</h1>

<button on:click={handleNewSessionClick}>Begin new session</button>