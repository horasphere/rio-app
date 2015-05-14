<modal>
  <div class="modal fade">
    <div class="modal-dialog { parent.opts.size }">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{ parent.opts.title }</h4>
        </div>
        <div class="modal-body">
          <yield/>
        </div>
        <div if={ parent.opts.showFooter } class="modal-footer">
          <button type="button" class="btn btn-default" onclick={ handleCancel }>Close</button>
          <button type="button" class="btn btn-primary" onclick={ handleSave }>Save changes</button>
        </div>
      </div>
    </div>
  </div>

  this.handleCancel = function(e) {
    this.parent.opts.trigger("cancel");
  }

  this.handleSave = function(e) {
    this.parent.opts.trigger("save");
  }

  var self = this;
  this.parent.opts.on("show", function() {
    $(self.root).find(".modal").modal('show')
  })

  this.parent.opts.on("hide", function() {
    $(self.root).find(".modal").modal('hide')
  })

</modal>