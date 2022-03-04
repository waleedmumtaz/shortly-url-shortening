<script>
	import Logo from '../components/Logo.svelte';
</script>

<footer>
	<div class="bg-cstm-neutral-dark-blue py-10 text-cstm-neutral-gray">
		<div
			class="flex flex-col items-center gap-10 md:container md:mx-auto md:grid md:grid-cols-6 md:items-start md:px-20"
		>
			<div class="md:col-span-2">
				<Logo fillColor="#FFFFFF" />
			</div>

			<!-- Features -->
			<div class="text-center md:text-left">
				<p class="pb-5 font-bold text-white">Features</p>
				<div class="flex flex-col items-center gap-1 md:items-start md:gap-3">
					<a href="/#">Link Shortening</a>
					<a href="/#">Branded Links</a>
					<a href="/#">Analytics</a>
				</div>
			</div>

			<!-- Resources -->
			<div class="text-center md:text-left">
				<p class="pb-5 font-bold text-white">Resources</p>
				<div class="flex flex-col items-center gap-1 md:items-start md:gap-3">
					<a href="/#">Blog</a>
					<a href="/#">Developers</a>
					<a href="/#">Support</a>
				</div>
			</div>

			<!-- Company -->
			<div class="text-center md:text-left">
				<p class="pb-5 font-bold text-white">Company</p>
				<div class="flex flex-col items-center gap-1 md:items-start md:gap-3">
					<a href="/#">About</a>
					<a href="/#">Our Team</a>
					<a href="/#">Contact</a>
				</div>
			</div>

			<!-- Socials -->
			<div class="flex items-center justify-center gap-5">
				<a href="/#"
					><img
						src="/icon-facebook.svg"
						alt="facebook icon"
						class="transition-all hover:-translate-y-1"
					/></a
				>
				<a href="/#"
					><img
						src="/icon-twitter.svg"
						alt="twitter icon"
						class="transition-all hover:-translate-y-1"
					/></a
				>
				<a href="/#"
					><img
						src="/icon-pinterest.svg"
						alt="pinterest icon"
						class="transition-all hover:-translate-y-1"
					/></a
				>
				<a href="/#"
					><img
						src="/icon-instagram.svg"
						alt="instagram icon"
						class="transition-all hover:-translate-y-1"
					/></a
				>
			</div>
		</div>
	</div>

	<div class="bg-cstm-neutral-dark-blue px-6 pb-1 pt-10 text-center text-sm text-white">
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
