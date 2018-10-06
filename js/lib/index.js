// Load CSS
require('./cytoscape.css')

// Export widget models and views, and the npm package version number.
module.exports = require('./cytoscape.js');
module.exports['version'] = require('../package.json').version;