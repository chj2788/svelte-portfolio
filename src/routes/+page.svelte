<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Avatar from '../lib/Avatar.svelte';
</script>

<svelte:head>
	<title>Hyunjin Alice Chang</title>
	<meta name="description" content="Welcome page" />
</svelte:head>

<div class="about-wrapper">
	<div class="text-column">
		<div class="intro-text">Hi,</div>
		<div class="intro-text">I am a</div>
		<div class="intro-text">Software-</div>
		<div class="intro-text">Engineer</div>
		<span class="description line__1 desktop">I've been dreaming in code</span>
		<span class="description line__2 desktop">Probably even debugging in my sleep!</span>
		<span class="description line__3 desktop">I love making things run</span>
		<span class="description line__4 desktop">Faster, Smoother, and Smarter.</span>
		<span class="description line__5 desktop">I love optimizing</span>
		<span class="description line__6 desktop">Cause who has time for inefficiency?</span>
		<span class="mobile"
			>I've been dreaming in code (probably debugging in my sleep). I love making things run faster,
			smoother, and smarter. Optimization is my passion, because who has time for inefficiency when
			we can just make it better?</span
		>
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
		width: 50%;
	}

	.text-column {
		margin: 0;
	}

	.about-wrapper {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		min-height: 78vh;
		height: 100%;
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
		animation: animated-text-1 3.5s steps(26, end) 1s 1 normal both,
			animated-cursor 350ms steps(26, end) 8.5;
	}

	.line__2 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-2 3.8s steps(36, end) 1s 1 normal both,
			animated-cursor 380ms steps(36, end) 8.5;
		-webkit-animation-delay: 3.5s;
		animation-delay: 3.5s;
	}

	.line__3 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-3 3s steps(24, end) 1s 1 normal both,
			animated-cursor 300ms steps(24, end) 8;
		-webkit-animation-delay: 7s;
		animation-delay: 7s;
	}

	.line__4 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-4 4s steps(31, end) 1s 1 normal both,
			animated-cursor 400ms steps(31, end) 8;
		-webkit-animation-delay: 10s;
		animation-delay: 10s;
	}

	.line__5 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-5 2.5s steps(17, end) 1s 1 normal both,
			animated-cursor 250ms steps(17, end) 8;
		-webkit-animation-delay: 14s;
		animation-delay: 14s;
	}

	.line__6 {
		border-right: 2px solid rgba(17, 17, 17, 0.9);

		/* define animation types for text + cursor */
		animation: animated-text-6 4s steps(35, end) 1s 1 normal both,
			animated-cursor 400ms steps(35, end) infinite;
		-webkit-animation-delay: 16s;
		animation-delay: 16s;
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
			width: 43rem; /* Adjust width based on the text */
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
			width: 28rem;
		}
	}

	@keyframes animated-text-4 {
		from {
			width: 0;
		}
		to {
			width: 30rem;
		}
	}

	@keyframes animated-text-5 {
		from {
			width: 0;
		}
		to {
			width: 23rem;
		}
	}

	@keyframes animated-text-6 {
		from {
			width: 0;
		}
		to {
			width: 35rem;
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
