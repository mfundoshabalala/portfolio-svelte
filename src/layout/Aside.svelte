<script>
	// your script goes here
</script>

<aside>
	<ul>
		<li>
			<a target="_blank" rel="noreferrer" href="https://github.com/mfundoshabalala">
				<i class="fab fa-github" /><span>Github</span>
			</a>
		</li>
		<li>
			<a target="_blank" rel="noreferrer" href="https://linkedin.com/in/mfundoshabalala">
				<i class="fab fa-linkedin-in" /><span>LinkedIn</span>
			</a>
		</li>
		<li>
			<a target="_blank" rel="noreferrer" href="https://twitter.com/mfundoshabalal">
				<i class="fab fa-twitter" /><span>Twitter</span>
			</a>
		</li>
		<li>
			<a target="_blank" href="mailto:mfundoshabalala@gmail.com">
				<i class="fa fa-envelope" /><span>Email</span>
			</a>
		</li>
	</ul>
</aside>

<style lang="scss">
	aside {
		@apply fixed top-2/3 left-5 z-50 font-sans shadow-sm rounded-full shadow-slate-700 w-12 h-48 py-4 bg-slate-900;
	}

	ul {
		@apply flex flex-col justify-center h-full items-center text-xl gap-2 shadow-sm;
	}

	li {
		@apply rounded-full;
	}

	a {
		@apply relative cursor-pointer font-thin h-full leading-relaxed transition-all duration-500;
	}

	i {
		@apply aspect-square w-8 flex justify-center items-center duration-500 rounded-full;
	}

	span {
		@apply -z-10 h-full rounded-full absolute top-0 px-10 py-1 text-sm opacity-0 border border-transparent duration-500;
	}

	a:hover span {
		@apply opacity-95 w-28 ml-2;
	}

	a:hover i {
		@apply translate-x-2;
	}

	li:nth-of-type(1) {
		@apply bg-black;

		a:hover span {
			@apply bg-black;
		}
	}

	li:nth-of-type(2) {
		@apply bg-blue-800;

		a:hover span {
			@apply bg-blue-800;
		}
	}

	li:nth-of-type(3) {
		@apply bg-sky-600;

		a:hover span {
			@apply bg-sky-600;
		}
	}

	li:nth-of-type(4) {
		@apply bg-black;

		a:hover span {
			@apply bg-black;
		}
	}
</style>
