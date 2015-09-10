NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['feed_show'],

  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
    this.collection = this.model.entries();
  },

  events: {
    'click button.refresh': 'refreshPage'
  },

  updateSubviews: function() {
    // this.eachSubview(function (subview) {
    //   this.removeSubview("ul.entry-list", subview);
    // }.bind(this));
    // this.subviews("ul.entry-list") = _([]);
    debugger
    this.subviews("ul.entry-list").splice(0, this.subviews("ul.entry-list").length);

    this.collection.each(function(entry) {
      var subView = new NewsReader.Views.EntryShow({model: entry});
      this.addSubview("ul.entry-list", subView);
    }.bind(this));
  },

  render: function() {
    this.updateSubviews();
    var content = this.template({feed: this.model});
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  refreshPage: function() {
    console.log('refeshing')
    this.model.fetch();
  }

})
