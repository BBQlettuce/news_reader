NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feed_show_item'],

  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var entries = this.model.entries();
    entries.each(function(entry) {
      this.$el.append(this.template({ entry: entry }));
    }.bind(this));
    return this;
  }

})
