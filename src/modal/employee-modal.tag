require('./modal.tag');

<employee-modal>
    <modal>
        <div class="alert alert-danger">ok!</div>
        <script>
            this.opts.on("save", function() {
                console.log("Saving...", this)
                this.hide();

            })
        </script>
    </modal>
</employee-modal>
