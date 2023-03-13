<script>
	import Navbar from '../layout/Navbar.svelte';
	import '../app.css';
	import Footer from '../layout/Footer.svelte';
	import Aside from '../layout/Aside.svelte';
</script>

<svelte:head>
	<!-- fontawesome cdn -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
	<!-- devicon cdn -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
	<!-- google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Martian+Mono:wght@100;200;300;400;800&display=swap"
		rel="stylesheet"
	/>
	<!-- page title -->
	<title>Mfundo's Web Portfolio</title>
	<meta
		name="description"
		content="Full-stack developer with experience in JavaScript, Python, Angular and React. Check out my portfolio for a sample of my work."
	/>
	<meta
		name="keywords"
		content="developer, portfolio, web development, full-stack, JavaScript, Python, React, Angular"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Mfundo Shabalala" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="application-name" content="My Developer Portfolio" />
	<meta name="msapplication-config" content="none" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@mfundoshabalal" />
	<meta name="og:title" content="My Developer Portfolio" />
	<meta name="og:type" content="website" />
</svelte:head>

<!-- page navigation -->
<Navbar />
<!-- Aside content -->
<Aside />
<!-- content -->
<slot />
<!-- page footer -->
<Footer />

<div />
