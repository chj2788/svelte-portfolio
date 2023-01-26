<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Experience page" />
</svelte:head>

<script lang="ts">
	
</script>
<div class="experience-wrapper">
	<div class="intro-text">Internship Experience</div>
	<div class="experience-list">
		<div class="description">
			<h1>Web Developer Intern <br>@UC Davis</h1>
			<p>April 2022 - December 2022</p>
			<ul>
				<li>Developed continuous improvement projects and enhancements for CEED and TherMOOstat using MERN stack with GraphQL, Next.js and Prisma as a full-stack developer.</li>
				<li>Identified root causes of software bugs, solved underlying problems, and refactored legacy codes to enhance productivity and readability.</li>
				<li>Managed time series data stored in the PI system and visualized the data according to the business requirements using React Highcharts.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://ceed.ucdavis.edu", '_blank')}>Visit CEED</button>
				<button on:click|preventDefault={()=>window.open("https://thermoostat.ucdavis.edu", '_blank')}>Visit Thermoostat</button>
			</div>
		</div>
		<div class="description">
			<h1>Software Engineer Intern <br>@Bucketplace</h1>
			<p>June 2021 - December 2021</p>
			<ul>
				<li>Created promotion pages from scratch using React, Next, and Nest(Node) as a full-stack developer and achieved a 25% increase in GMV, 13.77% increase in user stickiness, and 6.10% increase in pur- chase conversion rate.</li>
				<li>Optimized server calls to handle large traffic by caching the API calls, optimizing DB queries and using appropriate data structures and techniques.</li>
				<li>Implemented custom decorators and interceptors to improve reusability and scalability and a DLQ for edge cases to make the application more resilient and durable.</li>
				<li>Contributed to the gRPC CLI with Golang, which is used company-wide to improve the efficiency of the MSA integration.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://www.bucketplace.com/en", '_blank')}>Visit the company website</button>
			</div>
		</div>
		<div class="description">
			<h1>Data Intern <br>@Hyosung ITX</h1>
			<p>August 2020 - December 2020</p>
			<ul>
				<li>Optimized the data maintenance tool by automating the data inspection process with Python andachieved higher data accuracy from 91% to 99% and a 2400% faster working time.</li>
				<li>Provided data maintenance support for the public data portal, ’https://www.data.go.kr’.</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={()=>window.open("https://www.data.go.kr", '_blank')}>Visit the data portal</button>
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
	.experience-list {
    display: flex;
  }

	.experience-wrapper {
		display: flex;
		flex-direction: column;
		width: 90%;
		min-height: 80vh;
		margin: 0 5%;
	}

	.description {
		font-family: 'Raleway', sans-serif;
		color: lightgrey;
		width: 32%;
		margin: 0 1%;
	}

	.description p {
		font-family: 'Raleway', sans-serif;
		font-style: italic;
		color: lightgrey;
		text-align: center;
		margin-bottom: 3em;
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

	h1 {
		font-weight: bold;
		color: var(--color-theme-1);
		font-size: 2em
	}

	ul {
		padding-left: 1em;
	}

	li {
		margin: 10px 0;
		color: white;
		line-height: 1.5em;
	}

	@media only screen and (max-width: 1200px) {
		.experience-list {
			flex-direction: column;
		}

		.description {
			width: 100%;
		}

		.intro-text {
			font-size: 3em;
			color: white;
			font-family: 'Syncopate', sans-serif;
			text-align: center;
			text-decoration: underline;
		}
	}

	@media only screen and (max-width: 500px) {
		.experience-wrapper {
			display: flex;
			flex-direction: column;
			width: 90%;
			padding: 0 5%;
			margin: 0%;
		}
		.intro-text {
			font-size: 2.5em;
		}

		h1 {
			font-size: 1.5rem;
		}

		.button-wrapper {
			font-size: 10px;
		}
	}
</style>

