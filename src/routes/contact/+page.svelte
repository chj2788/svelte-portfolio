<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact Info" />
</svelte:head>

<script lang="ts">
	function copyToClipboard(copyText: string) {
		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText);

		// Alert the copied text
		alert("Successfully copied '" + copyText + "' to a clipboard");
	}
</script>

<div class="contact-wrapper">
	<div>
		<div class="intro-text">Let's <br>get <br>connected</div>
		<p class="contact-info">
			Email: hyunjin.alice.chang@gmail.com
		</p>
		<div class="button-wrapper">
			<button on:click|preventDefault={()=>copyToClipboard("hyunjin.alice.chang@gmail.com")}>Click to Copy</button>
			<button on:click|preventDefault={()=>window.location.href="mailto:hyunjin.alice.chang@gmail.com"}>Email</button>
		</div>
		<p class="contact-info">
			Phone Number: 530-220-0895
		</p> 
		<div class="button-wrapper">
			<button on:click|preventDefault={()=>copyToClipboard("530-220-0895")}>Click to Copy</button>
			<button on:click|preventDefault={()=>window.location.href="tel:530-220-0895"}>Call</button>
		</div>
		<p class="contact-info">
			Linkedin
		</p> 
		<div class="button-wrapper">
			<button class="single-button" on:click|preventDefault={()=>window.open("https://www.linkedin.com/in/hyunjin-alice-chang-0a91621a3/", '_blank')}>
				Click to see my Linkedin profile
			</button>
		</div>
		<p class="contact-info">
			Github
		</p> 
		<div class="button-wrapper">
			<button class="single-button" on:click|preventDefault={()=>window.open("https://github.com/chj2788", '_blank')}>
				Click to see my Github profile
			</button>
		</div>
	</div>
</div>



<style>
	.intro-text {
		font-size: 4em;
		color: white;
		font-family: 'Syncopate', sans-serif;
		width: 100%;
		-webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
		-webkit-mask-size: 200%;
		animation: shine 2s linear infinite;
		position: relative;
	}

	.contact-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
		min-height: 78vh;
	}

	.contact-info {
		font-family: 'Press Start 2P', cursive;
		color: lightgrey;
	}

	.button-wrapper {
		margin: 3px 0;
		font-family: 'Press Start 2P', cursive;
		font-size: 13px;
	}

	button {
		padding: 2% 5%;
		border-radius: 15px;
		width: 45%;
	}

	.single-button {
		width: 93%;
	}

	button:hover {
		background-color: var(--color-theme-1);
	}

	@keyframes shine {
		from { -webkit-mask-position: 150%; }
		to { -webkit-mask-position: -50%; }
	}

	@media only screen and (max-width: 1200px) {
		.intro-text {
			font-size: 3em;
		}

		.contact-wrapper {
			display: flex;
		}

		.contact-info {
			font-size: 13px;
		}

		.button-wrapper {
			width: 100%;
			font-size: 10px;
		}
	}

	@media only screen and (max-width: 500px) {
		.intro-text {
			font-size: 2.5em;
		}

		.contact-info {
			font-size: 9px;
		}
	}

</style>

