<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	.g {
		display: grid;
		height: 100vh;
		place-items: center;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="g">
	<div class="e-container centered">
		<div>
			<h1 class="text-center text-primary">{status}</h1>
			<p class="text-center">{error.message}</p>
			<img src="logo-192.png" alt="logo" />
			<div class="centered">
			    <a href="/">
					<button class="e-btn outlined primary mt-1">To Main Page</button>
				</a>
			</div>
		</div>
	</div>
</div>
