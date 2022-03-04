<script>
	import { slide } from 'svelte/transition';

	const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';
	let url = '';
	let copiedToClipboard = false;

	let generatedUrls = [];

	const fetchData = async (url) => {
		if (url.length > 0) {
			try {
				const response = await fetch(`${baseUrl}${url}`);
				const data = await response.json();
				generatedUrls = [
					...generatedUrls,
					{
						url: url,
						shortCode: data.result.short_link
					}
				];
			} catch (error) {
				console.log(error);
			}
		} else {
			return console.log('Please enter a valid URL');
		}
	};

	const copyShortCode = async (shortCode) => {
		try {
			await navigator.clipboard.writeText(shortCode);
			copiedToClipboard = true;

			setTimeout(() => {
				copiedToClipboard = false;
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<main>
	<div class="mt-16">
		<!-- hero -->
		<div class="md:container md:mx-auto md:grid md:grid-cols-2 md:px-20">
			<div class="md:order-last">
				<img src="/illustration-working.svg" alt="person working on computer" class="w-full" />
			</div>
			<div class="mt-10 mb-20 px-6 text-center md:px-0 md:text-left">
				<h1 class="mb-5 text-4xl font-bold md:mb-2 md:text-6xl">More than just shorter links</h1>
				<p class="mb-5 text-cstm-neutral-grayish-violet md:mb-10 md:max-w-md">
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button class="rounded-full bg-cstm-primary-cyan py-3 px-8 text-white">Get Started</button>
			</div>
		</div>

		<!-- input -->
		<div class="relative mx-6 md:container md:mx-auto md:mt-10 md:px-20">
			<div class="md:hidden">
				<img
					src="/bg-shorten-mobile.svg"
					alt="pattern"
					class="w-full rounded-lg bg-cstm-primary-dark-violet"
				/>
			</div>
			<div class="hidden md:block">
				<img
					src="/bg-shorten-desktop.svg"
					alt="pattern"
					class="w-full rounded-lg bg-cstm-primary-dark-violet"
				/>
			</div>
			<div
				class="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 md:flex-row md:px-36"
			>
				<input
					id="input"
					type="text"
					bind:value={url}
					on:focus={(event) => event.target.select()}
					placeholder="Shorten a link here..."
					class="w-full rounded-md bg-transparent bg-white px-3 py-3 focus:outline-none md:flex-1 md:py-4 md:px-8"
				/>
				<button
					on:click|preventDefault={() => {
						fetchData(url);
					}}
					class="w-full rounded-md bg-cstm-primary-cyan py-3 font-bold text-white md:w-44 md:py-4"
					>Shorten It!</button
				>
			</div>
		</div>

		<!-- Short Codes -->
		<div class="bg-gray-100 px-6 py-5">
			<div class="space-y-5 md:container md:mx-auto md:px-20">
				{#if generatedUrls.length > 0}
					{#each generatedUrls as generatedUrl, index}
						<div
							transition:slide
							class="rounded-md bg-white shadow-md md:flex md:items-center md:justify-between md:p-5 md:text-xl"
						>
							<p class="p-4 md:p-0">{generatedUrl.url}</p>
							<hr class="md:hidden" />
							<div class="space-y-2 p-4 md:flex md:items-center md:gap-5 md:space-y-0 md:p-0">
								<a
									rel="external"
									href={`//${generatedUrl.shortCode}`}
									class="text-cstm-primary-cyan">{generatedUrl.shortCode}</a
								>
								<button
									on:click={() => {
										copyShortCode(generatedUrl.shortCode);
									}}
									class={`w-full rounded-md py-2 font-bold text-white transition-all md:w-28 md:text-base ${
										copiedToClipboard ? 'bg-cstm-primary-dark-violet' : 'bg-cstm-primary-cyan'
									}`}>{copiedToClipboard ? 'Copied!' : 'Copy'}</button
								>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>

		<!-- Advanced Statistics Section -->
		<div class="bg-gray-100 px-6 py-20 text-center md:pt-10 md:pb-40">
			<div class="mb-20">
				<h2 class="mb-5 text-2xl font-bold md:text-4xl">Advanced Statistics</h2>
				<p class="text-cstm-neutral-grayish-violet md:mx-auto md:max-w-md">
					Track how your links are performing across the web with our advanced statistics dashboard.
				</p>
			</div>

			<div class="relative z-10 md:container md:mx-auto md:grid md:grid-cols-3 md:gap-8 md:px-20">
				<div
					class="absolute top-1/2 left-0 right-0 -z-10 mx-auto hidden h-2 w-1/2 bg-cstm-primary-cyan md:block"
				/>
				<!-- Brand Recognition -->
				<div class="rounded-md bg-white shadow-md">
					<div
						class="inline-flex w-fit -translate-y-10 rounded-full bg-cstm-primary-dark-violet p-5"
					>
						<img src="/icon-brand-recognition.svg" alt="brand recognition" />
					</div>
					<div class="px-6 pb-6">
						<h2 class="mb-5 text-xl font-bold">Brand Recognition</h2>
						<p class="text-cstm-neutral-grayish-violet">
							Boost your brand recognition with each click. Generic links don’t mean a thing.
							Branded links help instil confidence in your content.
						</p>
					</div>
				</div>
				<div class="inline-flex h-20 w-2 bg-cstm-primary-cyan md:hidden" />

				<!-- Detailed Records -->
				<div class="rounded-md bg-white shadow-md md:translate-y-10">
					<div
						class="inline-flex w-fit -translate-y-10 rounded-full bg-cstm-primary-dark-violet p-5"
					>
						<img src="/icon-detailed-records.svg" alt="detailed records" />
					</div>
					<div class="px-6 pb-6">
						<h2 class="mb-5 text-xl font-bold">Detailed Records</h2>
						<p class="text-cstm-neutral-grayish-violet">
							Gain insights into who is clicking your links. Knowing when and where people engage
							with your content helps inform better decisions.
						</p>
					</div>
				</div>
				<div class="inline-flex h-20 w-2 bg-cstm-primary-cyan md:hidden" />

				<!-- Full Customizable -->
				<div class="rounded-md bg-white shadow-md md:translate-y-20">
					<div
						class="inline-flex w-fit -translate-y-10 rounded-full bg-cstm-primary-dark-violet p-5"
					>
						<img src="/icon-fully-customizable.svg" alt="fully customizable" />
					</div>
					<div class="px-6 pb-6">
						<h2 class="mb-5 text-xl font-bold">Fully Customizable</h2>
						<p class="text-cstm-neutral-grayish-violet">
							Improve brand awareness and content discoverability through customizable links,
							supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Get Started -->
		<div class="relative text-white">
			<div class="md:hidden">
				<img
					src="/bg-boost-mobile.svg"
					alt="background pattern"
					class="w-full bg-cstm-primary-dark-violet"
				/>
			</div>
			<div class="hidden md:block">
				<img src="/bg-boost-desktop.svg" alt="pattern" class="bg-cstm-primary-dark-violet" />
			</div>
			<div class="absolute inset-0 flex flex-col items-center justify-center">
				<h2 class="mb-5 text-2xl font-bold md:text-4xl">Boost your links today</h2>
				<button class="rounded-full bg-cstm-primary-cyan px-8 py-3 font-bold"> Get Started </button>
			</div>
		</div>
	</div>
</main>
