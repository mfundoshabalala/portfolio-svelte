<script lang="ts">
	import Container from '../components/Container.svelte';

	export let duration: string;
</script>

<svelte:head>
	<title>Who is Mfundo?</title>
</svelte:head>

<Container>
	<div slot="link" id="section2" />
	<h2 slot="title">About Me</h2>
	<p class="description" slot="description">Behind the Code: A personal insight into my background and motivation.</p>
	<p slot="content">
		Hi there! My name is Mfundo Shabalala and I am a software developer with {duration} of experience in the industry. I
		am proficient in JavaScript and have experience with the React, Angular and Vue frameworks. In my current role at Hire
		and service, I work on maintaining, debugging and building new features for HAS+ software platform using Angular, SQL
		Server and SSRS. In my spare time, I enjoy learning new technologies and am always looking for new ways to improve my
		skills and stay up-to-date on the latest developments in the field. Feel free to contact me if you have any questions
		or would like to learn more about my work.
	</p>
</Container>

<style lang="scss">
	div:first-of-type {
		@apply absolute -top-48;
	}

	p:last-of-type {
		@apply max-w-4xl font-light;
	}
</style>
