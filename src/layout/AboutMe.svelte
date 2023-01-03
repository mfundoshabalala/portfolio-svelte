<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Container from '../components/Container.svelte';
</script>

<Container>
	<div slot="link" id="section2" />
	<h2
		slot="title"
		transition:fly={{ delay: 2500, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}
	>
		About Me
	</h2>
	<p class="description" slot="description">
		This section can include information about your background, education, and work experience. You
		might also want to include a brief overview of your skills and areas of expertise
	</p>
	<p slot="content">
		Hi there! My name is [Your Name] and I am a software developer with [Number] years of experience
		in the industry. I have a degree in [Degree] from [University], and have worked on a variety of
		projects ranging from [Project Type] to [Project Type]. I am proficient in [Programming
		Language] and have experience with [Other Programming Languages]. In my current role at
		[Company], I work on [Projects] using [Technologies]. In my spare time, I enjoy [Hobbies] and am
		always looking for new ways to improve my skills and stay up-to-date on the latest developments
		in the field. Feel free to contact me if you have any questions or would like to learn more
		about my work.
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
