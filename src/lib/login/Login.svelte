<script>
    // import Auth from 'src/routes/auth.svelte';
	import _customLayout from '../../routes/_customLayout.svelte';
	import { auth } from '../supabase';

    // let auth: Auth;
    
</script>

<customLayout>
	<div class="">
		<div class="mt-20   md:flex items-center justify-center">
			<div class=" md:hidden sm:mb-8 mb-6">
				<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg1.svg" alt="logo" />
			</div>
			<div
				class="bg-white shadow-sm border border-gray-100 rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6 "
			>
				<p
					tabindex="0"
					class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 text-center"
				>
					Connexion au portail
				</p>
				<button
					aria-label="Continue with google"
					role="button"
					class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-10 hover:bg-gray-100"
				>
					<img
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg"
						alt="google"
					/>
					<p class="text-base font-medium ml-4 text-gray-700">Continuer avec Google</p>
				</button>

				<div class="w-full flex items-center justify-between py-5">
					<hr class="w-full bg-gray-400" />
					<p class="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
					<hr class="w-full bg-gray-400" />
				</div>
				<div>
					<label for="email" class="text-xs font-medium leading-none text-gray-400 font-mono">
						Email
					</label>
					<input
						id="email"
						aria-labelledby="email"
						type="email"
						class=" border-2 border-gray-300 rounded  font-medium leading-none placeholder-gray-300 text-gray-700 py-3 w-full pl-3 mt-2"
						placeholder="your email"
					/>
				</div>
				<div class="mt-6 w-full">
					<label for="myInput" class="text-xs font-medium leading-none  text-gray-400 font-mono">
						Mot de passe
					</label>
					<div class="relative flex items-center justify-center">
						<input
							id="myInput"
							type="password"
							class="b border-2 border-gray-300 rounded font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
						/>
						<div class="absolute right-0 mt-2 mr-3 cursor-pointer" onclick="showPassword()">
							<div id="show">
								<img
									src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg5.svg"
									alt="eye"
								/>
							</div>
							<div id="hide" class="hidden">
								<img
									src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg6.svg"
									alt="eye"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-8">
					<button
						role="button"
						class="focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 text-sm font-semibold leading-none text-white focus:outline-none bg-adservio border rounded hover:bg-blue-600 py-4 w-full"
						>Connexion</button
					>
				</div>
			</div>
			<div class="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
				<div class=" mx-auto flex justify-center">
					<img src="/images/logo-large.png" class="w-40" alt="logo" />
				</div>
				<div class="flex items-start mt-8">
					<div>
						<img
							class="w-24"
							src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg7.svg"
							alt="quote"
						/>
					</div>
					<p class="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">
						A long descriptive name is better than a short enigmatic name. A long descriptive name
						is better than a long descriptive comment.
					</p>
				</div>
				<div class="flex items-center pl-8 mt-10">
					<div class="w-16 h-16">
						<img
							src="https://res.infoq.com/podcasts/uncle-bob-solid-ddd/en/headerimage/uncle-bob-martin-h-1535100693492.jpeg"
							alt="profile picture"
							class="w-full h-full rounded-full"
						/>
					</div>
					<div class="ml-2">
						<p class="text-sm font-medium leading-none text-gray-800">Uncle BOB</p>
						<p
							class="text-sm font-medium leading-none text-gray-600 mt-1 cursor-pointer hover:underline"
						>
							Clean Code
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</customLayout>
