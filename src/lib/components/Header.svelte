<script lang="ts">
    import { MenuIcon } from 'svelte-feather-icons'
    import Navigation from './Navigation.svelte'
    import NavBar from './NavBar.svelte'
    let isNavOpened = false

    function toggleNav() {
        isNavOpened = !isNavOpened
    }
</script>

<header class="w-full fixed border-b border-gray-200 bg-white z-10">
    <NavBar />

    {#if isNavOpened}
        <Navigation {toggleNav} />
    {/if}
    <!-- <button on:click={toggleNav}><MenuIcon class="w-5 inline-block" /> Menu</button> -->
    <slot/>
</header>
