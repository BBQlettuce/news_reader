NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = new NewsReader.Collections.Feeds();
    this.feeds.fetch({ reset: true});
  },

  routes: {
    '': 'feedsIndex',
    'feeds/:id': 'feedShow'
  },

  feedsIndex: function() {
    var view = new NewsReader.Views.FeedsIndex( {collection: this.feeds} );
    this._swapView(view);
  },

  feedShow: function(id) {
    var feed = this.feeds.getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({ model: feed });
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
