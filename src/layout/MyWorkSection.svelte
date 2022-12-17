<script>
	import SectionWrapper from '../components/SectionWrapper.svelte';
	import RepoCard from '../components/RepoCard.svelte';
</script>

<SectionWrapper>
	<div slot="link" id="section2" />
	<h2>My Work</h2>
	<section class="card-wrapper">
		<RepoCard>
			<h3 slot="name">Project 1</h3>
			<ul slot="languages" class="languages">
				<li><i class="fab fa-react" /></li>
				<li><i class="fab fa-react" /></li>
			</ul>
			<p slot="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo quae iure,
				rerum odio sequi libero aliquam a iusto aperiam dicta incidunt quidem doloribus culpa magni
				enim id sapiente ipsa.
			</p>
			<ul slot="repo">
				<li class=""><a href="." class=""><i class="fa fa-globe" /></a></li>
				<li class=""><a href="." class=""><i class="fa fa-code" /></a></li>
			</ul>
		</RepoCard>
		<RepoCard>
			<h3 slot="name">Project 2</h3>
			<ul slot="languages" class="languages">
				<li><i class="fab fa-react" /></li>
				<li><i class="fab fa-react" /></li>
			</ul>
			<p slot="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo quae iure,
				rerum odio sequi libero aliquam a iusto aperiam dicta incidunt quidem doloribus culpa magni
				enim id sapiente ipsa.
			</p>
			<ul slot="repo">
				<li class=""><a href="." class=""><i class="fa fa-globe" /></a></li>
				<li class=""><a href="." class=""><i class="fa fa-code" /></a></li>
			</ul>
		</RepoCard>
		<RepoCard>
			<h3 slot="name">Project 3</h3>
			<ul slot="languages" class="languages">
				<li><i class="fab fa-react" /></li>
				<li><i class="fab fa-node" /></li>
			</ul>
			<p slot="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo quae iure,
				rerum odio sequi libero aliquam a iusto aperiam dicta incidunt quidem doloribus culpa magni
				enim id sapiente ipsa.
			</p>
			<ul slot="repo" class="repo">
				<li class=""><a href="." class=""><i class="fa fa-globe" /></a></li>
				<li class=""><a href="." class=""><i class="fa fa-code" /></a></li>
			</ul>
		</RepoCard>
		<RepoCard>
			<h3 slot="name">Project 4</h3>
			<ul slot="languages" class="languages">
				<li><i class="fab fa-vuejs" /></li>
				<li><i class="fab fa-node" /></li>
			</ul>
			<p slot="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo quae iure,
				rerum odio sequi libero aliquam a iusto aperiam dicta incidunt quidem doloribus culpa magni
				enim id sapiente ipsa.
			</p>
			<ul slot="repo">
				<li class=""><a href="." class=""><i class="fa fa-globe" /></a></li>
				<li class=""><a href="." class=""><i class="fa fa-code" /></a></li>
			</ul>
		</RepoCard>
		<RepoCard>
			<h3 slot="name">Project 5</h3>
			<ul slot="languages" class="languages">
				<li><i class="fab fa-react" /></li>
				<li><i class="fab fa-react" /></li>
			</ul>
			<p slot="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo quae iure,
				rerum odio sequi libero aliquam a iusto aperiam dicta incidunt quidem doloribus culpa magni
				enim id sapiente ipsa.
			</p>
			<ul slot="repo">
				<li class=""><a href="." class=""><i class="fa fa-globe" /></a></li>
				<li class=""><a href="." class=""><i class="fa fa-code" /></a></li>
			</ul>
		</RepoCard>
		<RepoCard>
			<h3 slot="name">Project 6</h3>
			<ul slot="languages" class="languages">
				<li><i class="fab fa-react" /></li>
				<li><i class="fab fa-react" /></li>
			</ul>
			<p slot="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, explicabo quae iure,
				rerum odio sequi libero aliquam a iusto aperiam dicta incidunt quidem doloribus culpa magni
				enim id sapiente ipsa.
			</p>
			<ul slot="repo">
				<li class=""><a href="." class=""><i class="fa fa-globe" /></a></li>
				<li class=""><a href="." class=""><i class="fa fa-code" /></a></li>
			</ul>
		</RepoCard>
	</section>
</SectionWrapper>

<style>
	section.card-wrapper {
		@apply flex flex-wrap gap-x-4 gap-y-8 justify-center;
	}

	h3 {
		@apply font-semibold border-b-2 border-orange-500 text-2xl;
	}

	ul {
		@apply flex gap-1;
	}

	ul.languages {
		@apply absolute -top-4 right-4;
	}

	ul.languages li {
		@apply shadow shadow-orange-500 rounded-full px-2 py-1 bg-slate-900;
	}

	p {
		@apply font-light;
	}
</style>
