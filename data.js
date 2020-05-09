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
    fontSize:"11"
};
var barColor =["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]

var options ={
    //竖型柱形图
    bar: {
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
    },
    // 横向柱形图
    barY: {
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
    }
    
}
