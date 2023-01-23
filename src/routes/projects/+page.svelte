<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects page" />
</svelte:head>

<script lang="ts">
	
</script>
<div class="projects-wrapper">
	<div class="intro-text">Projects</div>
	<div class="projects-list">
		<div class="description">
			<h1>FashionAvenue</h1>
			<p>December 2022 - January 2023</p>
			<ul>
				<li>Used Nest.js for backend to build the highly testable and maintainable server.</li>
				<li>Maintained the seamless user experience by issuing access/refresh tokens and used JWT for authentication to securely transmit information between client and server.</li>
				<li>Verified the user with customized authentication guards by extracting and validating the token.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://github.com/chj2788/fashionAvenue", '_blank')}>Github</button>
			</div>
		</div>
		<div class="description">
			<h1>MyChat</h1>
			<p>February 2021 - May 2021</p>
			<ul>
				<li>Managed the global state with Context API and denormalized chat messages data for better performance.</li>
				<li>Prevented anonymous users from gaining inappropriate access utilizing Facebook and Google authentication(OAuth) while connecting Firebase for real-time subscription.</li>
				<li>Established an access management program that only allows the admin to be able to change the room information and promote a member to admin.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://github.com/chj2788/mychat", '_blank')}>Github</button>
				<button on:click|preventDefault={()=>window.open("https://chat-web-app-49b27.web.app/", '_blank')}>Demo</button>
			</div>
		</div>
		<div class="description">
			<h1>SearchMovies</h1>
			<p>January 2021 - April 2021</p>
			<ul>
				<li>Incorporated Redux hooks to architect highly scalable front-end state management and optimized
					components using React hooks.</li>
				<li>Enhanced the user experience by storing a starred movies list in a local storage.</li>
				<li>Combined the best features of mobile app and web with a Progressive Web App.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://github.com/chj2788/searchMovies", '_blank')}>Github</button>
			</div>
		</div>
	</div>
	<div class="projects-list">
		<div class="description">
			<h1>GlassyWeather</h1>
			<p>December 2022 - January 2023</p>
			<ul>
				<li>Incorporated Redux to architect a highly scalable front-end state management and fetched real-time weather data from the external API.</li>
				<li>Implement a fancy glassmorhism UI with css and maintained highly readable and scalable css using Styled Components.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://github.com/chj2788/glassyweather", '_blank')}>Github</button>
				<button on:click|preventDefault={()=>window.open("https://chj2788.github.io/glassyweather/", '_blank')}>Demo</button>
			</div>
		</div>
		<div class="description">
			<h1>SveltePortfolio</h1>
			<p>January 2023</p>
			<ul>
				<li>Used Svelte with typescript for the best performance.</li>
				<li>Incorporated Three.js to display customized 3d animated avatar on the welcome page.</li>
				<li>Implement a fancy web design and animations with highly scalable css stylings.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://github.com/chj2788/svelte-portfolio", '_blank')}>Github</button>
				<button on:click|preventDefault={()=>window.location.href="/"}>Demo</button>
			</div>
		</div>
	</div>
</div>


<style>
	.intro-text {
		font-size: 4em;
		color: white;
		font-family: 'Syncopate', sans-serif;
		text-align: center;
		text-decoration: underline;
	}
	.projects-list {
    display: flex;
  }

	.projects-wrapper {
		display: flex;
		flex-direction: column;
		width:94%;
		margin: 2% 3%;
	}

	.description {
		font-family: 'Raleway', sans-serif;
		color: lightgrey;
		width: 30%;
		margin: 0 1%;
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1em;
		margin: 2em 0;
		font-family: 'Press Start 2P', cursive;
		font-size: 13px;
	}

	button {
		padding: 3% 5%;
		border-radius: 15px;
		width: 80%;
	}

	button:hover {
		background-color: var(--color-theme-1);
	}

	.description p {
		font-family: 'Raleway', sans-serif;
		font-style: italic;
		color: lightgrey;
		text-align: center;
		margin-bottom: 3em;
	}

	h1 {
		font-weight: bold;
		color: var(--color-theme-1);
		font-size: 2em
	}

	li {
		margin: 10px 0;
		color: white;
		line-height: 1.5em;
	}
</style>

