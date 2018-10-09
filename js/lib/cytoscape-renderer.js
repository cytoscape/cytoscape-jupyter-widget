var cycx2js = require('cytoscape-cx2js')

function fromCx(cx) {
    const utils = new cycx2js.cyNetworkUtils();
    const niceCX = utils.rawCXtoNiceCX(cx);
    const cx2Js = new cycx2js.cxToJs(utils);
    const attributeNameMap = {};
    const elements = cx2Js.cyElementsFromNiceCX(niceCX, attributeNameMap);
    const style = cx2Js.cyStyleFromNiceCX(niceCX, attributeNameMap);
    return [elements, style];
}