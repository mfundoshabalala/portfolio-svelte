<script lang="ts">
</script>

<article>
	<header>
		<slot name="name">
			<h3>No project name</h3>
		</slot>
		<slot name="languages">
			<h3>No languages list</h3>
		</slot>
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
