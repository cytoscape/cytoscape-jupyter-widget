from ._version import version_info, __version__

from .cytoscape import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'cytoscape-jupyter-widget',
        'require': 'cytoscape-jupyter-widget/extension'
    }]
