var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIO_1 = new ol.format.GeoJSON();
var features_MUNICIPIO_1 = format_MUNICIPIO_1.readFeatures(json_MUNICIPIO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIO_1.addFeatures(features_MUNICIPIO_1);
var lyr_MUNICIPIO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIO_1, 
                style: style_MUNICIPIO_1,
                popuplayertitle: "MUNICIPIO",
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIO_1.png" /> MUNICIPIO'
            });
var format_ZMM_2 = new ol.format.GeoJSON();
var features_ZMM_2 = format_ZMM_2.readFeatures(json_ZMM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMM_2.addFeatures(features_ZMM_2);
var lyr_ZMM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMM_2, 
                style: style_ZMM_2,
                popuplayertitle: "ZMM",
                interactive: false,
    title: 'ZMM<br />\
    <img src="styles/legend/ZMM_2_0.png" /> APODACA<br />\
    <img src="styles/legend/ZMM_2_1.png" /> GARCIA<br />\
    <img src="styles/legend/ZMM_2_2.png" /> GRAL. ESCOBEDO<br />\
    <img src="styles/legend/ZMM_2_3.png" /> GUADALUPE<br />\
    <img src="styles/legend/ZMM_2_4.png" /> JUAREZ<br />\
    <img src="styles/legend/ZMM_2_5.png" /> MONTERREY<br />\
    <img src="styles/legend/ZMM_2_6.png" /> SAN NICOLAS DE LOS GARZA<br />\
    <img src="styles/legend/ZMM_2_7.png" /> SAN PEDRO GARZA GARCIA<br />\
    <img src="styles/legend/ZMM_2_8.png" /> SANTA CATARINA<br />\
    <img src="styles/legend/ZMM_2_9.png" /> <br />'
        });
var format_Egresos2024_v23_3 = new ol.format.GeoJSON();
var features_Egresos2024_v23_3 = format_Egresos2024_v23_3.readFeatures(json_Egresos2024_v23_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Egresos2024_v23_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Egresos2024_v23_3.addFeatures(features_Egresos2024_v23_3);
var lyr_Egresos2024_v23_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Egresos2024_v23_3, 
                style: style_Egresos2024_v23_3,
                popuplayertitle: "Egresos2024_v2.3",
                interactive: true,
                title: '<img src="styles/legend/Egresos2024_v23_3.png" /> Egresos2024_v2.3'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_MUNICIPIO_1.setVisible(true);lyr_ZMM_2.setVisible(true);lyr_Egresos2024_v23_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_MUNICIPIO_1,lyr_ZMM_2,lyr_Egresos2024_v23_3];
lyr_MUNICIPIO_1.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', });
lyr_ZMM_2.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', });
lyr_Egresos2024_v23_3.set('fieldAliases', {'CENTRO': 'CENTRO', 'NUMERO': 'NUMERO', 'Nombre': 'Nombre', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'Dirección': 'Dirección', 'Direcci�_1': 'Direcci�_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status geo': 'Status geo', 'DELITOS': 'DELITOS', 'DELITO 2': 'DELITO 2', 'DELITO 3': 'DELITO 3', 'Gráfica': 'Gráfica', });
lyr_MUNICIPIO_1.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CONTROL': 'TextEdit', 'GEOMETRY1_': 'TextEdit', });
lyr_ZMM_2.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CONTROL': 'TextEdit', 'GEOMETRY1_': 'TextEdit', });
lyr_Egresos2024_v23_3.set('fieldImages', {'CENTRO': 'TextEdit', 'NUMERO': 'TextEdit', 'Nombre': '', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'Dirección': 'TextEdit', 'Direcci�_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status geo': 'TextEdit', 'DELITOS': 'TextEdit', 'DELITO 2': 'TextEdit', 'DELITO 3': 'TextEdit', 'Gráfica': 'TextEdit', });
lyr_MUNICIPIO_1.set('fieldLabels', {'ID': 'header label - visible with data', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'hidden field', 'CONTROL': 'hidden field', 'GEOMETRY1_': 'hidden field', });
lyr_ZMM_2.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'no label', 'CONTROL': 'no label', 'GEOMETRY1_': 'no label', });
lyr_Egresos2024_v23_3.set('fieldLabels', {'CENTRO': 'hidden field', 'NUMERO': 'hidden field', 'Nombre': 'no label', 'MUNICIPIO': 'inline label - always visible', 'ESTADO': 'hidden field', 'Dirección': 'hidden field', 'Direcci�_1': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Status geo': 'no label', 'DELITOS': 'inline label - always visible', 'DELITO 2': 'inline label - visible with data', 'DELITO 3': 'header label - visible with data', 'Gráfica': 'inline label - visible with data', });
lyr_Egresos2024_v23_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});