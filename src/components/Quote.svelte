<style>
    .fill {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    img {
        object-position: cover;
        /* flex-shrink: 0;
        min-width: 100%;
        min-height: 100%; */
    }
</style>

<section id="quote" class="">
    <h3 class="text-center pb-3">Free Quote</h3>
    <div class="e-cols primary no-gap">
        <div class="e-col fill">
            <img src="/images/pexels-cottonbro-4569340.jpg" alt="" />
        </div>
        <div class="e-col">
            <form class="p-2 pt-1 pb-1">
                <div class="e-form-group unified">
                    <label class="e-label">Name</label>
                    <input
                        class="e-control"
                        type="text"
                        required
                        placeholder="First name" />
                    <input
                        class="e-control"
                        type="text"
                        placeholder="Last name" />
                </div>
                <div class="e-form-group unified">
                    <label class="e-label">Telephone & Email</label>
                    <input
                        class="e-control"
                        type="tel"
                        required
                        placeholder="Your phone number" />
                    <input
                        class="e-control"
                        type="email"
                        placeholder="Your email address" />
                </div>
                <div class="e-form-group">
                    <label class="e-label">Service type</label>
                    <select class="e-select">
                        <option>Service 1</option>
                        <option>Service 2</option>
                        <option>Service 3</option>
                        <option>Service 4</option>
                    </select>
                </div>

                <div class="e-col e-form-group w-100">
                    <label class="e-label">Message</label>
                    <textarea class="e-control" placeholder="Enter your comments/questions" />
                </div>

                <div class="e-form-group">
                    <button
                        type="submit"
                        class="e-btn primary inverted">Request</button>
                </div>
            </form>
        </div>
    </div>
</section>
