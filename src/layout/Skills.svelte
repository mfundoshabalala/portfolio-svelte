<script>
	import SectionWrapper from '../components/SectionWrapper.svelte';
</script>

<SectionWrapper>
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
				<h3>Tools and Frameworks</h3>
				<ul>
					<li>Angular</li>
					<li>NextJS</li>
					<li>Svelte</li>
					<li>React</li>
					<li>Git</li>
					<li>GitHub</li>
					<li>VSCode</li>
				</ul>
			</article>
		</section>
	</section>
</SectionWrapper>

<style>
	section {
		@apply container;
	}

	section > p {
		@apply text-center text-gray-200 font-thin;
	}

	section > section {
		@apply flex justify-center gap-12 flex-wrap;
	}

	div:first-of-type {
		@apply absolute -top-6;
	}

	h3 {
		@apply text-center text-gray-200 font-thin;
	}

	ul {
		@apply list-disc list-inside;
	}

	li {
		@apply text-gray-400 font-thin;
	}
</style>
