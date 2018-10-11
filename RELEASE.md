# How to release

## Install release tool

```bash
pip install twine
pip install wheel
```

## Prepare release

- To release a new version of cyjupyter on PyPI:

* Update _version.py (set release version, remove 'dev')
* git add the _version.py file and git commit
* Build the distribution (both )

```bash
python setup.py sdist
python setup.py bdist_wheel --universal
```

* Tag it

```bash
git tag -a X.X.X -m "Version x.x.x release"
```


Update _version.py (add 'dev' and increment minor)
git add and git commit
git push
git push --tags

- To release a new version of cytoscape-jupyter-widget on NPM:

```
# clean out the `dist` and `node_modules` directories
git clean -fdx
npm install
npm publish
```