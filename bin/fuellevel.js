  FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'angulargauge',
    renderAt: 'chart-container2',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Fuel level Monitor",
            "subcaption": "Machinedata App",
            "lowerLimit": "0",
            "upperLimit": "50",
            "numberSuffix": "lit",
            "showValue": "1",
            "valueBelowPivot": "1",
            "tickValueDistance": "5",
            "theme": "fint",
            "dataStreamUrl": "http://localhost:3000/api/harvesters/fuellevel",
            "refreshInterval": "10",
            "useMessageLog": "1",
            "showRTmenuItem": "1"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "16.66",
                "code": "#6baa01"
            }, {
                "minValue": "16.66",
                "maxValue": "33.33",
                "code": "#f8bd19"
            }, {
                "minValue": "33.33",
                "maxValue": "50",
                "code": "#e44a00"
            }]
        },
         "dials": {
            "dial": [{
                "id": "fd_dial",
                "value": "10",
                "tooltext": "fuellevel : $value"
            },
            ]
        }
    }
}
);
    fusioncharts.render();
});
