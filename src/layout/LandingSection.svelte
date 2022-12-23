<script>
	import moment from 'moment';
	import SectionWrapper from '../components/SectionWrapper.svelte';

	const duration = moment([2020, 6, 20]).toNow(true);
	const fullName = 'Mfundo Shabalala';
</script>

<SectionWrapper>
	<div slot="link" id="section1" />
	<h1 slot="title">
		<span>Hello! My name is</span>
		<span>{fullName}</span>
	</h1>
	<p slot="content">
		I am a web developer with {duration} of experience building websites and web applications. I am skilled
		in frontend and backend development, and have a passion for creating intuitive, user-friendly interfaces.
	</p>
	<ul slot="socials">
		<li><a href="."><i class="fab fa-github" /><span>Connect on GitHub</span></a></li>
		<li><a href="."><i class="fab fa-linkedin" /><span>Connect on LinkedIn</span></a></li>
		<li><a href="."><i class="fab fa-twitter" /><span>Connect on Twitter</span></a></li>
	</ul>
</SectionWrapper>

<style lang="scss">
	h1 {
		@apply text-xl font-black flex items-end gap-4 justify-center;
	}

	h1 span:last-child {
		@apply text-7xl bg-gradient-to-r from-teal-900 via-teal-700 to-teal-900 text-transparent bg-clip-text;
	}

	p {
		@apply max-w-2xl font-light px-6 leading-5;
	}

	ul {
		@apply flex gap-4 font-thin mt-6 text-sm whitespace-nowrap;
	}

	ul li {
		@apply flex-1 shadow-sm shadow-slate-600 hover:shadow-orange-600 rounded px-4 py-2 duration-500;
	}

	ul li a {
		@apply flex flex-col items-center justify-center;
	}

	i.fab {
		@apply text-3xl;
	}
</style>
