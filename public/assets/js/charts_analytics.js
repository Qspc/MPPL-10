!function(o){function r(a){if(e[a])return e[a].exports;var l=e[a]={i:a,l:!1,exports:{}};return o[a].call(l.exports,l,l.exports,r),l.l=!0,l.exports}var e={};r.m=o,r.c=e,r.d=function(o,e,a){r.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:a})},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},r.p="",r(r.s=15)}({15:function(o,r,e){o.exports=e(16)},16:function(o,r){$(".analytics-mini-chart").each(function(o,r){for(var e=r.getContext("2d"),a=[],l=6;l>=0;l--)a.push(getRandomInt(150,200));new Chart(e,{type:"line",data:{labels:["01","02","03","04","05","06"],datasets:[{label:"Sales",data:a,borderWidth:2,borderColor:colors.color_primary,backgroundColor:colors.color_bg,pointBackgroundColor:colors.color_primary}]},options:{elements:{point:{radius:0}},maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},tooltips:{enabled:!1},scales:{yAxes:[{gridLines:{display:!1,zeroLineColor:colors.border_color,drawBorder:!1},ticks:{display:!1}}],xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1}}]}}})}),new Morris.Donut({element:"morris-doughnut-chart",data:[{label:"USA",value:16890},{label:"U.K",value:12037},{label:"Germany",value:9890},{label:"France",value:6725},{label:"Australia",value:3821},{label:"China",value:1892}],resize:!0,colors:[colors.color_primary,colors.color_blue,colors.color_warning,colors.facebook,colors.color_bg,colors.color_danger]}),new Chart($("#visitors-bar-chart")[0].getContext("2d"),{type:"bar",data:{datasets:[{label:"Visitors",data:[16890,12037,9890,6725,3821,1892],borderColor:colors.color_primary,backgroundColor:"rgba(55, 131, 181, .55)"},{label:"Target",data:[15e3,12500,1e4,5e3,2500,1e3],type:"line",borderColor:colors.color_danger,backgroundColor:"rgba(255, 112, 118, .45)"}],labels:["USA","U.K","Germany","France","Australia","China"]},options:{maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}}}}),new Chart($("#analytics-chart")[0].getContext("2d"),{type:"line",data:{labels:["01","02","03","04","05","06","07","08","09","10","11","12","13"],datasets:[{label:"Sales",data:[2e3,1e3,2e3,4e3,5e3,6e3,8e3,4e3,5e3,6e3,2e3,3e3,4e3],borderWidth:2,borderColor:colors.color_primary,backgroundColor:colors.color_bg,pointBackgroundColor:colors.color_primary}]},options:{maintainAspectRatio:!1,legend:{display:!1,labels:{display:!1}},tooltips:{mode:"index",callbacks:{footer:function(o,r){var e=0;return o.forEach(function(o){e+=r.datasets[o.datasetIndex].data[o.index]}),"Sum: "+e}},footerFontStyle:"normal"},scales:{yAxes:[{stacked:!0,gridLines:{color:colors.border_color,zeroLineColor:colors.border_color,borderDash:[8,4]},ticks:{callback:function(o,r,e){return parseInt(o)>=1e3?"$"+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"$"+o}}}],xAxes:[{gridLines:{display:!1},border:{display:!0,color:colors.border_color},ticks:{beginAtZero:!0}}]}}})}});