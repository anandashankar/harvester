 FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'angulargauge',
    renderAt: 'chart-container1',
    id: 'cs-angular-gauge',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Pressure Data Monitor",
            "subcaption": "Machinedata App",
            "lowerLimit": "0",
            "upperLimit": "250",
            "numberSuffix": "bar",
            "dataStreamUrl": "datastream.php",
            "refreshInterval": "10",
            "theme": "fint"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "83,33",
                "label": "Low",
                "code": "#1aaf5d"
            }, {
                "minValue": "83,33",
                "maxValue": "166,66",
                "label": "Moderate",
                "code": "#f2c500"
            }, {
                "minValue": "166.66",
                "maxValue": "250",
                "label": "High",
                "code": "#c02d00"
            }]
        },
        "dials": {
            "dial": [{
                "id": "fd_dial",
                "value": "0",
                "showValue": "1",
                "tooltext": "pressure : $value"
            }, 
            ]
        }
    }
}
);
    fusioncharts.render();
});