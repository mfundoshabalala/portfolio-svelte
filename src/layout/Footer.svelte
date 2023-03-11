<script>
	const date = new Date();
	const year = date.getFullYear();
</script>

<footer class="py-6 text-center font-light">
	&copy;2020-{year} Made using Svelte, TypeScript and Tailwindcss
</footer>

<style lang="scss">
	footer {
		@apply bg-slate-900 text-gray-200 font-light text-xs md:text-sm;
	}
</style>
