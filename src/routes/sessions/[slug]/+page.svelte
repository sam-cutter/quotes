<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>Hey! ID: {data.session.id}</h1>