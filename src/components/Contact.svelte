<script>
    import { siteData } from "../store/data";
</script>

<section class="e-cols danger centered py-3" id="contact">
    <div class="">
        <h3 class="text-center pt-3">Contact Us</h3>
        <div class="e-container e-cols centered">
            <div class="e-col-4 centered p-2">
                <p>
                    We are always available to answer any questions you have
                    about our movers, our rates, the services we offer, and the
                    areas we cover. We look forward to serving you! 
                    <a
                        class="text-bold"
                        href={`tel:${$siteData.telephone}`}>{$siteData.telephone}</a>.
                </p>
            </div>
            <div class="e-col-4 centered p-3">
                <div class="e-buttons centered">
                    <a
                        class="e-btn circle inverted primary"
                        href={$siteData.facebook} target="_blank"><i
                            class="fab fa-facebook-f" /></a>
                    <a
                        class="e-btn circle inverted sky"
                        href={`tel:${$siteData.telephone}`}><i
                            class="fas fa-phone" /></a>
                    <a
                        class="e-btn circle inverted danger"
                        href={`mailto:${$siteData.email}`}><i
                            class="fas fa-envelope" /></a>
                </div>
            </div>
        </div>
    </div>
</section>
