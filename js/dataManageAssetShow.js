var page = 1,
	row = 10,
	pageFlag = true,
	objName = "",
	tarYear = "";




getUnitTotal();
getDataTotal();
//为搜索按钮绑定点击事件
$('#search-obj-info').on('click', function() {
	tarYear = $('#tar-year').val();
	objName = $('#obj-name').val();
	getDataByAJAX();
	getUnitTotal();  //渲染单位数量和数据分类
});






var chart = Highcharts.chart('hightcharts-datas-container', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			marginLeft: 0,
			spacingLeft: 0,
			backgroundColor: 'rgba(0,0,0,0)'
		},
		title: false,
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		legend: {
			layout: 'vertical',
			borderRadius: '0',
			maxHeight: 200,
			lineHeight: 200,
			padding: 0,
			itemMarginTop: 20,
			useHTML: true,
			squareSymbol: true,
			x: 0,
			y: 0,
			align: 'left',
			rtl: false
		},
		plotOptions: {
			pie: {
				allowPointSelect: false,
				cursor: 'pointer',
				//          showInLegend: true,
				dataLabels: {
					enabled: false,
					//              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					//              style: {
					//                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					//              }
				},
				//          point: {
				//              events: {
				////                  mouseOver: function(e) {  // 鼠标滑过时动态更新标题
				////                      // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
				////                      chart.setTitle({
				////                          text: e.target.name+ '\t'+ e.target.y + ' %'
				////                      });
				////                  }
				//                  //, 
				//                  // click: function(e) { // 同样的可以在点击事件里处理
				//                  //     chart.setTitle({
				//                  //         text: e.point.name+ '\t'+ e.point.y + ' %'
				//                  //     });
				//                  // }
				//              }
				//          },
			}
		},
		series: [{
			type: 'pie',
			innerSize: '60%',
			name: '市场份额',
			data: [25, 25, 25, 25]
		}]
	}
	//, function(c) { // 图表初始化完毕后的会掉函数
	//  // 环形图圆心
	//  var centerY = c.series[0].center[1],
	//      titleHeight = parseInt(c.title.styles.fontSize);
	//  // 动态设置标题位置
	//  c.setTitle({
	//      y:centerY + titleHeight/2
	//  });
	//}
);

//通过接口请求数据   请求和渲染分成两个方法  减少请求次数  用变量保存数据
function getDataByAJAX() {
	$.ajax({
		type: "post",
		url: "/ldp-collect/dataAssets/selectObj.do",
		contentType: 'application/json',
		data: JSON.stringify({
			objname: objName, //单位名称
			year: tarYear, //选择的年度
			page: page,
			rows: row,
			sidx: "",
			sord: ""
		}),
		success: function(res) {
			if(res.code == '000000') {
				createTableByData(res);
			}
		}
	});
}

//根据数据渲染table
function createTableByData(res) {
	//翻页控件
	if(pageFlag) {
		$('.table-msg .left').html('共计' + res.data.records + '条 | ' + row + '条/页');
		Page({
			num: Math.ceil(res.data.records / row), // 页码数
			startnum: page, // 指定页码
			elem: $('#pager'), // 指定的元素
			callback: function(n) { // 回调函数
				page = n;
				createTableByMainId();
			}
		});
	}
	//表格渲染

	var _html = '';
	$.each(res.data.list, function(i, v) {
		_html += '<tr>' +
			'<td>' + (i + 1) + '</td>' +
			'<td>' + v.objName + '</td>' +
			'<td>' + v.caiwu + '</td>' +
			'<td>' + v.yewu + '</td>' +
			'<td>' + v.wendang + '</td>' +
			'<td>' + v.qita + '</td>' +
			'<td>' + v.areaName + '</td>' +
			'</tr>'
	});
	$('#table tbody').html(_html);
}



//计算单位数量数据分类
function getUnitTotal(){
	$.ajax({
		type:"post",
		url:"/ldp-collect/dataAssets/selectCount.do",
		contentType: 'application/json',
		data: JSON.stringify({
			objname: objName, //单位名称
			year: tarYear //选择的年度
		}),
		success: function(res) {
			if(res.code == '000000') {
				$("#obj-total").html(res.data.data.objcount);
				$("#finance-total").html(res.data.data.caiwu);
				$("#business-total").html(res.data.data.yewu);
				$("#document-total").html(res.data.data.wendang);
				$("#other-total").html(res.data.data.qita);
			}
		}
	});
}

//计算累计数据量
function getDataTotal(){
	$.ajax({
		type:"post",
		url:"/ldp-collect/dataAssets/selectDataAmount.do",
		contentType: 'application/json',
		data: JSON.stringify({
			year: tarYear //选择的年度
		}),
		success: function(res) {
			if(res.code == '000000') {
				$("#finance-data-total").html(byteToGB(res.data.data.caiwu));
				$("#business-data-total").html(byteToGB(res.data.data.yewu));
				$("#document-data-total").html(byteToGB(res.data.data.wendang));
				$("#other-data-total").html(byteToGB(res.data.data.qita));
				$("#data-total").html(byteToGB(res.data.data.total));
			}
		}
	});
}


//后台传回的数据量单位是bit  转换成GB

function byteToGB(bytes){
//	var targetData = null;
//	var num = 0;
//	num = parseInt(byteData,10);
//	if(num){
//		targetData = num / Math.pow(1024,3);
//		console.log("转换后的数据量,单位GB  "+targetData);
//		return targetData;
//	}
	if (bytes == 0) return '0 B';
	
	var k = 1024;
	
	sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	
	i = Math.floor(Math.log(bytes) / Math.log(k));
	
	 
	
	var num = bytes / Math.pow(k, i);
	return num.toPrecision(3) + ' ' + sizes[i];
	
	//return (bytes / Math.pow(k, i)) + ' ' + sizes[i]; 
	//toPrecision(3) 后面保留一位小数，如1.0GB //return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];

}
