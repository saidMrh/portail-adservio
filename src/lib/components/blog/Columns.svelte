<script>
     import { ChevronDownIcon } from "@rgossiaux/svelte-heroicons/outline";
</script>
<div class="bg-blue-50 p-10 rounded-3xl">
    <div class="relative max-w-lg mx-auto divide-y divide-slate-200 lg:max-w-7xl">
      <div>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 18 19.1111 21 12 21C4.88889 21 4 18 4 12C4 6 5 3 12 3C19 3 20 6 20 12Z" stroke="#0C62FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 4C9 4 9.60457 6.39543 8.5 7.5C7.39543 8.60457 5 8 5 8" stroke="#0C62FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 16H12" stroke="#0C62FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 13H16" stroke="#0C62FB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        <h2 class="sm:text-4xl mt-2">Articles et news Adservio</h2>
        <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          <p class="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
          <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email-address" type="email" autocomplete="email" required class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:max-w-xs" placeholder="Enter your email">
            </div>
            <div class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
              <button type="button" class="w-full bg-blue-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:inline-flex">Notify me</button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
        <div>
          <p class="text-sm text-gray-500">
            <time datetime="2020-03-16">Mar 16, 2020</time>
          </p>
            <h5>Boost your conversion rate</h5>
            <p class="mt-3 text-base text-gray-500">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
          <div class="mt-3">
            <a href="#" class="text-base font-semibold text-adservio hover:text-blue-500 link"> Read full story </a>
          </div>
        </div>
  
        <div>
          <p class="text-sm text-gray-500">
            <time datetime="2020-03-10">Mar 10, 2020</time>
          </p>
          <h5>How to use search engine optimization to drive sales</h5>
            <p class="mt-3 text-base text-gray-500">Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
          <div class="mt-3">
            <a href="#" class="text-base font-semibold text-adservio hover:text-blue-500 link"> Read full story </a>
          </div>
        </div>
  
        <div>
          <p class="text-sm text-gray-500">
            <time datetime="2020-02-12">Feb 12, 2020</time>
          </p>
            <h5>Improve your customer experience</h5>
            <p class="mt-3 text-base text-gray-500">Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.</p>
          <div class="mt-3">
            <a href="#" class="text-base font-semibold text-adservio hover:text-blue-500 link "> Read full story </a>
          </div>
        </div>
  
        <div>
          <p class="text-sm text-gray-500">
            <time datetime="2020-01-29">Jan 29, 2020</time>
          </p>
            <h5>Writing effective landing page copy</h5>
            <p class="mt-3 text-base text-gray-500">Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.</p>
          <div class="mt-3">
            <a href="#" class="text-base font-semibold text-adservio hover:text-blue-500 link"> Read full story </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Dernières news Adservio</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div class="card">
          <div class="flex-shrink-0">
            <img class="h-48 w-full  card-zoom-image" src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="">
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="#" class="badge"> Charte Adservio </a>
              </p>
              <a href="#" class="block mt-2">
                <h5>Boost your conversion rate</h5>
                <p class=" font-normal text-base text-gray-500 pt-10 pb-5">Anna, Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only text-black">Roel Aufderehar</span>
                  <img class="h-10 w-10 rounded-full" src="/images/avatars/Anna.png" alt="">
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="link text-black"> Anna ZELCER-LERMINE   </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="flex-shrink-0 "  >
            <img class="h-48 w-full card-zoom-image " src="https://images.unsplash.com/photo-1618481187866-5c7b6b9b5431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80" alt="">
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="#" class=" badge"> Event Adservio </a>
              </p>
              <a href="#" class="block mt-2">
                <h5 >Primes & intéressement</h5>
                <p class=" font-normal text-base text-gray-500 pt-10 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only text-black">Brenna Goyette</span>
                  <img class="h-10 w-10 rounded-full" src="/images/avatars/Oumaima.png" alt="">
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="text-black link"> Oumaima DIDI </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 4 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="card" >
          <div class="flex-shrink-0">
            <img class="h-48 w-full card-zoom-image" src="https://images.unsplash.com/photo-1597415018997-cdc2189fe3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80" alt="">
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a href="#" class=" badge bg-haiti"> Case Study </a>
              </p>
              <a href="#" class="block mt-2">
                <h5 >Employee experience</h5>
                <p class=" font-normal text-base text-gray-500 pt-10 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#" class="link">
                  <span class="sr-only text-black">Safwen KHALLOUFI</span>
                  <img class="h-10 w-10 rounded-full" src="/images/avatars/Safwen.png" alt="">
                </a>
              </div>
              <div class="ml-3">
                <a href="#" class="text-black link text-sm"> Safwen KHALLOUFI </a>
                <p class=" ">
                 
                </p>
                <div class="flex space-x-1 text-gray-400 text-sm font-normal">
                  <time datetime="2020-02-12"> Feb 12, 2020 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 11 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-teal-50 rounded-2xl ">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
      <div class="space-y-5 sm:space-y-4">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 17.9167C16 19.1912 13 20 10 20C6.5 20 4 19.1912 4 17.9167C4 16.0577 7 15 10 15C13 15 16 16.25 16 17.9167Z" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.5 17.334C20.5449 17.0378 21 16.547 21 15.9208C21 14.7108 19.261 13.7654 17 13.5475" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 11C18.3807 11 19.5 9.88071 19.5 8.5C19.5 7.11929 18.3807 6 17 6" stroke="#14b8a6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          
          </svg>
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>
        <p class="text-xl text-gray-500">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.</p>
      </div>
      <div class="lg:col-span-2">
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="images/avatars/malika.png" alt="">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h5>Malika SABEG</h5>
                <p class="">DRH</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="images/avatars/Oumaima.png" alt="">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h5>Leslie Alexander</h5>
                <p class="">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="images/avatars/Ghassen.png" alt="">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h5>Leslie Alexander</h5>
                <p class="">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="images/avatars/anna.png" alt="">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h5>Leslie Alexander</h5>
                <p class="">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="images/avatars/sarah.png" alt="">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h5>Leslie Alexander</h5>
                <p class="">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center space-x-4 lg:space-x-6">
              <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="images/avatars/SarahY.png" alt="">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h5>Leslie Alexander</h5>
                <p class="">Co-Founder / CEO</p>
              </div>
            </div>
          </li>

          <!-- More people... -->
        </ul>
      </div>
    </div>
  </div>
</div>


<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-8 xl:col-span-1">
        <img class="h-10" src="images/logo-simple.png" alt="Adservio">
        <p class="text-gray-500 text-base">We build a resilient digital experiences.</p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Dribbble</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Marketing </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Analytics </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Commerce </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Insights </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Pricing </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Documentation </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Guides </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> API Status </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> About </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Blog </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Jobs </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Press </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Partners </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Claim </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Privacy </a>
              </li>

              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Terms </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 border-t border-gray-200 pt-8">
      <p class="text-base text-gray-400 xl:text-center">&copy;2022, Made with ❤️ by Adservio, Inc. All rights reserved.</p>
    </div>
  </div>
</footer>
