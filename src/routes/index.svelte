<!-- <script lang="typescript">

	export let drinkProb;

	let drinkState = drinkProb;

	const clickHandler = async () => console.log('Click !')

	let firstName: string = 'Said';

</script>

<div class="wrapper">
	<button on:click="{clickHandler}">Click me !</button>
</div> -->


<script lang="typescript" context="module">

    export async function load({ session }) {
        const { user } = session
        return {
            props: {
                user
            }
        };
    }
</script>

<script lang="ts">
    import Seo from '$lib/components/SEO.svelte'
    import DefaultModal from '$lib/components/modal/presets/DefaultModal.svelte'
    import Sidepanel from '$lib/components/modal/presets/Sidepanel.svelte'
    import { openModal } from '$lib/components/modal/modal.store'
    import PopoverI from '$lib/components/popoveri/PopoverI.svelte'
    import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@rgossiaux/svelte-headlessui";
import CustomPopover from '$lib/components/CustomPopover.svelte'
import Columns from '$lib/components/blog/Columns.svelte'

    export let user

    function showModal() {
        openModal(DefaultModal, { title: "Alert", message: "The Modal content goes here..." })
    }

    function showModalSide() {
        openModal(Sidepanel, { title: "Alert", message: "The Sidepanel content goes here..." })
    }
</script>

<Seo title="Home"/>
<div class="flex flex-col  relative">
    <!-- App logo and tagline -->
    <div class="w-full mb-4 flex flex-col place-items-center">
        <div class="banner flex flex-col place-items-center  mb-2">
       
            <h3 class="text-6xl  mb-10 mt-1 0">Portail entreprise Adservio</h3>
            <div class="hidden">
                <h2 >Starter Kit</h2>
                <small class="uppercase font-semibold text-gray-800 mt-4"> Typescript - TailwindCSS - <small class="bg-teal-200 text-teal-800 px-2">Supabase</small> Authentication + Profile - Alert, <a href="/" on:click|preventDefault={showModal}>Modal</a>, <a href="/" on:click|preventDefault={showModalSide}>Sidepanel</a>, 
                <span class="inline-block relative">
                
                <PopoverI dir="left">
                    <a slot="action" href="/" let:toggleVisibility on:click|preventDefault={toggleVisibility}>Popover</a>
                    <ul class="popover__menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                    </ul>
                </PopoverI>
                <CustomPopover/>
            </span>, Form Helpers, etc.</small>
            <Popover style="position: relative;">
                <PopoverButton>Solutions</PopoverButton>
              
                <PopoverPanel style="position: absolute; z-index: 10;">
                  <div class="panel-contents">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                  </div>
              
                  <img src="/solutions.jpg" alt="" />
                </PopoverPanel>
              </Popover>
              <p class="mb-6"><strong>Svelte Starter Kit</strong> is an opinionated boilerplate based off of SvelteKit, with all the bells and whistles you want ready, up and running when starting any Full-stack Svelte/Javascript project.</p>
            {#if user && !user.guest}
                <a class="bg-gray-500 border border-gray-600 text-white px-4 py-2 rounded shadow" href="/profile" title="View Profile">View Profile</a>
            {:else}
                <button>Get Started</button>
            {/if}
            </div>
            
           
            </div>
           
    </div>
</div>
<Columns/>
<style lang="postcss">
    .popover__menu {
        @apply bg-white shadow-md rounded-md  w-40
    }
    .popover__menu li{
        @apply hover:bg-slate-100 cursor-pointer
    }
</style>
