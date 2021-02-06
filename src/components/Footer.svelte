<script>
    import { siteData } from "../store/data";
</script>

<footer class="e-footer">
    <div class="e-cols centered">
        <div class="e-col-6 centered">
            <nav class="e-breadcrumb" aria-label="breadcrumb">
                <ul>
                    <li><a href="/#hero">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#services">Services</a></li>
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
            <a class="link" href="/#hero">{$siteData.name}</a>
        </p>
    </div>
</footer>
