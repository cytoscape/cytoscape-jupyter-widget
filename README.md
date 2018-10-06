cytoscape-jupyter-widget
===============================

Cytoscape.js widget for Jupyter Notebook

Installation
------------

To install use pip:

    $ pip install cyjupyter
    $ jupyter nbextension enable --py --sys-prefix cyjupyter


For a development installation (requires npm),

    $ git clone https://github.com/cytoscape/cytoscape-jupyter-widget.git
    $ cd cytoscape-jupyter-widget
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix cyjupyter
    $ jupyter nbextension enable --py --sys-prefix cyjupyter
