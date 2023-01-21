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
			<ul>
				<li>Used Nest.js for backend to build the highly testable and maintainable server.</li>
				<li>Maintained the seamless user experience by issuing access/refresh tokens and used JWT for authentication to securely transmit information between client and server.</li>
				<li>Verified the user with customized authentication guards by extracting and validating the token.</li>
			</ul>
		</div>
		<div class="description">
			<h1>MyChat</h1>
			<ul>
				<li>Managed the global state with Context API and denormalized chat messages data for better performance.</li>
				<li>Prevented anonymous users from gaining inappropriate access utilizing Facebook and Google authentication(OAuth) while connecting Firebase for real-time subscription.</li>
				<li>Established an access management program that only allows the admin to be able to change the room information and promote a member to admin.</li>
			</ul>
		</div>
		<div class="description">
			<h1>SearchMovies</h1>
			<ul>
				<li>Incorporated Redux hooks to architect highly scalable front-end state management and optimized
					components using React hooks.</li>
				<li>Enhanced the user experience by storing a starred movies list in a local storage.</li>
				<li>Combined the best features of mobile app and web with a Progressive Web App.</li>
			</ul>
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
		margin: 5% 3%;
	}

	.description {
		font-family: 'Raleway', sans-serif;
		color: lightgrey;
		width: 30%;
		margin: 0 1%;
	}
</style>

