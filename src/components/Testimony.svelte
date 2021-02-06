<script lang="ts">
    import { onMount } from "svelte";

    import { Swipe, SwipeItem } from "svelte-swipe";
    let show = false;

    const swipeConfig = {
        autoplay: true,
        delay: 3000,
        showIndicators: true,
        transitionDuration: 500,
        defaultIndex: 0,
        is_vertical: false,
    };

    onMount(() => (show = true));
</script>

<style>
    .swipe-holder {
        height: 480px;
        width: 100%;
    }
    img {
        /* max-width: 100%;
        height: auto; */
        object-fit: cover;
    }
    /* .e-card {
        max-height: 300px;
        width: 20rem;
    } */
    /* .contain {
        max-width: 160px;
        max-height: 160px;
        object-fit: cover;
    } */
</style>

<!-- <div class="e-cols centered e-sm-screen pt-3 pb-1 border-top" id="testimony"> -->
<div class="e-sm-screen pt-3 pb-1 border-top" id="testimony">
    <h3 class="text-center p-3">Testimony</h3>
    <div class="swipe-holder p-3">
        {#if show}
            <Swipe {...swipeConfig}>
                <!-- <SwipeItem>
                    <div class="e-cols centered">
                        <div class="e-col-6 shadow-4">
                            <h4>test</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus, expedita
                                delectus eaque dicta debitis harum repellat? Id,
                                ullam fuga. Itaque cupiditate fugiat nisi nemo
                                fuga aut aliquid repudiandae minima voluptas!
                            </p>
                        </div>
                    </div>
                </SwipeItem> -->

                <SwipeItem>
                    <div class="e-cols centered">
                        <div class="e-col-6">
                            <div class="e-card p-3">
                                <!--Card image-->
                                <img
                                    src="/images/logo-image.png"
                                    alt="card"
                                    class="contain" />

                                <!--Card body-->
                                <div class="card-body">
                                    <h3 class="card-title">Michael W.</h3>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quibusdam ratione
                                        consequatur assumenda ullam odit officia
                                        nam, magni illum?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwipeItem>


                <SwipeItem>
                    <div class="e-cols centered">
                        <div class="e-col-6">
                            <div class="e-card p-3">
                                <!--Card image-->
                                <img
                                    src="/images/logo-image.png"
                                    alt="card"
                                    class="contain" />

                                <!--Card body-->
                                <div class="card-body">
                                    <h3 class="card-title">William T.</h3>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quibusdam ratione
                                        consequatur assumenda ullam odit officia
                                        nam, magni illum?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwipeItem>

                <SwipeItem>
                    <!-- <div class="e-cols">
                        <div class="e-col-6"> -->
                            <div class="e-card p-3">
                                <!--Card image-->
                                <img
                                    src="/images/logo-image.png"
                                    alt="card"
                                    class="contain" />

                                <!--Card body-->
                                <div class="card-body">
                                    <h3 class="card-title">Christine S.</h3>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quibusdam ratione
                                        consequatur assumenda ullam odit officia
                                        nam, magni illum?
                                    </p>
                                </div>
                            </div>
                        <!-- </div>
                    </div> -->
                </SwipeItem>

                <SwipeItem>
                    <div class="e-cols centered">
                        <div class="e-col-6">
                            <img src="/images/logo-image.png" alt="" />
                        </div>
                    </div>
                </SwipeItem>

                <SwipeItem>
                    <div class="e-cols centered">
                        <div class="e-col-6">
                            <img src="/images/logo.png" alt="" />
                        </div>
                    </div>
                </SwipeItem>
            </Swipe>
        {/if}
    </div>
</div>
