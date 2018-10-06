#!/bin/bash
pip install -e ".[test, examples]" .
jupyter nbextension install --py --symlink --sys-prefix cyjupyter
jupyter nbextension enable --py --sys-prefix cyjupyter
jupyter notebook
