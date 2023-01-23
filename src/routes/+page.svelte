<svelte:head>
	<title>Hyunjin Chang</title>
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
		<span class="description line__1">
			I am a software engineer with a background
		</span>
		<span class="description line__2">in data science. Currently, I'm focusing on</span>
		<span class="description line__3">building full-stack applications.</span>
	</div>
	<div class="canvas-wrapper">
		<Canvas size={{ width: 400, height: 500 }}>
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
	/* .canvas-wrapper {
    width: 50%;
    height: auto;
  } */

	.about-wrapper {
		display: flex;
		width: 80%;
		justify-content: center;
		align-items: center;
		margin: 8% 10%;
	}

	.description {
		font-family: 'Press Start 2P', cursive;
		color: lightgrey;
		margin: 1% 0;
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

</style>

