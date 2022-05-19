<script lang="typescript">
	import '../tailwind.css';
	import '../app.css';
	import { navigating } from '$app/stores';
	import { signin } from '$lib/user';
import NavBar from '$lib/components/NavBar.svelte';
</script>

{#if $signin}
	<main class="px-2 mx-auto max-w-7xl h-full sm:px-6 lg:px-8  ">
		<slot />
	</main>
{:else}
    <NavBar />

	{#if $navigating}
		<pagenavindicator />
	{/if}
	<header />
	<alertlist />
	<main class="px-2 mx-auto max-w-7xl h-full sm:px-6 lg:px-8  ">
		<slot />
	</main>
	<modalbackdrop />
	<!-- <Footer/> -->
{/if}

<style style lang="postcss">
</style>
