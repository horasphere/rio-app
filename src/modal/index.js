var _ = require('underscore');

var options = {
    title: "",
    show: false, //Show when initialized?,
    size: "modal-md", //modal-sm, modal-lg
    showFooter: true
}

module.exports = function(opts) {
    var modal = riot.observable();

    opts = _.extend(options, opts);
    modal = _.extend(modal, opts);

    modal.show = function() {
        modal.trigger("show")
    }

    modal.hide = function() {
        modal.trigger("hide")
    }

    return modal;
}