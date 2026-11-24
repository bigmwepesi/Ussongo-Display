var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ussongo_cleaned_1 = new ol.format.GeoJSON();
var features_ussongo_cleaned_1 = format_ussongo_cleaned_1.readFeatures(json_ussongo_cleaned_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ussongo_cleaned_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ussongo_cleaned_1.addFeatures(features_ussongo_cleaned_1);
var lyr_ussongo_cleaned_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ussongo_cleaned_1, 
                style: style_ussongo_cleaned_1,
                popuplayertitle: 'ussongo_cleaned',
                interactive: true,
                title: '<img src="styles/legend/ussongo_cleaned_1.png" /> ussongo_cleaned'
            });

var vectorTileUrl_Dissallowedussongo_cleaned_2 = 'layers/Dissallowedussongo_cleaned_2-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Dissallowedussongo_cleaned_2 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_Dissallowedussongo_cleaned_2,
    attributions: ' '
});
var lyr_Dissallowedussongo_cleaned_2 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Dissallowedussongo_cleaned_2,
    sourceType: 'pbf',
    popuplayertitle: 'Dissallowed — ussongo_cleaned',
    extent: ol.proj.transformExtent([3725462.212551902, -480758.98858370475, 3728081.3197812787, -475214.9905209247], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Dissallowedussongo_cleaned_2,
    title: '<img src="styles/legend/Dissallowedussongo_cleaned_2.png" /> Dissallowed — ussongo_cleaned'
});

var format_MpangowaMatumiziyaArdhi_3 = new ol.format.GeoJSON();
var features_MpangowaMatumiziyaArdhi_3 = format_MpangowaMatumiziyaArdhi_3.readFeatures(json_MpangowaMatumiziyaArdhi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MpangowaMatumiziyaArdhi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MpangowaMatumiziyaArdhi_3.addFeatures(features_MpangowaMatumiziyaArdhi_3);
var lyr_MpangowaMatumiziyaArdhi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MpangowaMatumiziyaArdhi_3, 
                style: style_MpangowaMatumiziyaArdhi_3,
                popuplayertitle: 'Mpango wa Matumizi ya Ardhi',
                interactive: true,
                title: '<img src="styles/legend/MpangowaMatumiziyaArdhi_3.png" /> Mpango wa Matumizi ya Ardhi'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ussongo_cleaned_1.setVisible(true);lyr_Dissallowedussongo_cleaned_2.setVisible(true);lyr_MpangowaMatumiziyaArdhi_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ussongo_cleaned_1,lyr_Dissallowedussongo_cleaned_2,lyr_MpangowaMatumiziyaArdhi_3];
lyr_ussongo_cleaned_1.set('fieldAliases', {'fid': 'fid', 'PID': 'PID', 'CLAIM_NO': 'CLAIM_NO', 'DATE_': 'DATE_', 'PARAS': 'PARAS', 'VILLAGE': 'VILLAGE', 'HAMLET': 'HAMLET', 'PARTIES': 'PARTIES', 'Kitongoji': 'Kitongoji', 'Matumizi_y': 'Matumizi_y', 'Umiliki': 'Umiliki', 'Topolijia': 'Topolijia', 'Majira_ya_': 'Majira_ya_', 'Shahidi_wa': 'Shahidi_wa', 'Kaskazini': 'Kaskazini', 'Kusini': 'Kusini', 'Magharibi': 'Magharibi', 'Wenza': 'Wenza', 'Watoto': 'Watoto', 'Wengineo': 'Wengineo', 'Mashariki': 'Mashariki', 'Haki_ya_Nj': 'Haki_ya_Nj', 'Kijiji': 'Kijiji', 'Shahidi__1': 'Shahidi__1', 'Toa_maoni_': 'Toa_maoni_', 'Allowed': 'Allowed', 'layer': 'layer', 'path': 'path', });
lyr_Dissallowedussongo_cleaned_2.set('fieldAliases', {'fid': 'fid', 'PID': 'PID', 'CLAIM_NO': 'CLAIM_NO', 'DATE_': 'DATE_', 'PARAS': 'PARAS', 'VILLAGE': 'VILLAGE', 'HAMLET': 'HAMLET', 'PARTIES': 'PARTIES', 'Kitongoji': 'Kitongoji', 'Matumizi_y': 'Matumizi_y', 'Umiliki': 'Umiliki', 'Topolijia': 'Topolijia', 'Majira_ya_': 'Majira_ya_', 'Shahidi_wa': 'Shahidi_wa', 'Kaskazini': 'Kaskazini', 'Kusini': 'Kusini', 'Magharibi': 'Magharibi', 'Wenza': 'Wenza', 'Watoto': 'Watoto', 'Wengineo': 'Wengineo', 'Mashariki': 'Mashariki', 'Haki_ya_Nj': 'Haki_ya_Nj', 'Kijiji': 'Kijiji', 'Shahidi__1': 'Shahidi__1', 'Toa_maoni_': 'Toa_maoni_', 'Allowed': 'Allowed', 'layer': 'layer', 'path': 'path', });
lyr_MpangowaMatumiziyaArdhi_3.set('fieldAliases', {'Id': 'Id', 'Tumizi': 'Tumizi', 'ukubwa': 'ukubwa', 'F_': 'F_', });
lyr_ussongo_cleaned_1.set('fieldImages', {'fid': 'TextEdit', 'PID': 'TextEdit', 'CLAIM_NO': 'TextEdit', 'DATE_': 'TextEdit', 'PARAS': 'TextEdit', 'VILLAGE': 'TextEdit', 'HAMLET': 'TextEdit', 'PARTIES': 'TextEdit', 'Kitongoji': 'TextEdit', 'Matumizi_y': 'TextEdit', 'Umiliki': 'TextEdit', 'Topolijia': 'TextEdit', 'Majira_ya_': 'TextEdit', 'Shahidi_wa': 'TextEdit', 'Kaskazini': 'TextEdit', 'Kusini': 'TextEdit', 'Magharibi': 'TextEdit', 'Wenza': 'TextEdit', 'Watoto': 'TextEdit', 'Wengineo': 'TextEdit', 'Mashariki': 'TextEdit', 'Haki_ya_Nj': 'TextEdit', 'Kijiji': 'TextEdit', 'Shahidi__1': 'TextEdit', 'Toa_maoni_': 'TextEdit', 'Allowed': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Dissallowedussongo_cleaned_2.set('fieldImages', {'fid': 'TextEdit', 'PID': 'TextEdit', 'CLAIM_NO': 'TextEdit', 'DATE_': 'TextEdit', 'PARAS': 'TextEdit', 'VILLAGE': 'TextEdit', 'HAMLET': 'TextEdit', 'PARTIES': 'TextEdit', 'Kitongoji': 'TextEdit', 'Matumizi_y': 'TextEdit', 'Umiliki': 'TextEdit', 'Topolijia': 'TextEdit', 'Majira_ya_': 'TextEdit', 'Shahidi_wa': 'TextEdit', 'Kaskazini': 'TextEdit', 'Kusini': 'TextEdit', 'Magharibi': 'TextEdit', 'Wenza': 'TextEdit', 'Watoto': 'TextEdit', 'Wengineo': 'TextEdit', 'Mashariki': 'TextEdit', 'Haki_ya_Nj': 'TextEdit', 'Kijiji': 'TextEdit', 'Shahidi__1': 'TextEdit', 'Toa_maoni_': 'TextEdit', 'Allowed': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MpangowaMatumiziyaArdhi_3.set('fieldImages', {'Id': 'TextEdit', 'Tumizi': 'TextEdit', 'ukubwa': 'TextEdit', 'F_': 'TextEdit', });
lyr_ussongo_cleaned_1.set('fieldLabels', {'fid': 'no label', 'PID': 'no label', 'CLAIM_NO': 'inline label - visible with data', 'DATE_': 'no label', 'PARAS': 'no label', 'VILLAGE': 'no label', 'HAMLET': 'no label', 'PARTIES': 'no label', 'Kitongoji': 'no label', 'Matumizi_y': 'no label', 'Umiliki': 'no label', 'Topolijia': 'no label', 'Majira_ya_': 'no label', 'Shahidi_wa': 'no label', 'Kaskazini': 'no label', 'Kusini': 'no label', 'Magharibi': 'no label', 'Wenza': 'no label', 'Watoto': 'no label', 'Wengineo': 'no label', 'Mashariki': 'no label', 'Haki_ya_Nj': 'no label', 'Kijiji': 'no label', 'Shahidi__1': 'no label', 'Toa_maoni_': 'no label', 'Allowed': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Dissallowedussongo_cleaned_2.set('fieldLabels', {'fid': 'no label', 'PID': 'no label', 'CLAIM_NO': 'inline label - always visible', 'DATE_': 'no label', 'PARAS': 'no label', 'VILLAGE': 'no label', 'HAMLET': 'no label', 'PARTIES': 'no label', 'Kitongoji': 'no label', 'Matumizi_y': 'no label', 'Umiliki': 'no label', 'Topolijia': 'no label', 'Majira_ya_': 'no label', 'Shahidi_wa': 'no label', 'Kaskazini': 'no label', 'Kusini': 'no label', 'Magharibi': 'no label', 'Wenza': 'no label', 'Watoto': 'no label', 'Wengineo': 'no label', 'Mashariki': 'no label', 'Haki_ya_Nj': 'no label', 'Kijiji': 'no label', 'Shahidi__1': 'no label', 'Toa_maoni_': 'no label', 'Allowed': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MpangowaMatumiziyaArdhi_3.set('fieldLabels', {'Id': 'inline label - visible with data', 'Tumizi': 'inline label - always visible', 'ukubwa': 'inline label - visible with data', 'F_': 'inline label - visible with data', });
lyr_MpangowaMatumiziyaArdhi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});