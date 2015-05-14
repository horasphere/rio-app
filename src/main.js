require('./app.tag');
require('./modal/employee-modal.tag');

var Modal = require('./modal');

var modal = new Modal({
    title: "Custom title",
    showFooter: true,
    size: "modal-lg"
});

modal.on("cancel", function() {
    modal.hide();
})


$(function() {
$(".btn").click(function() {
    modal.show();
})

    riot.mount('app');
    riot.mount('employee-modal', modal);
})

module.exports = {}