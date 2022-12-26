<script>
	import Menu from '../components/Menu.svelte';
	import BrandLogo from '../components/BrandLogo.svelte';
	import Navigation from '../components/Navigation.svelte';
</script>

<header>
	<!-- Brand Logo -->
	<BrandLogo />
	<!-- hamburger menu -->
	<Menu />
	<!-- navigation -->
	<Navigation />
</header>

<style>
	header {
		@apply flex justify-around top-0 left-0 py-6 fixed w-full bg-slate-900 z-50;
	}
</style>
