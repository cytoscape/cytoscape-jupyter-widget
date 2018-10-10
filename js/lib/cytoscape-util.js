const cycx2js = require('cytoscape-cx2js')

function fromCx(cx) {
    const utils = new cycx2js.CyNetworkUtils();
    const niceCX = utils.rawCXtoNiceCX(cx);
    const cx2Js = new cycx2js.CxToJs(utils);
    const attributeNameMap = {};
    const elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
    const style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
    return {
        elements,
        style
    }
}

module.exports = {
    fromCx: fromCx
};