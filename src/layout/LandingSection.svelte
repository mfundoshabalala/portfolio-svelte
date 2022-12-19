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
</SectionWrapper>

<style>
	h1 {
		@apply text-xl font-black flex flex-col justify-center items-center;
	}

	span:last-child {
		@apply text-7xl;
	}

	p {
		@apply max-w-2xl font-light px-6;
	}
</style>
