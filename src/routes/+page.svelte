<svelte:head>
	<title>Hyunjin Alice Chang</title>
	<meta name="description" content="Welcome page" />
</svelte:head>

<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Avatar from '../lib/Avatar.svelte'	
</script>

<div class="about-wrapper">
	<div class="text-column">
		<div class="intro-text">Hi,</div>
		<div class="intro-text">I am a </div>
		<div class="intro-text">Software-</div>
		<div class="intro-text">Engineer</div>
		<span class="description line__1 desktop">
			I am a software engineer with a background
		</span>
		<span class="description line__2 desktop">in data science. Currently, I'm focusing on</span>
		<span class="description line__3 desktop">building full-stack applications.</span>
		<span class="mobile">I am a software engineer with a background in data science. Currently, I'm focusing on building full-stack applications.</span>
	</div>
	<div class="canvas-wrapper">
		<Canvas size={{ width: 380, height: 400 }}>
			<Avatar />
		</Canvas>
	</div>
</div>


<style>
	.intro-text {
		font-size: 4em;
		color: white;
		font-family: 'Syncopate', sans-serif;
		width: 50%
	}

	.text-column {
		margin: 0;
	}

	.about-wrapper {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: 80vh;
	}

	.description {
		font-family: 'Press Start 2P', cursive;
		color: lightgrey;
		line-height: 1.8;
		white-space: nowrap;
		overflow: hidden;
	}

	.line__1 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-1 6s steps(30, end) 1s 1 normal both,
			animated-cursor 900ms steps(30, end) 8;
	}

	.line__2 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-2 5s steps(30, end) 1s 1 normal both,
			animated-cursor 900ms steps(30, end) 8;
		-webkit-animation-delay: 7s;
		animation-delay: 7s;
	}

	.line__3 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-3 5s steps(30, end) 1s 1 normal both,
			animated-cursor 900ms steps(30, end) infinite;
		-webkit-animation-delay: 7s;
		animation-delay: 12s;
	}

	.desktop {
		display: block;
	}

	.mobile {
		display: none;
	}

	@keyframes animated-cursor {
		from {
			border-right-color: rgba(17, 17, 17, 0.9);
		}
		to {
			border-right-color: rgba(255, 255, 255, 0.8);
		}
	}

	@keyframes animated-text-1 {
		from {
			width: 0;
		}
		to {
			width: 43rem;
		}
	}

	@keyframes animated-text-2 {
		from {
			width: 0;
		}
		to {
			width: 43rem;
		}
	}

	@keyframes animated-text-3 {
		from {
			width: 0;
		}
		to {
			width: 33rem;
		}
	}

	@media only screen and (max-width: 1200px) {
		.about-wrapper {
			display: flex;
			flex-direction: column;
			width: 80%;
			padding: 0 10%;
		}

		.desktop {
			display: none;
		}

		.mobile {
			display: block;
			font-size: 13px;
			font-family: 'Press Start 2P', cursive;
			color: lightgrey;
			overflow: auto;
			line-height: 1.8;
		}
		.intro-text {
			font-size: 3em;
		}
	}

	@media only screen and (max-width: 500px) {
		.about-wrapper {
			display: flex;
			flex-direction: column;
			width: 80%;
			height: 100%;
			padding: 0 10%;
		}

		.mobile {
			display: block;
			font-size: 10px;
			font-family: 'Press Start 2P', cursive;
			color: lightgrey;
			overflow: auto;
			line-height: 1.8;
		}
		.intro-text {
			font-size: 2.5em;
		}
	}

</style>

