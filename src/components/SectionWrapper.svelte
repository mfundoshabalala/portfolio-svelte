<script lang="ts">
	export let id: string = '';
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

<style>
	section {
		@apply relative min-h-screen flex flex-col justify-center items-center gap-2 container;
	}

	/* section > :global(div) {
		@apply absolute -top-20;
	} */

	:global(p.description) {
		@apply text-gray-400 max-w-2xl mb-6 font-light leading-tight text-sm;
	}
</style>
