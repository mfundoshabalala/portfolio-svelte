<script>
	export let id = '';
</script>

<section {id}>
	<slot name="link">No nav link</slot>
	<slot name="title">No title</slot>
	<slot name="content">
		<h2>Failed to load this section</h2>
	</slot>
</section>

<style>
	section {
		@apply relative min-h-screen flex flex-col justify-center items-center;
	}

	section > :global(div) {
		@apply absolute -top-10;
	}
</style>
