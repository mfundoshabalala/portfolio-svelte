<script>
	// your script goes here
</script>

<article>
	<header>
		<slot name="name">
			<h3>No project name</h3>
		</slot>
		<slot name="languages" />
	</header>
	<main>
		<slot name="description">
			<p>No project description</p>
		</slot>
	</main>
	<footer class="">
		<slot name="repo">
			<span>No repo links</span>
		</slot>
	</footer>
</article>

<style>
	article {
		@apply shadow-sm rounded-md p-8 shadow-slate-700 relative max-w-md space-y-2;
	}
</style>
