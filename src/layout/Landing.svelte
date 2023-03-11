<script>
	import moment from 'moment';
	import Container from '../components/Container.svelte';

	const duration = moment([2020, 6, 20]).toNow(true);
	const fullName = 'Mfundo Shabalala';
	const socials = [
		{
			icon: 'fab fa-github',
			link: 'https://www.github.com/mfundoshabalala',
			text: 'Connect on GitHub'
		},
		{
			icon: 'fab fa-linkedin',
			link: 'https://www.linkedin.com/in/mfundoshabalala',
			text: 'Connect on LinkedIn'
		},
		{
			icon: 'fab fa-twitter',
			link: 'https://www.twitter.com/mfundoshabalal',
			text: 'Connect on Twitter'
		}
	];
</script>

<Container>
	<div slot="link" id="section1" />
	<div slot="title">
		<h1>
			<span>{fullName}</span>
		</h1>
		<h2>A frontend developer</h2>
	</div>
	<span slot="description" />
	<p slot="content">
		As a web developer with {duration} years of experience, I have built a variety of websites and web
		applications. I am proficient in both frontend and backend development and am dedicated to creating
		intuitive, user-friendly interfaces.
	</p>
	<ul slot="socials">
		{#each socials as { icon, link, text }}
			<li>
				<a href={link} target="_blank" rel="noreferrer">
					<i class={icon} />
					<span>{text}</span>
				</a>
			</li>
		{/each}
	</ul>
</Container>

<style lang="scss">
	div:first-of-type {
		@apply absolute -top-48;
	}

	h1 {
		@apply flex leading-tight font-thin items-end select-none;
	}

	h1 span:first-child {
		@apply px-2 py-1;
	}

	h1 span:last-child {
		@apply font-black font-comforter text-5xl leading-normal px-2 bg-gradient-to-r from-teal-900 via-teal-700 to-teal-900 text-transparent bg-clip-text;
	}

	h2 {
		@apply text-center;
	}

	p {
		@apply max-w-3xl font-thin tracking-tighter pl-5 pr-1 sm:px-6 leading-5;
	}

	ul {
		@apply flex sm:gap-4 font-thin mt-6 text-xs whitespace-nowrap;
	}

	ul li {
		@apply flex-1 sm:shadow-sm hover:shadow-teal-600 shadow-slate-600 rounded px-3 sm:px-4 py-2 duration-500 font-mono;
	}

	ul li a {
		perspective: 50px;
		@apply flex flex-col items-center justify-center;
	}

	ul li a span {
		@apply hidden sm:inline-block text-xs sm:text-sm font-thin tracking-tighter;
	}

	li:hover i.fab {
		@apply animate-bounce-spin bg-gradient-to-r from-teal-600 via-teal-700 to-teal-600 bg-clip-text text-transparent;
	}

	i.fab {
		@apply text-2xl sm:text-3xl;
	}
</style>
