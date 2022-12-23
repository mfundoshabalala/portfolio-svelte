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
		href="https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Arizonia&family=Comforter&family=Comforter+Brush&family=Cookie&family=Corinthia:wght@700&family=Ma+Shan+Zheng&family=Molle&family=Mrs+Sheppards&family=Norican&family=Praise&family=Ruthie&family=Smooch&family=Tangerine:wght@700&family=Water+Brush&family=Yesteryear&display=swap"
		rel="stylesheet"
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
