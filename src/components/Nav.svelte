<script>
	import { siteData } from "../store/data";
	import * as animateScroll from "svelte-scrollto";
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
	<img
		src="/images/logo_text_small.png"
		alt="navbar_logo"
		style="width:90px;height:auto;"
		class="logo" />
	<label
		for="e-menu"
		class="e-btn circle small plain primary no-shadow no-desktop"><i
			class="fas fa-bars" /></label>
	<input type="checkbox" id="e-menu" />
	<div class="e-menu narrow">
		<i class="e-distribution" />
		<a
			class="e-menu-item text-primary"
			href="/#hero"
			on:click={() => animateScroll.scrollTo({
					element: '#hero',
					duration: 1200,
					offset: 0,
				})}>Home</a>
		<a
			class="e-menu-item text-primary"
			href="/#about"
			on:click={() => animateScroll.scrollTo({
					element: '#about',
					duration: 1200,
					offset: -100,
				})}>About</a>
		<div class="e-dropdown text-primary">
			Services
			<i class="fas fa-angle-down" />
			<div class="drop-items shadow-4">
				<a
					class="drop-item"
					href="/#service1"
					on:click={() => animateScroll.scrollTo({
							element: '#service1',
							duration: 1200,
							offset: -100,
						})}>Service One</a>
				<a
					class="drop-item"
					href="/#service2"
					on:click={() => animateScroll.scrollTo({
							element: '#service2',
							duration: 1200,
							offset: -100,
						})}>Service Two</a>
				<a
					class="drop-item"
					href="/#service3"
					on:click={() => animateScroll.scrollTo({
							element: '#service3',
							duration: 1200,
							offset: -100,
						})}>Service Three</a>
				<a
					class="drop-item"
					href="/#service4"
					on:click={() => animateScroll.scrollTo({
							element: '#service4',
							duration: 1200,
							offset: -100,
						})}>Service Four</a>
				<hr />
				<a class="e-btn danger" href={`tel:${$siteData.telephone}`}>Call
					Now</a>
				<a
					class="e-btn danger"
					href="/#quote"
					on:click={() => animateScroll.scrollTo({
							element: '#quote',
							duration: 1200,
							offset: -100,
						})}>Free Quote</a>
			</div>
		</div>
		<a
			class="e-menu-item text-primary"
			href="/#contact"
			on:click={() => animateScroll.scrollTo({
					element: '#contact',
					duration: 1200,
					offset: -100,
				})}>Contacts</a>
		<a
			class="e-menu-item text-primary"
			href={`tel:${$siteData.telephone}`}>{$siteData.telephone}</a>
	</div>
</nav>
