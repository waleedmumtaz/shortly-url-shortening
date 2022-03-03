<script>
	import Logo from '../components/Logo.svelte';
</script>

<footer>
	<div
		class="flex flex-col items-center gap-10 bg-cstm-neutral-dark-blue py-10 text-cstm-neutral-gray"
	>
		<Logo fillColor="#FFFFFF" />

		<!-- Features -->
		<div class="text-center">
			<p class="pb-5 font-bold text-white">Features</p>
			<div class="flex flex-col items-center gap-1">
				<a href="/#">Link Shortening</a>
				<a href="/#">Branded Links</a>
				<a href="/#">Analytics</a>
			</div>
		</div>

		<!-- Resources -->
		<div class="text-center">
			<p class="pb-5 font-bold text-white">Resources</p>
			<div class="flex flex-col items-center gap-1">
				<a href="/#">Blog</a>
				<a href="/#">Developers</a>
				<a href="/#">Support</a>
			</div>
		</div>

		<!-- Company -->
		<div class="text-center">
			<p class="pb-5 font-bold text-white">Company</p>
			<div class="flex flex-col items-center gap-1">
				<a href="/#">About</a>
				<a href="/#">Our Team</a>
				<a href="/#">Contact</a>
			</div>
		</div>
	</div>

	<div class="bg-cstm-neutral-dark-blue px-6 pb-1 text-center text-sm text-white">
		Challenge by <a
			href="https://www.frontendmentor.io?ref=challenge"
			target="_blank"
			class="text-cstm-primary-cyan">Frontend Mentor</a
		>. Coded by
		<a href="https://github.com/waleedmumtaz" target="_blank" class="text-cstm-primary-cyan"
			>Waleed Mumtaz</a
		>.
	</div>
</footer>
