NewsReader.Views.FeedsIndex = Backbone.View.extend({
  tagname: 'ul',

  template: JST['feeds_index_item'],

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function() {
    this.collection.forEach(function(feed) {
      this.$el.append(this.template({feed: feed}))
    }.bind(this))

    return this;
  }

})
