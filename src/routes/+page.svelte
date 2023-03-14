<script lang="ts">
	import moment from 'moment';
	import AboutMe from '../layout/AboutMe.svelte';
	import Landing from '../layout/Landing.svelte';
	import Portfolio from '../layout/Portofolio.svelte';
	import Skills from '../layout/Skills.svelte';

	export let data: any;
	export let repos: Promise<any[]> = data.repositories;
	export let duration = moment([2020, 6, 20]).toNow(true);
</script>

<main class="container">
	<!-- landing section -->
	<Landing {duration} />
	<!-- about me section -->
	<AboutMe {duration} />
	<!-- portfolio section -->
	<Portfolio {repos} />
	<!-- skills section -->
	<Skills />
</main>

<style>
	main {
		@apply bg-blend-soft-light bg-fixed bg-opacity-10 pt-28 flex flex-col items-center gap-20;
	}
</style>
