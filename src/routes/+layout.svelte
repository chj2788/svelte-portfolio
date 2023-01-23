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
		min-height: 100vh;
		background-color: #18191A;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color: white;
		font-family: 'Press Start 2P', cursive;
		font-size: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
