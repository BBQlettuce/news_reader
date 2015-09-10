NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'feedsIndex',
    'feeds/:id': 'feedShow'
  },

  feedsIndex: function() {
    var feeds = new NewsReader.Collections.Feeds();
    var view = new NewsReader.Views.FeedsIndex( {collection: feeds} );
    feeds.fetch();
    this._swapView(view);
  },

  feedShow: function() {

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
