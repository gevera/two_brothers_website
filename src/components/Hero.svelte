<script>
    import Nav from "../components/Nav.svelte";
    import * as animateScroll from "svelte-scrollto";
</script>

<style>
    h1 {
        text-align: center;
        margin: 0 auto;
        text-transform: uppercase;
        font-weight: bold;
        font-style: italic;
        font-size: 1.8rem;
    }
    h2 {
        font-size: 1.2rem;
    }
    img {
        width: 100%;
        max-width: 280px;
        margin: 0 0 1em 0;
    }
    .padup {
        padding-top: 80px;
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 1.6rem;
        }
        img {
            max-width: 400px;
        }
    }

    @media (min-width: 968px) {
        h1 {
            font-size: 3.5em;
        }
        h2 {
            font-size: 1.8rem;
        }
        img {
            max-width: 480px;
        }
    }
</style>

<main class="e-face e-fullscreen bg-landing">
    <Nav />

    <!-- Body -->
    <section class="face-body centered padup" id="hero">
        <!-- <div class="face-item no-desktop">
			<img src="/images/logo-image.png" alt="main_logo"/>
		</div> -->
        <!-- <div class="face-item no-desktop"></div> -->
        <div class="e-container eUp">
            <img src="/images/logo-image.png" alt="main_logo" />
            <h1 class="e-title pt-3">Two Brothers & Van</h1>
            <h2 class="e-subtitle text-thin">Removal services done right</h2>
            <a
                on:click={() => animateScroll.scrollTo({
                        element: '#quote',
                        duration: 1200,
                        delay: 0,
                        offset: -100,
                    })}
                class="e-btn primary rounded inverted plus mt-2 ePull infinite"
                href="/#quote">Get an estimate</a>
            <!-- <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
            </p> -->
        </div>
    </section>
</main>
