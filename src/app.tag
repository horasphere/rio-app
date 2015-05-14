require('./name.tag');

<app>
  <name first="Carey" last="Price"></name>
  <name first="PK" last="Subban"></name>
  <input name="datepicker" onchange={handleDateChange} />

  this.handleDateChange = function(e) {
    console.log("date changed", this.datepicker.value);
  }

  var self = this;
  this.on('mount', function() {
      // right after tag is mounted on the page
      console.log("Mounted", this, arguments)
      $(self.root).find("input").datepicker()
  })
</app>