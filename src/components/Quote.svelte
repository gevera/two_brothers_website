<script>
    import { scale, fade } from "svelte/transition";
    import { services } from "../store/data";
    import { imask } from "svelte-imask";

    let open = false;
    let name = "";
    let telephone = "";
    let text_message = "";
    let m_from = "";
    let m_to = "";
    let service_type = "";

    const options = {
        mask: "0000 000000",
    };

    const closeModal = () => {
        name = "";
        telephone = "";
        text_message = "";
        m_from = "";
        m_to = "";
        service_type = "";
        open = false;
    };

    const sendQuote = async () => {
        const response = await fetch("https://bot.skrymenu.com", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                telephone,
                message: `Moving From: ${m_from}; Moving To: ${m_to}; Service type: ${service_type}; Message: ${text_message};`,
                time: new Date().toLocaleString(),
                group: "two brothers",
            }),
        });
        if (response.ok) {
            open = true;
        }
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

<div class="e-modal" class:launch={open}>
    <div class="e-modal-content eUp">
        <header class="e-modal-header">
            <p class="e-modal-title">Submition sent!</p>
            <button type="button" class="e-delete" on:click={closeModal}>
                <i aria-hidden="true">&times;</i>
            </button>
        </header>
        <div class="e-modal-body">
            <div class="e-cols">
                <div class="e-col-6 p-2"><img src="logo-192.png" alt="Logo" /></div>
            </div>
                        <p>
                            Thank you,
                            {name}, for your submition. We will get back to you as soon as
                            possible
                        </p>
        </div>
        <footer class="e-modal-footer centered">
            <button class="e-btn primary" on:click={closeModal}>OK, thanks</button>
        </footer>
    </div>
</div>

<section id="quote" class="e-cols centered primary">
    <div class="e-face e-md-screen back" />
    <div class="e-container py-3">
        <h3 class="text-center py-2">Free Quote</h3>
        <div class="e-cols centered no-gap">
            <div class="e-col-6">
                <form on:submit|preventDefault={sendQuote} class="p-3 pb-2">
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
                        <select
                            class="e-select w-100"
                            bind:value={service_type}>
                            {#each $services as service}
                                <option>{service.name}</option>
                            {/each}
                        </select>
                        <input
                            class="e-control"
                            type="text"
                            bind:value={m_from}
                            placeholder="Moving from" />
                        <input
                            class="e-control"
                            type="text"
                            bind:value={m_to}
                            placeholder="Moving to" />
                    </div>

                    <div class="e-col e-form-group w-100">
                        <label class="e-label">Message</label>
                        <textarea
                            bind:value={text_message}
                            class="e-control"
                            placeholder="Enter your comments/questions" />
                    </div>

                    <div class="e-form-group">
                        <button
                            type="submit"
                            class="e-btn danger anime fullwidth plus">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
