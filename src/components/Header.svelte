<script>
	import { slide } from 'svelte/transition';
	import Logo from '../components/Logo.svelte';

	let isNavOpen = false;

	const toggleNav = () => {
		isNavOpen = !isNavOpen;
	};
</script>

<header>
	<!-- mobile nav -->
	<div class="relative px-6 pt-8 md:hidden">
		<nav>
			<div class="flex items-center justify-between">
				<a href="/"><Logo /></a>
				<button on:click|preventDefault={toggleNav}>
					<div class="flex flex-col items-center justify-center gap-1">
						{#each Array(3) as _}
							<div class="h-1 w-6 bg-cstm-neutral-grayish-violet" />
						{/each}
					</div>
				</button>
			</div>
			{#if isNavOpen}
				<ul
					transition:slide
					class={`${
						isNavOpen
							? 'absolute top-20 left-0 right-0 mx-6 px-6 bg-cstm-primary-dark-violet text-white text-center py-10 rounded-lg font-bold space-y-5 z-10'
							: 'hidden'
					}`}
				>
					<li><a href="/#" class="block">Features</a></li>
					<li><a href="/#" class="block">Pricing</a></li>
					<li><a href="/#" class="block">Resources</a></li>
					<li><div class="h-[1px] bg-gray-600" /></li>
					<li><a href="/#" class="block">Login</a></li>
					<li>
						<a href="/#" class="block rounded-full bg-cstm-primary-cyan py-3">Sign Up</a>
					</li>
				</ul>
			{/if}
		</nav>
	</div>

	<!-- tablet and desktop nav -->
	<div class="container mx-auto mt-10 hidden px-20 md:block">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-14">
				<a href="/"><Logo /></a>
				<div class="flex items-center gap-10 text-cstm-neutral-grayish-violet">
					<a href="/#">Features</a>
					<a href="/#">Pricing</a>
					<a href="/#">Resources</a>
				</div>
			</div>
			<div class="flex items-center gap-10 text-cstm-neutral-grayish-violet">
				<a href="/#">Login</a>
				<a href="/#" class="rounded-full bg-cstm-primary-cyan px-8 py-3 text-white hover:opacity-50"
					>Sign Up</a
				>
			</div>
		</div>
	</div>
</header>
