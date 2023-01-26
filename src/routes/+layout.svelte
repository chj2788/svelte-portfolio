<script>
	import Header from './Header.svelte';
	import './styles.css';

</script>


<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>My name is Hyunjin(Alice) Chang - <a href="/contact">Contact me!</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		margin-top: 2%;
	}

	footer {
		width: 90%;
		text-align: center;
		padding: 5%;
		color: white;
		font-family: 'Press Start 2P', cursive;
		font-size: 12px;
	}

	@media only screen and (max-width: 500px) {
		footer {
			font-size: 10px;
			width: 80%;
			overflow: auto;
			padding: 10%;
		}

		main {
			margin-top: 5%;
		}
	}
</style>
