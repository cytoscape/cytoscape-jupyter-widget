var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var cytoscape = require('cytoscape');
var cyjs = require('./cytoscape-renderer');

const FORMAT = {
    CX: 'cx',
    CYJS: 'cyjs',
    EDGELIST: 'el',
}

const DEF_STYLE = [{
        selector: 'node',
        style: {
            'background-color': 'teal',
            'label': 'data(id)'
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': '#FFFFFF',
            'target-arrow-color': '#FFFFFF',
            'target-arrow-shape': 'triangle'
        }
    }
];

const EMPTY_NET = {
    data: {
        name: 'Cytoscape Network'
    },
    elements: {
        nodes: [],
        edges: []
    }
}

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var CytoscapeModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name: 'CytoscapeModel',
        _view_name: 'CytoscapeView',
        _model_module: 'cytoscape-jupyter-widget',
        _view_module: 'cytoscape-jupyter-widget',
        _model_module_version: '0.1.0',
        _view_module_version: '0.1.0',
        data: EMPTY_NET,
        format: 'cx',
        background: '#EEEEEE'
    })
});


// Custom View. Renders the widget model.
var CytoscapeView = widgets.DOMWidgetView.extend({

    camel_case: function(input) {
        return input.toLowerCase().replace(/_(.)/g, function(match, group1) {
            return group1.toUpperCase();
        });
    },
    get_options: function() {
        var o = this.model.get('options');
        var options = {};
        var key;
        for (var i = 0; i < o.length; i++) {
            key = o[i];
            options[this.camel_case(key)] = this.model.get(key);
        }
        return options;
    },
    render: function() {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        let background = this.model.get('background');
        let cellHeight = this.model.get('cell_height');

        if (!background) {
            background = '#FFFFFF'
        }
        if (!cellHeight) {
            cellHeight = '550px'
        }

        this.el.classList.add('cytoscape-widget')
        this.el.id = 'cyjs'

        this.el.setAttribute("style", "background:" + background + "; height: " + cellHeight + ";");
        this.displayed.then(_.bind(this.render_cy, this));
    },

    render_cy: function() {
        var that = this;

        // Extract parameters
        const data = that.model.get('data');
        const format = that.model.get('format');
        var layoutName = that.model.get('layout_name');
        let visualStyle = that.model.get('style');

        if (layoutName === undefined || typeof layoutName !== 'string') {
            layoutName = 'grid'
        }

        let network = data
        if (format === FORMAT.CX) {
            // Convert to CYJS
            console.log('This is CX:', data)
            network = cyjs.fromCx(data)
            visualStyle = network.style
            console.log('result CX:', network)
            console.log('result CX:', network)
            console.log('Layout3:', layoutName)
        }

        if (!visualStyle) {
            visualStyle = DEF_STYLE;
        }

        var cy = cytoscape({
            container: that.el, // container to render in
            elements: network.elements,
            style: visualStyle,
            layout: {
                name: layoutName
            }
        });
    }
});


module.exports = {
    CytoscapeModel: CytoscapeModel,
    CytoscapeView: CytoscapeView
};