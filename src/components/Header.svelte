<script>
	import { slide } from 'svelte/transition';

	let isNavOpen = false;

	const toggleNav = () => {
		isNavOpen = !isNavOpen;
	};
</script>

<header>
	<!-- mobile nav -->
	<div class="px-6 pt-8 relative">
		<nav>
			<div class="flex justify-between items-center">
				<img src="/logo.svg" alt="logo" />
				<button on:click|preventDefault={toggleNav}>
					<div class="flex flex-col justify-center items-center gap-1">
						{#each Array(3) as _}
							<div class="w-6 h-1 bg-cstm-neutral-grayish-violet" />
						{/each}
					</div>
				</button>
			</div>
			{#if isNavOpen}
				<ul
					transition:slide
					class={`${
						isNavOpen
							? 'absolute top-20 left-0 right-0 mx-6 px-6 bg-cstm-primary-dark-violet text-white text-center py-10 rounded-lg font-bold space-y-5'
							: 'hidden'
					}`}
				>
					<li><a href="/#" class="block">Features</a></li>
					<li><a href="/#" class="block">Pricing</a></li>
					<li><a href="/#" class="block">Resources</a></li>
					<li><div class="h-[1px] bg-gray-600" /></li>
					<li><a href="/#" class="block">Login</a></li>
					<li>
						<a href="/#" class="bg-cstm-primary-cyan block py-3 rounded-full">Sign Up</a>
					</li>
				</ul>
			{/if}
		</nav>
	</div>
</header>
