<script>
	import EmailIcon from '$lib/icons/email.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import LinkedInIcon from '$lib/icons/linkedin.svelte';
	import TelegramIcon from '$lib/icons/telegram.svelte';
</script>

<section
	class="w-screen min-h-screen px-[7vw] py-10 lg:py-4
		bg-primary text-typography-primary text-center md:text-left
		items-center flex flex-col-reverse lg:flex-row justify-center
		lg:gap-48 gap-12
	"
>
	<div class="flex-shrink-0 flex md:block flex-col items-center">
		<h1 class="md:text-4xl mb-4 md:mb-2 text-3xl">
			Hi! I'm <span class="text-typography-accent font-medium">Andrey&nbspEfremenkov</span>
		</h1>
		<p class="mb-6 max-w-[470px] text-base">
			I'm <span class="underline">fullstack engineer</span>, experienced in building complicated
			scalable web applications.
		</p>
		<p class="mb-1 text-base">You can get in touch with me with one of this channels:</p>
		<ul class="text-base flex md:gap-2 md:justify-start justify-center flex-col md:flex-row mb-6">
			<li>
				<a href="https://t.me/t415mn" class="link">
					<TelegramIcon class="w-4 h-4 md:hidden" />telegram
				</a>
			</li>
			<li class="text-typography-secondary md:inline hidden">|</li>
			<li>
				<a href="mailto:efremenkovan99@gmail.com" class="link">
					<EmailIcon class="w-4 h-4 md:hidden" />email
				</a>
			</li>
		</ul>

		<p class="text-base">You can also find me on:</p>
		<ul class="text-base flex md:gap-2 md:justify-start justify-center flex-col md:flex-row">
			<li>
				<a href="https://github.com/efremenkovan" class="link">
					<GithubIcon class="w-4 h-4 md:hidden" />github
				</a>
			</li>
			<li class="text-typography-secondary md:inline hidden">|</li>
			<li>
				<a href="https://www.linkedin.com/in/andrey-efremenkov-68845a208" class="link">
					<LinkedInIcon class="w-4 h-4 md:hidden" />linkedin
				</a>
			</li>
		</ul>
	</div>
	<div class="flex justify-center flex-shrink">
		<picture>
			<source srcset="profile_image.jpg, profile_image@2x.jpg 2x" />
			<source srcset="profile_image.jpg, profile_image@3x.jpg 3x" />
			<img
				src="profile_image.jpg"
				alt="Andrey Efremenkov"
				class="rounded-xl max-w-[250px] max-h-[250px] lg:max-w-[350px] lg:max-h-[350px] w-full"
			/>
		</picture>
	</div>
</section>

<style lang="postcss">
	.link {
		@apply text-typography-link gap-2 flex items-center px-4 py-1 md:px-2 relative;
	}

	.link:first-child {
		@apply -ml-2;
	}

	.link::before {
		content: '';
		@apply absolute bottom-0 left-0 h-[2px] w-full bg-[currentColor] rounded-[2px] transition-all scale-x-0 duration-[400];
	}

	.link:hover::before {
		@apply scale-x-100;
	}
</style>
