<script lang="ts">
    import { onMount } from "svelte";

    let loaded = false;

    import { Swiper, SwiperSlide } from "swiper/svelte";
    import SwiperCore, {
        Mousewheel,
        Navigation,
        Pagination,
        Lazy,
        Zoom,
    } from "swiper";
    SwiperCore.use([Mousewheel, Navigation, Pagination, Lazy, Zoom]);

    onMount(() => (loaded = true));

    let x;
    let cards = 1;

    $: if (x < 1024) {
        cards = 1;
    } else if (x < 1500) {
        cards = 2;
    } else {
        cards = 3;
    }
</script>

<style>
    .e-card {
        max-width: 80%;
        margin: 0 auto;
    }
    .e-card:hover {
        cursor: pointer;
    }
</style>

<svelte:window bind:innerWidth={x} />

<div class="pt-3 pb-1 border-top" id="testimony">
    <h3 class="text-center p-3">Testimony</h3>
    <div class="e-container p-3 e-cols">
        {#if loaded}
            <Swiper
                mousewheel
                loop
                lazy
                navigation
                pagination
                slidesPerView={cards}
                spaceBetween={14}>
                <SwiperSlide>
                    <div class="e-col">
                        <div class="e-card">
                            <div class="card-body">
                                <h3 class="card-title">Marry G.</h3>
                                <p class="card-text text-italic">
                                    We moved from a Gerrards Cross apartment to
                                    our new home in High Wycombe and Two
                                    Brothers & Van brought two vans, loaded and
                                    unloaded and placed our furniture. The move
                                    was efficient, the brothers were on time,
                                    organized, friendly and hardworking, and
                                    affordable. Nothing was broken, care was
                                    taken with all of our things. We could not
                                    be happier.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="e-card">
                        <div class="card-body">
                            <h3 class="card-title">Michael W.</h3>
                            <p class="card-text text-italic">
                                Pasha did an excellent job from start to
                                finish. Thanks to him and his brother, we finally moved to our new place in Maidenhead.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="e-card">
                        <div class="card-body">
                            <h3 class="card-title">George K.</h3>
                            <p class="card-text text-italic">
                                The guys were simply wonderful in every way.
                                They were fast, super efficient, and not one
                                thing was broken. Great job!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="e-card">
                        <div class="card-body">
                            <h3 class="card-title">Patrick O.</h3>
                            <p class="card-text text-italic">
                                The moving brothers were awesome!!! They were
                                respectful of our belongings as well as both
                                houses! They were quick and efficient as well!
                                We could not have had a better team! A big thank
                                you to those two gentlemen!
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        {/if}
        <div class="e-cols centered">
            <div class="e-col">
                <img src="/images/luton_van.png" alt="luton van">
            </div>
        </div>
    </div>
</div>
