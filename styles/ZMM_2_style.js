var size = 0;
var placement = 'point';
function categories_ZMM_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'APODACA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(48,18,59,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GARCIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(70,98,216,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GRAL. ESCOBEDO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(53,171,248,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GUADALUPE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(27,229,181,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'JUAREZ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(116,254,93,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MONTERREY':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(201,239,52,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAN NICOLAS DE LOS GARZA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(251,185,56,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAN PEDRO GARZA GARCIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(245,105,24,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SANTA CATARINA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(201,41,3,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.158)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(122,4,3,0.158)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZMM_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NOMBRE");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#e7f4f4";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOMBRE") !== null) {
        labelText = String(feature.get("NOMBRE"));
    }
    
var style = categories_ZMM_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
