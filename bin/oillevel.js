 FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'angulargauge',
    renderAt: 'chart-container3',
    id: 'cs-angular-gauge',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Oil level Monitor",
            "subcaption": "Machinedata App",
            "lowerLimit": "0",
            "upperLimit": "30",
            "numberSuffix": "lit",
            "dataStreamUrl": "http://localhost:3000/api/harvesters/oillevel",
            "refreshInterval": "10",
            "theme": "fint"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "10",
                "label": "Low",
                "code": "#1aaf5d"
            }, {
                "minValue": "10",
                "maxValue": "20",
                "label": "Moderate",
                "code": "#f2c500"
            }, {
                "minValue": "20",
                "maxValue": "30",
                "label": "High",
                "code": "#c02d00"
            }]
        },
        "dials": {
            "dial": [{
                "id": "fd_dial",
                "value": "0",
                "showValue": "1",
                "tooltext": "oillevel : $value"
            }, 
            ]
        }
    }
}
);
    fusioncharts.render();
});