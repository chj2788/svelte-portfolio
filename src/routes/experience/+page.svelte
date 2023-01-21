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
			<h1>Web Developer Intern @UC Davis</h1>
			<ul>
				<li>Developed continuous improvement projects and enhancements for CEED and TherMOOstat using MERN stack with GraphQL and Prisma as a full-stack developer.</li>
				<li>Identified root causes of software bugs, solved underlying problems, and refactored legacy codes to enhance productivity and readability.</li>
				<li>Managed time series data stored in the PI system and visualized the data according to the business requirements using React Highcharts.</li>
			</ul>
		</div>
		<div class="description">
			<h1>Software Engineer Intern @Bucketplace</h1>
			<ul>
				<li>Created promotion pages from scratch using React, Next, and Nest(Node) as a full-stack developer and achieved a 25% increase in GMV, 13.77% increase in user stickiness, and 6.10% increase in pur- chase conversion rate.</li>
				<li>Optimized server calls to handle large traffic by caching the API calls, optimizing DB queries and using appropriate data structures and techniques.</li>
				<li>Implemented custom decorators and interceptors to improve reusability and scalability and a DLQ for edge cases to make the application more resilient and durable.</li>
				<li>Contributed to the gRPC CLI with Golang, which is used company-wide to improve the efficiency of the MSA integration.</li>
			</ul>
		</div>
		<div class="description">
			<h1>Data Intern @Hyosung ITX</h1>
			<ul>
				<li>Optimized the data maintenance tool by automating the data inspection process with Python andachieved higher data accuracy from 91% to 99% and a 2400% faster working time.</li>
				<li>Provided data maintenance support for the public data portal, ’www.data.go.kr’.</li>
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
	.experience-list {
    display: flex;
  }

	.experience-wrapper {
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

