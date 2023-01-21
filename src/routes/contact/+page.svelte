<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Welcome page" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:ital,wght@0,400;0,700;1,700&family=Oswald&family=Syncopate:wght@700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
	
</script>

<div class="about-wrapper">
	<div class="intro-text">Let's get connected</div>
	<p class="contact-info">
		<a href="mailto:hyunjin.alice.chang@gmail.com">email: hyunjin.alice.chang@gmail.com</a> 
	</p>
	<div class="button-wrapper">
		<button>Click to Copy</button>
		<button>Email</button>
	</div>
	<p class="contact-info">
		<a href="tel:+5302200895">phone number: 530-220-0895</a> 
	</p> 
	<div class="button-wrapper">
		<button>Click to Copy</button>
		<button>Call</button>
	</div>
</div>


<style>
	.intro-text {
		font-size: 4em;
		color: white;
		font-family: 'Syncopate', sans-serif;
		width: 50%
	}

	.about-wrapper {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin: 5% 20% 5% 30%;
	}

	.contact-info {
		font-family: 'Press Start 2P', cursive;
		color: lightgrey;
	}

	.button-wrapper {
		margin: 3px 0;
		font-family: 'Press Start 2P', cursive;
	}

	button {
		padding: 2% 5%;
	}
</style>

