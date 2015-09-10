NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds_index'],

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);
  },


  render: function() {
    var content = this.template();
    this.$el.html(content);

    this.collection.forEach(function(feed) {
      this.$('.feed-list').append(JST['feeds_index_item']({feed: feed}))
    }.bind(this))

    return this;
  }

})
