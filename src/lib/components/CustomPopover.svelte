<script lang="ts">
    import { Popover, PopoverButton, PopoverPanel, Transition } from "@rgossiaux/svelte-headlessui";
    import { ChevronDownIcon } from "@rgossiaux/svelte-heroicons/outline";
    import PopoverIconOne from "./popover-icons/_PopoverIconOne.svelte";
    import PopoverIconTwo from "./popover-icons/_PopoverIconTwo.svelte";
    import PopoverIconThree from "./popover-icons/_PopoverIconThree.svelte";
  
    const solutions = [
      {
        name: "Insights",
        description: "Measure actions your users take",
        href: "##",
        icon: PopoverIconOne,
      },
      {
        name: "Automations",
        description: "Create your own targeted content",
        href: "##",
        icon: PopoverIconTwo,
      },
      {
        name: "Reports",
        description: "Keep track of your growth",
        href: "##",
        icon: PopoverIconThree,
      },


    ];
  </script>
  
  <div class="w-full max-w-sm px-4 fixed top-16">
    <Popover class="relative" let:open>
      <PopoverButton
        class={`
                  ${open ? "" : "text-gray-900"}
                   px-4 py-2 group
                   rounded-full inline-flex items-center text-base  focus:outline-none hover:bg-black hover:text-white transition-colors duration-100 `}
      >
        <span>Solutions</span>
        <ChevronDownIcon
          class={`${open ? "transition ease-in-out  duration-150 rotate-180 ml-2" : ""}
                    ml-2 h-5 w-5 text-gray-300  group-hover:text-white  `}
          aria-hidden="true"
        />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl"
        >
          <div
            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-2/3"
          >
            <div class="relative grid gap-8 bg-white p-7 ">
              {#each solutions as item (item.name)}
                <a
                  href={item.href}
                  class="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-50"
                >
                  <div
                    class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12"
                  >
                    <svelte:component this={item.icon} aria-hidden="true" />
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p class="text-sm text-gray-400 capitalize font-normal">
                      {item.description}
                    </p>
                  </div>
                </a>
              {/each}
            </div>
            <div class="p-4 bg-gray-50 hover:bg-gray-100 border-t border-gray-100">
              <a
                href="##"
                class="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-50"
              >
                <span class="flex items-center">
                  <span class="text-sm font-semibold text-gray-900">
                    Documentation
                  </span>
                </span>
                <span class=" text-sm text-gray-400 capitalize font-normal">
                  Start integrating products and tools
                </span>
              </a>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  </div>
  
  <style>
    
  </style>