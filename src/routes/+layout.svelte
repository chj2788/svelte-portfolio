<script>
	import Header from './Header.svelte';
	import './styles.css';

</script>


<div class="app">
	<div class="sticky-header">
		<Header />
	</div>

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

	.sticky-header {
		position: fixed;
		width: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		margin-top: 5%;
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
