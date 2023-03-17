<script lang="ts">
	export let id = '';
</script>

<section {id}>
	<slot name="link" />
	<slot name="title" />
	<slot name="description" />
	<slot name="content">
		<h2>Failed to load this section</h2>
	</slot>
	<slot name="socials" />
</section>

<style lang="scss">
	section {
		@apply relative sm:p-16 flex flex-col justify-center items-center gap-2 container bg-gray-900 shadow-sm shadow-teal-900 rounded-xl;
	}

	:global(p.description) {
		@apply text-gray-400 font-light max-w-2xl mb-6 font-sans leading-tight text-sm;
	}
</style>
