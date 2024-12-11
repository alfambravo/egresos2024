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
var format_Egresos2024_v23_2 = new ol.format.GeoJSON();
var features_Egresos2024_v23_2 = format_Egresos2024_v23_2.readFeatures(json_Egresos2024_v23_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Egresos2024_v23_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Egresos2024_v23_2.addFeatures(features_Egresos2024_v23_2);
var lyr_Egresos2024_v23_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Egresos2024_v23_2, 
                style: style_Egresos2024_v23_2,
                popuplayertitle: "Egresos2024_v2.3",
                interactive: true,
                title: '<img src="styles/legend/Egresos2024_v23_2.png" /> Egresos2024_v2.3'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_MUNICIPIO_1.setVisible(true);lyr_Egresos2024_v23_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_MUNICIPIO_1,lyr_Egresos2024_v23_2];
lyr_MUNICIPIO_1.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'CONTROL': 'CONTROL', 'GEOMETRY1_': 'GEOMETRY1_', });
lyr_Egresos2024_v23_2.set('fieldAliases', {'CENTRO': 'CENTRO', 'NUMERO': 'NUMERO', 'Nombre': 'Nombre', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'Dirección': 'Dirección', 'Direcci�_1': 'Direcci�_1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status geo': 'Status geo', 'DELITOS': 'DELITOS', 'DELITO 2': 'DELITO 2', 'DELITO 3': 'DELITO 3', 'Gráfica': 'Gráfica', });
lyr_MUNICIPIO_1.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CONTROL': 'TextEdit', 'GEOMETRY1_': 'TextEdit', });
lyr_Egresos2024_v23_2.set('fieldImages', {'CENTRO': 'TextEdit', 'NUMERO': 'TextEdit', 'Nombre': '', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'Dirección': 'TextEdit', 'Direcci�_1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status geo': 'TextEdit', 'DELITOS': 'TextEdit', 'DELITO 2': 'TextEdit', 'DELITO 3': 'TextEdit', 'Gráfica': 'TextEdit', });
lyr_MUNICIPIO_1.set('fieldLabels', {'ID': 'header label - visible with data', 'ENTIDAD': 'no label', 'MUNICIPIO': 'no label', 'NOMBRE': 'hidden field', 'CONTROL': 'hidden field', 'GEOMETRY1_': 'hidden field', });
lyr_Egresos2024_v23_2.set('fieldLabels', {'CENTRO': 'hidden field', 'NUMERO': 'hidden field', 'Nombre': 'no label', 'MUNICIPIO': 'inline label - always visible', 'ESTADO': 'hidden field', 'Dirección': 'hidden field', 'Direcci�_1': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Status geo': 'no label', 'DELITOS': 'inline label - always visible', 'DELITO 2': 'no label', 'DELITO 3': 'inline label - always visible', 'Gráfica': 'inline label - visible with data', });
lyr_Egresos2024_v23_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});