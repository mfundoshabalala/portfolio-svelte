<script>
	import Container from '../components/Container.svelte';
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>
<Container>
	<div slot="link" id="section4" />
	<h2 slot="title">Skills</h2>
	<p class="description" slot="description">
		This section can include information about your skills and areas of expertise. You might want to
		include a list of your technical skills, as well as soft skills such as communication, teamwork,
		and leadership.
	</p>
	<section slot="content">
		<p>Here are a few technologies I've been working with recently:</p>
		<section>
			<article>
				<h3>Client-side</h3>
				<ul>
					<li>JavaScript (ES6+)</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</article>
			<article>
				<h3>Server-side</h3>
				<ul>
					<li>Node</li>
					<li>Express</li>
					<li>PHP</li>
				</ul>
			</article>
			<article>
				<h3>Databases</h3>
				<ul>
					<li>MSSQL</li>
					<li>MySQL</li>
					<li>MongoDB</li>
				</ul>
			</article>
			<article>
				<h3>Frameworks</h3>
				<ul>
					<li>Angular</li>
					<li>NextJS</li>
					<li>Svelte</li>
					<li>React</li>
				</ul>
			</article>
			<article>
				<h3>Tools</h3>
				<ul>
					<li>Git</li>
					<li>GitHub</li>
					<li>VSCode</li>
				</ul>
			</article>
			<article>
				<h3>Soft Skills</h3>
				<ul>
					<li>Communication</li>
				</ul>
			</article>
		</section>
	</section>
</Container>

<style>
	section {
		@apply container;
	}

	section > p {
		@apply text-center text-gray-200 font-thin;
	}

	section > section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}

	article {
		@apply border p-4;
	}

	div:first-of-type {
		@apply absolute -top-6;
	}

	h3 {
		@apply text-left text-gray-200 font-thin;
	}

	ul {
		@apply list-disc list-inside;
	}

	li {
		@apply text-gray-400 font-thin;
	}
</style>
