function getTime(){
  var date = new Date();
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  var h = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  mon = mon < 10 ? '0'+mon : mon;
  day = day < 10 ? '0'+day : day;
  h = h < 10 ? '0'+h : h;
  mm = mm< 10 ? '0'+mm :mm;
  ss = ss < 10 ? '0'+ss : ss;

  return "当前时间：" + year + "年" + mon +"月" + day + "日  "+ h +":"+ mm +":"+ss; 
}
function setTime(){
  var DTB = document.querySelector("#dateTimeBox");
  setInterval(function(){
    DTB.innerHTML = getTime();
  }, 1000);
}
var getEle = function(ele){
  return document.querySelector(ele);
}

//封装异步请求(未使用)
/* function getData(url){
  var xhr = new XMLHttpRequest();
  xhr.open("get",url,true);
  xhr.onreadystatechange = function(res){
    if(xhr.readyState == 4 && xhr.status == 200){
      console.log(res.currentTarget.responseText);

    }else{
      console.log("error:status-->"+xhr.status+"; readyState--->"+xhr.readyState)
    }
  }
  xhr.send(null);
} */

window.onload = function(){
  setTime();
  var chartRefStorage = [];
  //柱状图
  (function(){
    var myChart = echarts.init(getEle(".bar"));
    myChart.setOption(options.bar);
    chartRefStorage.push(myChart);
  })();
  //柱状图
  (function(){
    var myChart = echarts.init(getEle(".bar-y"));
    myChart.setOption(options.barY);
    chartRefStorage.push(myChart);
  })();
  //折线图
  (function(){
    var myChart = echarts.init(getEle(".line"));
    myChart.setOption(options.line);
    chartRefStorage.push(myChart);
  })();
  //折线波浪图
  (function(){
    var myChart = echarts.init(getEle(".line-stack"));
    myChart.setOption(options.lineStack);
    chartRefStorage.push(myChart);
  })();
  //饼状图
  (function(){
    var myChart = echarts.init(getEle(".pie"));
    myChart.setOption(options.pie);
    chartRefStorage.push(myChart);
  })();
  //饼状图面积图
  (function(){
    var myChart = echarts.init(getEle(".pie-area"));
    myChart.setOption(options.pieArea);
    chartRefStorage.push(myChart);
  })();
  //中国地图
  (function(){
    var myChart = echarts.init(getEle(".map-china"));
    myChart.setOption(options.chinaMap);
    chartRefStorage.push(myChart);
  })();
  
  window.addEventListener("resize", function(){
    for(var i = 0; i < chartRefStorage.length; i++ ){ 
      chartRefStorage[i].resize();
    }
  },false);

  //数字缓动
  ;(function(){
    var noHd1 = document.querySelector("#noHd1");
    var noHd2 = document.querySelector("#noHd2");
    var data = {
      noHd1:'98591',
      noHd2:'68715'
    }
    var processNum = function(data){
      return [data.noHd1.split(''), data.noHd2.split('')];
    }
    var dataProcess = processNum(data);
    var setInitNumLabel = function(dataArr){
      var res = [[],[]];
      for(var i = 0; i < dataArr.length; i ++){
        var prefix = 'noHdSpan'+i;
        var ptEle = eval('noHd'+ (i+1));
        console.log(ptEle);
        for(var j = 0; j < dataArr[i].length; j++){
          ptEle.innerHTML+='<span id="'+(prefix+[j])+'">0</span>';
          res[i].push("#"+(prefix+[j]));
        }
      }
      return res;
    }
    var domELeArr = setInitNumLabel(dataProcess);
    console.log(domELeArr)
    var runNumber = function(dataArr, domArr){
        var obj={};
        for(var i = 0; i < dataArr.length; i ++){
          for(var j = 0; j < dataArr[i].length; j++){
            (function(i,j){
              var counter = 0;
              var num = +dataArr[i][j]
              var dom = document.querySelector(domArr[i][j]);
              obj[("fox"+i)+j]= setInterval(function(){
                counter ++;
                if(counter > num){
                    clearInterval(obj[("fox"+i)+j]);
                }else{
                  dom.innerHTML = counter;
                }
              },80+(j*55));
            })(i,j);
            
          }
        }
      }
      setTimeout(() => {
        runNumber(dataProcess,domELeArr);
      }, 100);
  })();
}
