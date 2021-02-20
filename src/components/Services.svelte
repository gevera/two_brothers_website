<script>
    import { services } from '../store/data';
</script>

<style>
    #services {
        margin: 0 auto;
        max-width: 1024px;
    }
</style>

<section id="services" class="e-container">
    <h3 class="text-center pt-3">Services</h3>
    {#each $services as service}
        <div class="e-cols centered pt-2" id={service.id}>
            <div class="e-col-6">
                <h4 class="text-center">{service.name}</h4>
                <article class="e-note block white">
                    <div class="note-body text-center">{service.text}</div>
                </article>
            </div>
            <div class="e-col-6 centered">
                <article class="e-note block white">
                    <div class="note-body">
                        <img src={service.img} alt={services.id} />
                    </div>
                </article>
            </div>
        </div>
    {/each}
</section>
