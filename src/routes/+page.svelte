<script lang="ts">
	import AboutMe from '../layout/AboutMe.svelte';
	import Landing from '../layout/Landing.svelte';
	import Portfolio from '../layout/Portofolio.svelte';
	import Skills from '../layout/Skills.svelte';

	export let data: any;
	export let repos: Promise<any[]> = data.repositories;
</script>

<main class="container">
	<!-- landing section -->
	<Landing />
	<!-- about me section -->
	<AboutMe />
	<!-- portfolio section -->
	<Portfolio {repos} />
	<!-- skills section -->
	<Skills />
</main>

<style>
	main {
		background-image: url('/images/header-pattern.png');
		@apply bg-blend-soft-light bg-fixed bg-opacity-10 pt-28 flex flex-col items-center gap-20;
	}
</style>
