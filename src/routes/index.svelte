<script>
	import Testimony from "../components/Testimony.svelte";
	import Services from "../components/Services.svelte";
	import Contact from "../components/Contact.svelte";
	import Footer from "../components/Footer.svelte";
	import About from "../components/About.svelte";
	import Quote from "../components/Quote.svelte";
	import Hero from "../components/Hero.svelte";
	import Why from "../components/Why.svelte";
	import { siteData } from "../store/data";

	// let y;
	// $: $siteData.y = y;

	// $: console.log($siteData.y);
</script>
<!-- <svelte:window bind:scrollY={y} /> -->

<style>
</style>

<svelte:head>
	<title>{$siteData.name} Homepage | Removal Services</title>
</svelte:head>

<Hero />

<Why />

<Services />

<About />

<Quote />

<Testimony />

<Contact />

<Footer />
