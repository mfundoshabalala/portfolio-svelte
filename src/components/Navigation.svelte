<script>
	// your script goes here
</script>

<!-- Navigation -->
<nav class="">
	<ul class="flex gap-4 font-light">
		<li class="">
			<a href="#section1">Home</a>
		</li>
		<li class="">
			<a href="#section2">About Me</a>
		</li>
		<li class="">
			<a href="#section3">Portfolio</a>
		</li>
		<li class="">
			<a href="#section4">Skills</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		@apply hidden md:flex flex-col justify-center items-center text-slate-100 text-lg;
	}

	ul {
		@apply flex gap-4;
	}

	a {
		@apply shadow-slate-800 shadow-sm  border-b border-gray-500 rounded px-4 py-1 font-kaushan text-base text-slate-300 hover:text-slate-100 duration-500;
	}
</style>
