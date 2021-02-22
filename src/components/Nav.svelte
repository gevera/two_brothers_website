<script>
	import { siteData, services } from "../store/data";

	let open = false;
</script>

<style>
	.logo {
		margin-bottom: 0;
	}
	nav {
		position: fixed;
		top: 0;
	}
</style>

<nav class="e-nav white">
	<a href="#hero">
		<img
			src="/images/logo_text_small.png"
			alt="navbar_logo"
			style="width:90px;height:auto;"
			class="logo" />
	</a>
	<a href={`tel:${$siteData.telephone}`} class="no-desktop pr-3 mr-3">
		<button class="e-btn circle primary inverted no-shadow no-desktop">
			<i class="fa fa-phone fa-lg" aria-hidden="true"/>
		</button>
		</a>
	<label
		for="e-menu"
		class="e-btn circle small plain primary no-shadow no-desktop">
		<i class={open ? 'fa fa-times' : 'fas fa-bars'} />
	</label>
	<input type="checkbox" id="e-menu" bind:checked={open} />

	<div class="e-menu narrow">
		<i class="e-distribution" />
		<a
			class="e-menu-item text-primary"
			href="/#hero"
			on:click={() => (open = false)}>Home</a>
		<a
			class="e-menu-item text-primary"
			href="/#about"
			on:click={() => (open = false)}>About</a>
		<div class="e-dropdown text-primary">
			Services
			<i class="fas fa-angle-down" />
			<div class="drop-items shadow-4">
				{#each $services as service}
					<a
						on:click={() => (open = false)}
						class="drop-item"
						href={`#${service.id}`}>{service.name}</a>
				{/each}

				<hr />
				<a class="e-btn danger" href={`tel:${$siteData.telephone}`}>Call
					Now</a>
				<a
					class="e-btn danger"
					href="/#quote"
					on:click={() => (open = false)}>Free Quote</a>
			</div>
		</div>
		<a
			class="e-menu-item text-primary"
			href="/#contact"
			on:click={() => (open = false)}>Contacts</a>
		<a
			class="e-menu-item text-primary"
			href={`tel:${$siteData.telephone}`}>{$siteData.telephone}</a>
	</div>
</nav>
