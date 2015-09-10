NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feed_show'],

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click button.refresh': 'refreshPage'
  },

  render: function() {
    // var $button = $('<button class="refresh">Refresh</button>')
    this.$el.empty();
    var $ul = $('<ul>');
    var entries = this.model.entries();
    entries.each(function(entry) {
      $ul.append(JST['feed_show_item']({ entry: entry }));
    }.bind(this));
    var page = this.template({model: this.model})
    this.$el.append(page).append($ul);

    return this;
  },

  refreshPage: function() {
    console.log('refeshing')
    this.model.fetch();
  }

})
