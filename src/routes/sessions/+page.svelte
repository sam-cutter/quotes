<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

{#each data.sessions as session}
    <a href={`/sessions/${session.id}`}>{session.updated}</a>
    <br>
{/each}