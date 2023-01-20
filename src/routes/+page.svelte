<svelte:head>
	<title>About</title>
	<meta name="description" content="Welcome page" />
</svelte:head>

<script lang="ts">
  import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
  import Avatar from '../lib/Avatar.svelte'
	
</script>

<div class="about-wrapper">
	<div class="text-column">
		<div class="intro-text">Hi,</div>
		<div class="intro-text">I am a </div>
		<div class="intro-text">Software-</div>
		<div class="intro-text">Engineer</div>
		<p class="description">
			I am a software engineer with a background in data science. Currently, I'm focusing on building a full-stack applications.
		</p>
	</div>
	<div class="canvas-wrapper">
		<Canvas size={{ width: 500, height: 500 }}>
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
	.canvas-wrapper {
    /* width: 50%;
    height: auto; */
  }

	.about-wrapper {
		display: flex;
		flex-direction: row;
		width:100%;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.description {
		font-family: 'Press Start 2P', cursive;
		color: lightgrey;
	}
</style>

