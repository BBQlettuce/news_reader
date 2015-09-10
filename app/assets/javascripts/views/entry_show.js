NewsReader.Views.EntryShow = Backbone.View.extend({

  template: JST['entry_item'],

  render: function() {
    this.$el.html(this.template({entry: this.model}));
    return this;
  }

});
