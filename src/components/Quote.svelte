<script>
    import { scale, fade } from "svelte/transition";
    import { services } from "../store/data";
    import { imask } from "svelte-imask";

    let open = false;
    let name = "";
    let telephone = "";

    const options = {
        mask: "0000 000000",
    };
</script>

<style>
    .back {
        z-index: 5;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
            url("/images/pic2.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        background-attachment: scroll;
    }
</style>

<section id="quote" class="e-cols centered primary">
    <div class="e-face e-md-screen back" />
    <div class="e-container py-3">
        <h3 class="text-center py-2">Free Quote</h3>
        <div class="e-cols centered no-gap">
            <div class="e-col-6">
                <form class="p-3 pb-2">
                    <div class="e-form-group">
                        <label class="e-label" for="contact">Name & Telephone</label>
                        <input
                            class="e-control"
                            name="contact"
                            type="text"
                            required
                            bind:value={name}
                            placeholder="Your name" />
                        <input
                            class="e-control"
                            type="tel"
                            use:imask={options}
                            bind:value={telephone}
                            required
                            placeholder="Your phone number" />
                    </div>

                    <div class="e-form-group unified">
                        <label class="e-label">Service Type From & To</label>
                        <select class="e-select w-100">
                            {#each $services as service}
                                <option>{service.name}</option>
                            {/each}
                        </select>
                        <input
                            class="e-control"
                            type="text"
                            required
                            placeholder="Moving from" />
                        <input
                            class="e-control"
                            type="text"
                            placeholder="Moving to" />
                    </div>

                    <div class="e-col e-form-group w-100">
                        <label class="e-label">Message</label>
                        <textarea
                            class="e-control"
                            placeholder="Enter your comments/questions" />
                    </div>

                    <div class="e-form-group">
                        <button
                            type="submit"
                            class="e-btn danger anime fullwidth plus">Request</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
