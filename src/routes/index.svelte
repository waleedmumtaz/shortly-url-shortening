<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import MainContent from '../components/MainContent.svelte';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Shortly | URL Shortening Service</title>
	<meta name="title" content="Shortly | URL Shortening Service" />
	<meta
		name="description"
		content="Shortly | URL Shortening Service built with SvelteKit and Tailwind CSS"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://shortly-url-shortening-two.vercel.app/" />
	<meta property="og:title" content="Shortly | URL Shortening Service" />
	<meta property="og:description" content="Shortly | URL Shortening Service built with SvelteKit and Tailwind CSS" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/dev-waleed/image/upload/v1646414927/Frontend%20Mentor/Meta%20Images/030_shortly-url-shortening_1200x628.png"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://shortly-url-shortening-two.vercel.app/" />
	<meta property="twitter:title" content="Shortly | URL Shortening Service" />
	<meta property="twitter:description" content="Shortly | URL Shortening Service built with SvelteKit and Tailwind CSS" />
	<meta
		property="twitter:image"
		content="https://res.cloudinary.com/dev-waleed/image/upload/v1646414927/Frontend%20Mentor/Meta%20Images/030_shortly-url-shortening_1200x628.png"
	/>
</svelte:head>

<div class="font-poppins">
	<Header />
	<MainContent />
	<Footer />
</div>
