<script>
	import Navbar from '../layout/Navbar.svelte';
	import '../app.css';
	import Footer from '../layout/Footer.svelte';
	import Aside from '../layout/Aside.svelte';
</script>

<svelte:head>
	<!-- fontawesome cdn -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
	/>
	<!-- devicon cdn -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
	/>
	<!-- google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Martian+Mono:wght@100;200;300;400;800&display=swap"
		rel="stylesheet"
	/>
	<!-- favicon -->
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<!-- page title -->
	<title>Mfundo's Web Portfolio</title>
</svelte:head>

<!-- page navigation -->
<Navbar />
<!-- Aside content -->
<Aside />
<!-- content -->
<slot />
<!-- page footer -->
<Footer />
