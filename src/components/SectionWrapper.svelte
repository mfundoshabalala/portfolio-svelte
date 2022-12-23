<script>
	export let id = '';
</script>

<section {id}>
	<slot name="link">No nav link</slot>
	<slot name="title">No title</slot>
	<slot name="description"
		><p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum iure nostrum
			officiis deleniti placeat maxime maiores harum iusto, nulla veniam necessitatibus corporis
			magni nobis aspernatur, explicabo, quas culpa dignissimos.
		</p></slot
	>
	<slot name="content">
		<h2>Failed to load this section</h2>
	</slot>
	<slot name="socials" />
</section>

<style>
	section {
		@apply relative min-h-screen flex flex-col justify-center items-center gap-2;
	}

	section > :global(div) {
		@apply absolute -top-10;
	}

	p {
		@apply max-w-2xl leading-5 font-thin;
	}
</style>
