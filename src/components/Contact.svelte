<script>
    import { siteData } from "../store/data";
</script>

<section class="" id="contact">
    <h3 class="text-center pb-3">Contact Us</h3>
    <div class="e-cols centered danger">
        <!-- <div class="e-col-12 danger pt-3">
            <h5 class="text-center">{$siteData.telephone}</h5>
        </div>

        <div class="e-col-12 danger centered pt-3">
            <div class="e-buttons centered">
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
        <div class="e-col-4 centered p-2">
            <p>
                if you have any questions regarding amet consectetur adipisicing
                elit. Officiis eligendi praesentium delectus, cum repudiandae non nemo alias ab fugit
                distinctio! Expedita, excepturi deserunt! Eius,
                <a
                    href={`tel:${$siteData.telephone}`}>{$siteData.telephone}</a>.
            </p>
        </div>
        <div class="e-col-4 centered p-3">
            <div class="e-buttons centered">
                <a class="e-btn circle inverted primary"><i
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
</section>
