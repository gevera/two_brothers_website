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
import { text } from "svelte/internal";

	// let y;
	// $: $siteData.y = y;

	// $: console.log($siteData.y);
</script>

<!-- <svelte:window bind:scrollY={y} /> -->
<style>
</style>

<svelte:head>
	<title>{$siteData.name} Homepage | Removal Services</title>
	<meta
		name="description"
		content={`Home Removals Done Right. Man & Van services in Greater London area. Two Brothers & Van Removals &#128222;  Call Us ${$siteData.telephone}`} />
	<meta
		name="keywords"
		content="Removals, Van, Moving, House, Packing, Loading, Man, Transport, Delivery, High Wycombe, Wycombe, London" />
	<meta name="author" content="@skryonline" />
	<!-- Open Graph / Facebook -->
	<meta
		property="og:title"
		content={`${$siteData.name} Homepage | Removal Services`} />
	<meta
		property="og:description"
		content={`Home Removals Done Right. Man & Van services in Greater London area. Two Brothers & Van Removals &#128222;  Call Us ${$siteData.telephone}`} />
	<meta property="og:type" content="website" />
	<!-- <meta property="og:url" content="https://aero-urshak.ru/" /> -->
	<meta property="og:locale" content="en-GB" />
	<meta property="og:locale:alternate" content="en" />
	<meta property="og:site_name" content="Two Brother & Van Removals" />
	<!-- <meta property="og:image" content="aero-urshak.ru/hero.jpeg" /> -->

	<meta name="geo.region" content="GB-BKM" />
	<meta name="geo.placename" content="High Wycombe" />
	<meta name="geo.position" content="54.702355;-3.276575" />
	<meta name="ICBM" content="54.702355, -3.276575" />
</svelte:head>

<Hero />

<Why />

<Services />

<About />

<Quote />

<Testimony />

<Contact />

<Footer />
