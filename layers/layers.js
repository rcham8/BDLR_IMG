var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BDLR_IMG_01_1 = new ol.format.GeoJSON();
var features_BDLR_IMG_01_1 = format_BDLR_IMG_01_1.readFeatures(json_BDLR_IMG_01_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDLR_IMG_01_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDLR_IMG_01_1.addFeatures(features_BDLR_IMG_01_1);
var lyr_BDLR_IMG_01_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDLR_IMG_01_1, 
                style: style_BDLR_IMG_01_1,
                popuplayertitle: 'BDLR_IMG_01',
                interactive: true,
    title: 'BDLR_IMG_01<br />\
    <img src="styles/legend/BDLR_IMG_01_1_0.png" /> IMG_8927<br />\
    <img src="styles/legend/BDLR_IMG_01_1_1.png" /> IMG_8931<br />\
    <img src="styles/legend/BDLR_IMG_01_1_2.png" /> IMG_8933<br />\
    <img src="styles/legend/BDLR_IMG_01_1_3.png" /> IMG_8934<br />\
    <img src="styles/legend/BDLR_IMG_01_1_4.png" /> IMG_8936<br />\
    <img src="styles/legend/BDLR_IMG_01_1_5.png" /> IMG_8939<br />\
    <img src="styles/legend/BDLR_IMG_01_1_6.png" /> IMG_8941<br />\
    <img src="styles/legend/BDLR_IMG_01_1_7.png" /> IMG_8942<br />\
    <img src="styles/legend/BDLR_IMG_01_1_8.png" /> IMG_8945<br />\
    <img src="styles/legend/BDLR_IMG_01_1_9.png" /> IMG_8946<br />\
    <img src="styles/legend/BDLR_IMG_01_1_10.png" /> IMG_8948<br />\
    <img src="styles/legend/BDLR_IMG_01_1_11.png" /> IMG_8949<br />\
    <img src="styles/legend/BDLR_IMG_01_1_12.png" /> IMG_8950<br />\
    <img src="styles/legend/BDLR_IMG_01_1_13.png" /> IMG_8954<br />\
    <img src="styles/legend/BDLR_IMG_01_1_14.png" /> IMG_8956<br />\
    <img src="styles/legend/BDLR_IMG_01_1_15.png" /> IMG_8960<br />\
    <img src="styles/legend/BDLR_IMG_01_1_16.png" /> IMG_8961<br />\
    <img src="styles/legend/BDLR_IMG_01_1_17.png" /> IMG_8963<br />\
    <img src="styles/legend/BDLR_IMG_01_1_18.png" /> IMG_8967<br />\
    <img src="styles/legend/BDLR_IMG_01_1_19.png" /> IMG_8968<br />\
    <img src="styles/legend/BDLR_IMG_01_1_20.png" /> IMG_8969<br />\
    <img src="styles/legend/BDLR_IMG_01_1_21.png" /> IMG_8970<br />\
    <img src="styles/legend/BDLR_IMG_01_1_22.png" /> IMG_8974<br />\
    <img src="styles/legend/BDLR_IMG_01_1_23.png" /> IMG_8976<br />\
    <img src="styles/legend/BDLR_IMG_01_1_24.png" /> IMG_8977<br />\
    <img src="styles/legend/BDLR_IMG_01_1_25.png" /> IMG_8982<br />\
    <img src="styles/legend/BDLR_IMG_01_1_26.png" /> IMG_8983<br />\
    <img src="styles/legend/BDLR_IMG_01_1_27.png" /> IMG_8984<br />\
    <img src="styles/legend/BDLR_IMG_01_1_28.png" /> IMG_8985<br />\
    <img src="styles/legend/BDLR_IMG_01_1_29.png" /> IMG_8986<br />\
    <img src="styles/legend/BDLR_IMG_01_1_30.png" /> IMG_8988<br />\
    <img src="styles/legend/BDLR_IMG_01_1_31.png" /> IMG_8989<br />\
    <img src="styles/legend/BDLR_IMG_01_1_32.png" /> IMG_8992<br />\
    <img src="styles/legend/BDLR_IMG_01_1_33.png" /> IMG_8993<br />\
    <img src="styles/legend/BDLR_IMG_01_1_34.png" /> IMG_8996<br />\
    <img src="styles/legend/BDLR_IMG_01_1_35.png" /> IMG_8997<br />\
    <img src="styles/legend/BDLR_IMG_01_1_36.png" /> IMG_8999<br />\
    <img src="styles/legend/BDLR_IMG_01_1_37.png" /> IMG_9001<br />\
    <img src="styles/legend/BDLR_IMG_01_1_38.png" /> IMG_9004<br />\
    <img src="styles/legend/BDLR_IMG_01_1_39.png" /> IMG_9007<br />\
    <img src="styles/legend/BDLR_IMG_01_1_40.png" /> IMG_9008<br />\
    <img src="styles/legend/BDLR_IMG_01_1_41.png" /> IMG_9010<br />\
    <img src="styles/legend/BDLR_IMG_01_1_42.png" /> IMG_9011<br />\
    <img src="styles/legend/BDLR_IMG_01_1_43.png" /> IMG_9012<br />\
    <img src="styles/legend/BDLR_IMG_01_1_44.png" /> IMG_9013<br />\
    <img src="styles/legend/BDLR_IMG_01_1_45.png" /> IMG_9014<br />\
    <img src="styles/legend/BDLR_IMG_01_1_46.png" /> IMG_9017<br />\
    <img src="styles/legend/BDLR_IMG_01_1_47.png" /> IMG_9018<br />\
    <img src="styles/legend/BDLR_IMG_01_1_48.png" /> IMG_9020<br />\
    <img src="styles/legend/BDLR_IMG_01_1_49.png" /> IMG_9021<br />\
    <img src="styles/legend/BDLR_IMG_01_1_50.png" /> IMG_9022<br />\
    <img src="styles/legend/BDLR_IMG_01_1_51.png" /> IMG_9025<br />\
    <img src="styles/legend/BDLR_IMG_01_1_52.png" /> IMG_9026<br />\
    <img src="styles/legend/BDLR_IMG_01_1_53.png" /> IMG_9027<br />\
    <img src="styles/legend/BDLR_IMG_01_1_54.png" /> IMG_9028<br />\
    <img src="styles/legend/BDLR_IMG_01_1_55.png" /> IMG_9030<br />\
    <img src="styles/legend/BDLR_IMG_01_1_56.png" /> IMG_9031<br />\
    <img src="styles/legend/BDLR_IMG_01_1_57.png" /> IMG_9032<br />\
    <img src="styles/legend/BDLR_IMG_01_1_58.png" /> IMG_9033<br />\
    <img src="styles/legend/BDLR_IMG_01_1_59.png" /> IMG_9036<br />\
    <img src="styles/legend/BDLR_IMG_01_1_60.png" /> IMG_9038<br />\
    <img src="styles/legend/BDLR_IMG_01_1_61.png" /> IMG_9041<br />\
    <img src="styles/legend/BDLR_IMG_01_1_62.png" /> IMG_9042<br />\
    <img src="styles/legend/BDLR_IMG_01_1_63.png" /> IMG_9044<br />\
    <img src="styles/legend/BDLR_IMG_01_1_64.png" /> IMG_9045<br />\
    <img src="styles/legend/BDLR_IMG_01_1_65.png" /> IMG_9046<br />\
    <img src="styles/legend/BDLR_IMG_01_1_66.png" /> IMG_9048<br />\
    <img src="styles/legend/BDLR_IMG_01_1_67.png" /> IMG_9049<br />\
    <img src="styles/legend/BDLR_IMG_01_1_68.png" /> IMG_9050<br />\
    <img src="styles/legend/BDLR_IMG_01_1_69.png" /> IMG_9053<br />\
    <img src="styles/legend/BDLR_IMG_01_1_70.png" /> IMG_9055<br />\
    <img src="styles/legend/BDLR_IMG_01_1_71.png" /> IMG_9057<br />\
    <img src="styles/legend/BDLR_IMG_01_1_72.png" /> IMG_9060<br />\
    <img src="styles/legend/BDLR_IMG_01_1_73.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BDLR_IMG_01_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BDLR_IMG_01_1];
lyr_BDLR_IMG_01_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'photo': 'photo', });
lyr_BDLR_IMG_01_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'photo': 'ExternalResource', });
lyr_BDLR_IMG_01_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'photo': 'no label', });
lyr_BDLR_IMG_01_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});