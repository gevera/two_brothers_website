<script>
    import { siteData } from "../store/data";
    import * as animateScroll from "svelte-scrollto";
</script>

<footer class="e-footer">
    <div class="e-cols centered">
        <div class="e-col-6 centered">
            <nav class="e-breadcrumb" aria-label="breadcrumb">
                <ul>
                    <li>
                        <a
                            href="/#hero"
                            on:click={() => animateScroll.scrollTo({
                                    element: '#hero',
                                    duration: 1200,
                                    delay: 0,
                                    offset: 0,
                                })}>Home</a>
                    </li>
                    <li>
                        <a
                            href="/#about"
                            on:click={() => animateScroll.scrollTo({
                                    element: '#about',
                                    duration: 1200,
                                    delay: 0,
                                    offset: -100,
                                })}>About</a>
                    </li>
                    <li>
                        <a
                            href="/#services"
                            on:click={() => animateScroll.scrollTo({
                                    element: '#services',
                                    duration: 1200,
                                    delay: 0,
                                    offset: -100,
                                })}>Services</a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- <div class="e-col-6">
            <div class="e-buttons align-end">
                <a class="e-btn circle inverted primary"><i
                        class="fab fa-facebook-f" /></a>
                <a
                    class="e-btn circle inverted sky"
                    href={`tel:${$siteData.telephone}`}><i
                        class="fas fa-phone" /></a>
                <a class="e-btn circle inverted danger"><i
                        class="fas fa-envelope" /></a>
            </div>
        </div> -->
    </div>
    <div class="e-footer-bar primary centered">
        <p>
            ©
            {new Date().getFullYear()}
            Copyright:
            <a
                class="link"
                href="/#hero"
                on:click={() => animateScroll.scrollTo({
                        element: '#hero',
                        duration: 1200,
                        delay: 0,
                        offset: 0,
                    })}>{$siteData.name}</a>
        </p>
    </div>
</footer>
