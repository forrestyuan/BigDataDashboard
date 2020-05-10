// common Config
var GRID_COMMON_OPTION={
        left: '3%',
        right: '4%',
        bottom: '5%',
        top:'10%',
        containLabel: true
    
};
var AXISLABEL_COMMON_OPTION={
    color:"rgba(255,255,255,0.8)",
    fontSize:"10"
};

// 竖向柱形图返回配置
var barFunc = function(){
    return {
        color: ['#2F89CF'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: "shadow"}
        },
        grid:GRID_COMMON_OPTION,
        xAxis: [
            {
                type: 'category',
                data: ["旅游行业","教育培训","游戏行业","医疗行业","电商行业","社交行业","金融行业"],
                axisTick: {alignWithLabel: true},
                axisLabel:AXISLABEL_COMMON_OPTION,
                axisLine:{show:false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:AXISLABEL_COMMON_OPTION,
                axisLine:{
                    show:false
                },
                splitLine:{
                    lineStyle:{color:"rgba(255,255,255,.1)"}
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '50%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle:{
                    barBorderRadius:5
                }
            }
        ]
    };
}
// 横向柱形图返回配置
var barYFunc = function(){
    var barColor =["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]
    return {
        grid: GRID_COMMON_OPTION,
        xAxis: {
            show:false
        },
        yAxis: [
            {
                type: 'category',
                data: ['HTML5', 'CSS3', 'Javascript', 'Vue', 'Node', 'React'],
                inverse:true,
                axisLine:{show:false},
                axisTick:{show:false},
                axisLabel:AXISLABEL_COMMON_OPTION
            },
            {
                data: ['644', '500', '958', '740', '485', '800'],
                inverse:true,
                axisLine:{show:false},
                axisTick:{show:false},
                axisLabel:AXISLABEL_COMMON_OPTION
            }
        ],
        series: [
            {
                name: '条',
                yAxisIndex:0,
                type: 'bar',
                barCategoryGap:50,
                barWidth:10,
                itemStyle:{
                    barBorderRadius:20,
                    color:function(params){
                        return barColor[params.dataIndex]
                    }
                },
                label:{
                    show:true,
                    position:"inside",
                    fontmatter:"{c}%"
                },
                data: [70, 60, 90, 78, 58, 50]
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex:1,
                barCategoryGap:50,
                barWidth:15,
                itemStyle:{
                    barBorderRadius:20,
                    color:"none",
                    borderColor:"#00c1de",
                    borderWidth:3,
                    borderRadius:15
                },
                data: [100, 100, 100, 100, 100, 100]
            }
        ]
    };
}
// 折线图-线性返回配置
var lineChartFunc = function(){
    return {
        color:["#00f2f1","#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color:"#4c9bfd"
            },
            right:"10%",
            data: ['新增开发人员数', '退出开发人员数']
        },
        grid:{
            show:true,
            left: '3%',
            right: '4%',
            bottom: '5%',
            top:'10%',
            containLabel: true,
            borderColor:"rgba(255,255,255,.1)"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick:{show:false},
            axisLabel:AXISLABEL_COMMON_OPTION,
            axisLine:{show:false},
            data: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月','10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            axisTick:{show:false},
            axisLabel:AXISLABEL_COMMON_OPTION,
            axisLine:{show:false},
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,.1)"
                }
            },
        },
        series: [
            {
                name: '新增开发人员数',
                type: 'line',
                smooth:true,
                data: [320, 332, 301, 334, 390, 330, 320, 334, 390, 330, 320,500]
            },
            {
                name: '退出开发人员数',
                type: 'line',
                smooth:true,
                data: [820, 932, 901, 934, 1290, 1330, 1320, 350, 580, 780, 352, 990,]
            }
        ]
    }
}

// 折线图-波浪返回配置
var lineStackChartFunc = function(){
   return{
       color:["#00f2f1","#ed3f35"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            textStyle:{
                color:"#4c9bfd"
            },
            right:"10%",
            data: ['新增开发人员数', '退出开发人员数']
        },
        grid: {
            show:true,
            left: '3%',
            right: '4%',
            bottom: '5%',
            top:'10%',
            containLabel: true,
            borderColor:"rgba(255,255,255,.1)"
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                },
                axisTick:{show:false},
                axisLabel:AXISLABEL_COMMON_OPTION,
                data:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                },
                axisTick:{show:false},
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                },
                axisLabel:AXISLABEL_COMMON_OPTION,
            }
        ],
        series: [
            {
                name: '新增开发人员数',
                type: 'line',
                smooth:true,
                areaStyle: {},
                lineStyle:{width:3},
                symbol:"circle", //设置拐点
                symbolSize:8,//拐点大小
                showSymbol:false, //刚开始不显示，鼠标经过才显示
                itemStyle:{  //拐点样式
                    borderColor:"rgba(221,221,107,.1)",
                    borderWidth:12
                },
                data: [320, 332, 301, 334, 390, 330, 320, 334, 390, 330, 320,500,320, 332, 301, 334, 390, 330, 320, 334, 390, 330, 320,500, 320, 334, 390, 330, 320,500]
            },
            {
                name: '退出开发人员数',
                type: 'line',
                smooth:true,
                areaStyle: {},
                lineStyle:{width:3},
                symbol:"circle",
                symbolSize:8,
                showSymbol:false,
                itemStyle:{
                    borderColor:"rgba(221,221,107,.1)",
                    borderWidth:12
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320, 350, 580, 780, 352, 990,820, 932, 901, 934, 1290, 1330, 1320, 350, 580, 780, 352, 990, 1320, 350, 580, 780, 352, 990]
            }
           
        ]
    };
    
}

// 饼图 返回配置
var pieChartFunc = function(){
    return {
        color:["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: 5,
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:"rgba(255,255,255,.8)",
                fontSize:10
            },
            data: ['0岁以下', '20-29岁','30-39岁','40-49岁','50岁以上']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                //修改饼形图大小，第一个值内圆半径，第二个值为外圆半径
                radius: ['40%', '60%'],
                //图形的居中位置
                center:['50%','40%'],
                avoidLabelOverlap: false,
                //图形上的文字
                label: {
                    show: false,
                    position: 'center'
                },
                //链接图形和文字间的线
                labelLine:{show:false},
                //中间文字
               /*  emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }, */
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1, name: '0岁以下'},
                    {value: 4, name: '20-29岁'},
                    {value: 2, name: '30-39岁'},
                    {value: 2, name: '40-49岁'},
                    {value: 1, name: '50岁以上'}
                ]
            }
        ]
    };
    
}

//饼图 面积图 返回配置
var pieAreaChartFunc = function(){
    return {
        color:["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6","#1d9dff","#006cff","#cd8884"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:"rgba(255,255,255,.8)",
                fontSize:10
            },
            data:['广东','云南','上海','北京','重庆','浙江','内蒙古','湖南']
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%','70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label:{
                    fontSize:10
                },
                labelLine:{
                    //lenth 链接图形的线条
                    lenth:6,
                    //lenth2 链接文字的先体哦啊
                    lenth2:8
                },
                data: [
                    {value: 10, name: '广东'},
                    {value: 5, name: '云南'},
                    {value: 15, name: '上海'},
                    {value: 25, name: '北京'},
                    {value: 20, name: '重庆'},
                    {value: 35, name: '浙江'},
                    {value: 30, name: '内蒙古'},
                    {value: 40, name: '湖南'}
                ]
            }
        ]
    };    
}

//中国地图 返回配置
var chinaMapFunc = function(){
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };

    var XAData = [
        [{name:'西安'}, {name:'拉萨',value:100}],
        [{name:'西安'}, {name:'上海',value:100}],
        [{name:'西安'}, {name:'广州',value:100}],
        [{name:'西安'}, {name:'西宁',value:100}],
        [{name:'西安'}, {name:'银川',value:100}]
    ];

    var XNData = [
        [{name:'西宁'}, {name:'北京',value:100}],
        [{name:'西宁'}, {name:'上海',value:100}],
        [{name:'西宁'}, {name:'广州',value:100}],
        [{name:'西宁'}, {name:'西安',value:100}],
        [{name:'西宁'}, {name:'银川',value:100}]
    ];

    var YCData = [
        [{name:'银川'}, {name:'北京',value:100}],
        [{name:'银川'}, {name:'广州',value:100}],
        [{name:'银川'}, {name:'上海',value:100}],
        [{name:'银川'}, {name:'西安',value:100}],
        [{name:'银川'}, {name:'西宁',value:100}],
    ];
    var LSData = [
        [{name:'拉萨'}, {name:'哈尔滨',value:100}],
        [{name:'拉萨'}, {name:'深圳',value:100}],
        [{name:'拉萨'}, {name:'成都',value:100}]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {
            
        var res = [];
        for (var i = 0; i < data.length; i++) {
            
            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
           
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9', '#00ffbb'];//航线的颜色
    var series = [];
    [['西安', XAData], ['西宁', XNData], ['银川', YCData], ['拉萨', LSData]].forEach(function (item, i) {  
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red',   //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top3',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i],
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });
    return {
        // backgroundColor: '#000',
        tooltip : {
            trigger: 'item', 
            formatter:function(params, ticket, callback){
                if(params.seriesType=="effectScatter") {
                    return "线路："+params.data.name+""+params.data.value[2];
                }else if(params.seriesType=="lines"){
                    return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                }else{
                    return params.name;
                }
            } 
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['西安 Top3', '西宁 Top3', '银川 Top3','拉萨 Top3'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color:'#fff'
                }
            },
            zoom:1.2,
            roam: true,
            itemStyle: {
                normal: {
                    //修改地图身份背景颜色
                    areaColor: 'rgba(20,41,87,.8)',
                    borderColor: 'rgba(255,255,255,.3)',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };
}
var options ={
    //竖型柱形图
    bar: barFunc(),
    // 横向柱形图
    barY: barYFunc(),
    //折线图
    line: lineChartFunc(),
    //波浪折线图
    lineStack:lineStackChartFunc(),
    //饼图
    pie:pieChartFunc(),
    //饼图面积图
    pieArea:pieAreaChartFunc(),
    //中国地图
    chinaMap:chinaMapFunc()
    
    
}
