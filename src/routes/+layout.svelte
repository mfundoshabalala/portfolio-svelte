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

	<title>Mfundo's Web Portfolio</title>
</svelte:head>

<!--  -->
<Navbar />
<!--  -->
<Aside />
<!--  -->
<slot />
<!--  -->
<Footer />
