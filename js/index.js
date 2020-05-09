function getTime(){
  var date = new Date();
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  var h = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
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

  window.addEventListener("resize", function(){
    for(var i = 0; i < chartRefStorage.length; i++ ){ 
      chartRefStorage[i].resize();
    }
  },false)
}
