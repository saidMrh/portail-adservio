<script lang="typescript">
	import '../tailwind.css';
    import { navigating } from '$app/stores'
    import PageNavIndicator from '$lib/components/PageNavIndicator.svelte'
	import Header from '$lib/components/Header.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'
    import ModalBackdrop from '$lib/components/modal/ModalBackdrop.svelte'
</script>


    <slot></slot>
<!-- <Footer/> -->

<style style lang="postcss">
</style>
