import ipywidgets as widgets

from traitlets import (
    Any,
    Float, Unicode, Int, Tuple, List, Instance, Bool, Dict, Enum,
    link, observe, default, validate, TraitError
)

@widgets.register
class Cytoscape(widgets.DOMWidget):
    """Cytoscape.js widget for simple network visualization."""
    _view_name = Unicode('CytoscapeView').tag(sync=True)
    _model_name = Unicode('CytoscapeModel').tag(sync=True)
    _view_module = Unicode('cytoscape-jupyter-widget').tag(sync=True)
    _model_module = Unicode('cytoscape-jupyter-widget').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

     # Cytoscape options
    data = Any().tag(sync=True)
    visual_style = Any().tag(sync=True, o=True)
    format = Unicode('cyjs').tag(sync=True, o=True)
    layout_name = Unicode().tag(sync=True, o=True)
    background = Unicode('#FFFFFF').tag(sync=True, o=True)