NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds_index'],

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function() {
    this.$el.html(this.template({feeds: this.collection}));
    return this;
  }

})
