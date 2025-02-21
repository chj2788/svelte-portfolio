<script lang="ts">
</script>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Experience page" />
</svelte:head>
<div class="experience-wrapper">
	<div class="intro-text">Experience</div>
	<div class="experience-list">
		<div class="description">
			<h1>Full Stack Engineer <br />@Humana</h1>
			<p>May 2023 - Current</p>
			<ul>
				<li>
					Constructed key solutions for the <a
						class="link-text"
						href="https://docushare-web.apps.external.pioneer.humana.com/Marketing/docushare-app?file=4650971"
						target="_blank">Population Insight Compass</a
					> project, developing and maintaining scalable web applications with Angular and Java, creating
					user-friendly interfaces, and ensuring reliability with over 95% test coverage.
				</li>
				<li>
					Optimized complex SQL queries to enhance data retrieval efficiency, streamlining
					patient-specific mea- sure reviews and cut query execution time from over 10 minutes to 30
					seconds for the analytics team.
				</li>
				<li>
					Designed and implemented an ADF workflow to automate data processing and developed
					efficient data aggregation pipeline using Scala and Spark for performance and scalability.
				</li>
			</ul>
			<div class="button-wrapper">
				<button
					on:click|preventDefault={() =>
						window.open(
							'https://docushare-web.apps.external.pioneer.humana.com/Marketing/docushare-app?file=4650971',
							'_blank'
						)}>Population Insight Compass</button
				>
			</div>
		</div>
		<div class="description">
			<h1>Web Developer Intern <br />@UC Davis</h1>
			<p>April 2022 - December 2022</p>
			<ul>
				<li>
					Developed continuous improvement projects and enhancements for <a
						class="link-text"
						href="https://ceed.ucdavis.edu"
						target="_blank">CEED</a
					>
					and
					<a class="link-text" href="https://thermoostat.ucdavis.edu" target="_blank">TherMOOstat</a
					> using MERN stack with GraphQL, Next.js and Prisma as a full-stack developer.
				</li>
				<li>
					Identified and resolved root cause of data issues, eliminating 20+ open bugs, and
					prevented future defects by refactoring legacy code for improved stability and
					readability.
				</li>
				<li>
					Improved data retrieval efficiency and optimized daily energy measurement processing by
					refining time series data management through strategic indexing, partitioning, and
					automation.
				</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={() => window.open('https://ceed.ucdavis.edu', '_blank')}
					>CEED</button
				>
				<button
					on:click|preventDefault={() => window.open('https://thermoostat.ucdavis.edu', '_blank')}
					>Thermoostat</button
				>
			</div>
		</div>
		<div class="description">
			<h1>Software Engineer Intern <br />@Bucketplace</h1>
			<p>June 2021 - December 2021</p>
			<ul>
				<li>
					Created promotion pages using React.js, Next.js, and Nest(Node).js and achieved a 25%
					increase in gross merchandise value, 13.77% increase in user stickiness, and 6.10%
					increase in purchase conversion rate.
				</li>
				<li>
					Optimized server calls to handle peak traffic during promotion openings by caching the API
					calls, optimizing database queries, and implementing decorators and interceptors, and a
					Dead Letter Queue to enhance reusuability, scalability, and resilience.
				</li>
				<li>
					Contributed to the development of a company-wide gRPC command-line interface (CLI) in
					Golang as part of the platform team, enhancing overall developer efficiency and
					streamlining microservice implementation.
				</li>
			</ul>
			<div class="button-wrapper">
				<button
					on:click|preventDefault={() => window.open('https://www.bucketplace.com/en', '_blank')}
					>Bucketplace</button
				>
			</div>
		</div>
		<div class="description">
			<h1>Data Intern <br />@Hyosung ITX</h1>
			<p>August 2020 - December 2020</p>
			<ul>
				<li>
					Optimized the data maintenance tool by automating the data inspection process with Python
					andachieved higher data accuracy from 91% to 99% and a 2400% faster working time.
				</li>
				<li>
					Provided data maintenance support for the <a
						class="link-text"
						href="https://www.data.go.kr"
						target="_blank">public data portal</a
					>.
				</li>
			</ul>
			<div class="button-wrapper">
				<button on:click|preventDefault={() => window.open('https://www.data.go.kr', '_blank')}
					>Public Data Portal</button
				>
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
		flex-wrap: wrap;
	}

	.experience-wrapper {
		display: flex;
		flex-direction: column;
		width: 90%;
		min-height: 78vh;
		margin: 0 5%;
	}

	.description {
		font-family: 'Raleway', sans-serif;
		color: lightgrey;
		flex: 0 0 30%;
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
		font-size: 2em;
	}

	ul {
		padding-left: 1em;
	}

	li {
		margin: 10px 0;
		color: white;
		line-height: 1.5em;
	}

	.link-text {
		color: var(--color-theme-1);
		font-style: italic;
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
