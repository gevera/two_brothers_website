<script>
    import { siteData } from "../store/data";
</script>

<section class="e-cols danger centered py-3" id="contact">
    <div class="">
        <h3 class="text-center pt-3">Contact Us</h3>
        <div class="e-container e-cols centered">
            <div class="e-col-4 centered p-2">
                <p>
                    if you have any questions regarding amet consectetur
                    adipisicing elit. Officiis eligendi praesentium delectus,
                    cum repudiandae non nemo alias ab fugit distinctio!
                    Expedita, excepturi deserunt! Eius,
                    <a
                        href={`tel:${$siteData.telephone}`}>{$siteData.telephone}</a>.
                </p>
            </div>
            <div class="e-col-4 centered p-3">
                <div class="e-buttons centered">
                    <a
                        class="e-btn circle inverted primary"
                        href="https://www.facebook.com"><i
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
