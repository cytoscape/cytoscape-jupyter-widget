var cytoscape-jupyter-widget = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'cytoscape-jupyter-widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'cytoscape-jupyter-widget',
          version: cytoscape-jupyter-widget.version,
          exports: cytoscape-jupyter-widget
      });
  },
  autoStart: true
};

