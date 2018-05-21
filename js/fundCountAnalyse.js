//hcharts  颜色
var _colors = ['#5571ee','#39b54a','#f07023','#2ec7c9','#e46d71','#ffb980','#f07023','#2ec7c9','#e46d71','#ffb980'];

//一行1列柱状图
Highcharts.chart('chart-container-1-1',{
		chart: {
				type: 'column'
		},
		title: {
				text: null
		},
		credits:{enabled:false},
		subtitle: {
				text: null
		},
		exporting:{enabled:false},
		xAxis: {
				categories: [
						'项目一','项目二','项目三','项目四','项目五','项目六'
				],
				crosshair: true
		},
		yAxis: {
				min: 0,
				title: {
						text: '资金 (元)'
				}
		},
		legend:{enabled:false},
		tooltip: {
				// head + 每个 point + footer 拼接成完整的 table			
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
		},
		plotOptions: {
				column: {
					pointWidth:30,
					borderWidth: 0
				},
		},
		series: [{
				name: '东京',
				data: [
						{y:49.9,color:_colors[0]},
						{y:65.4,color:_colors[1]},
						{y:64.0,color:_colors[2]},
						{y:23.5,color:_colors[3]},
						{y:64.5,color:_colors[4]},
						{y:36.8,color:_colors[5]}
				]
		}]
});


//一行2列 饼图

Highcharts.chart('chart-container-1-2', {
		chart: {
				spacing : [40, 0 , 40, 0]
		},
		title: {
				floating:true,
				text: null
		},
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
//		legend: {  //图例
//				layout: 'vertical',
//				borderRadius: '0',
//				maxHeight: 400,
//				padding: 0,
//				itemMarginTop: 10,
//				x:40,
//				useHTML: true,
//				squareSymbol: true,
//				align: 'left',
//				verticalAlign:'middle',
//				navigation:true,
//				rtl: false,
//				symbolHeight: 10,
//				symbolWidth: 10,
//				symbolRadius: 10
//		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
//						showInLegend: true,  //默认false隐藏图例
						cursor: 'pointer',
						dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
										color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
						},
				}
		},
		colors:_colors,
		series: [{
				type: 'pie',
				innerSize: '80%',
				name: '市场份额',
				data: [
						{name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
						['IE',       26.8],
						{
								name: 'Chrome',
								y: 12.8
						},
						['Safari',    8.5],
						['Opera',     6.2],
						['其他',   0.7]
				]
		}]
});

//二行1列柱状图
Highcharts.chart('chart-container-2-1',{
		chart: {
				type: 'column'
		},
		title: {
				text: null
		},
		credits:{enabled:false},
		subtitle: {
				text: null
		},
		exporting:{enabled:false},
		xAxis: {
				categories: [
						'项目一','项目二','项目三','项目四','项目五','项目六'
				],
				crosshair: true
		},
		yAxis: {
				min: 0,
				title: {
						text: '资金 (元)'
				}
		},
		legend:{enabled:false},
		tooltip: {
				// head + 每个 point + footer 拼接成完整的 table			
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
		},
		plotOptions: {
				column: {
					pointWidth:30,
					borderWidth: 0
				},
		},
		series: [{
				name: '东京',
				data: [
						{y:49.9,color:_colors[0]},
						{y:65.4,color:_colors[1]},
						{y:64.0,color:_colors[2]},
						{y:23.5,color:_colors[3]},
						{y:64.5,color:_colors[4]},
						{y:36.8,color:_colors[5]}
				]
		}]
});

//二行2列 饼图

Highcharts.chart('chart-container-2-2', {
				chart: {
				spacing : [40, 0 , 40, 0]
		},
		title: {
				floating:true,
				text: null
		},
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		colors:_colors,
//		legend: {  //图例
//				layout: 'vertical',
//				borderRadius: '0',
//				maxHeight: 400,
//				padding: 0,
//				itemMarginTop: 10,
//				x:40,
//				useHTML: true,
//				squareSymbol: true,
//				align: 'left',
//				verticalAlign:'middle',
//				navigation:true,
//				rtl: false,
//				symbolHeight: 10,
//				symbolWidth: 10,
//				symbolRadius: 10
//		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
//						showInLegend: true, //默认false隐藏图例
						cursor: 'pointer',
						dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
										color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
						},
				}
		},
		series: [{
				type: 'pie',
				innerSize: '80%',
				name: '市场份额',
				data: [
						{name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
						['IE',       26.8],
						{
								name: 'Chrome',
								y: 12.8
						},
						['Safari',    8.5],
						['Opera',     6.2],
						['其他',   0.7]
				]
		}]
});


//三行1列柱状图
Highcharts.chart('chart-container-3-1',{
		chart: {
				type: 'column'
		},
		title: {
				text: null
		},
		credits:{enabled:false},
		subtitle: {
				text: null
		},
		exporting:{enabled:false},
		xAxis: {
				categories: [
						'项目一','项目二','项目三','项目四','项目五','项目六'
				],
				crosshair: true
		},
		yAxis: {
				min: 0,
				title: {
						text: '资金 (元)'
				}
		},
		
		legend:{enabled:false},
		tooltip: {
				// head + 每个 point + footer 拼接成完整的 table			
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
		},
		plotOptions: {
				column: {
					pointWidth:30,
					borderWidth: 0
				},
		},
		series: [{
				name: '东京',
				data: [
						{y:49.9,color:_colors[0]},
						{y:65.4,color:_colors[1]},
						{y:64.0,color:_colors[2]},
						{y:23.5,color:_colors[3]},
						{y:64.5,color:_colors[4]},
						{y:36.8,color:_colors[5]}
				]
		}]
});


//三行2列 饼图

Highcharts.chart('chart-container-3-2', {
				chart: {
				spacing : [40, 0 , 40, 0]
		},
		title: {
				floating:true,
				text: null
		},
		colors:_colors,
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		legend: {  //图例
				layout: 'vertical',
				borderRadius: '0',
				maxHeight: 400,
				padding: 0,
				itemMarginTop: 10,
				x:40,
				useHTML: true,
				squareSymbol: true,
				align: 'left',
				verticalAlign:'middle',
				navigation:true,
				rtl: false,
				symbolHeight: 10,
				symbolWidth: 10,
				symbolRadius: 10
		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
						showInLegend: true,
						cursor: 'pointer',
						dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
										color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
						},
				}
		},
		series: [{
				type: 'pie',
//				innerSize: '80%',
				name: '市场份额',
				data: [
						{name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
						['IE',       26.8],
						{
								name: 'Chrome',
								y: 12.8
						},
						['Safari',    8.5],
						['Opera',     6.2],
						['其他',   0.7]
				]
		}]
});


//四行1列柱状图
Highcharts.chart('chart-container-4-1',{
		chart: {
				type: 'column'
		},
		title: {
				text: null
		},
		credits:{enabled:false},
		subtitle: {
				text: null
		},
		exporting:{enabled:false},
		xAxis: {
				categories: [
						'项目一','项目二','项目三','项目四','项目五','项目六'
				],
				crosshair: true
		},
		yAxis: {
				min: 0,
				title: {
						text: '资金 (元)'
				}
		},
		legend:{enabled:false},
		tooltip: {
				// head + 每个 point + footer 拼接成完整的 table			
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
		},
		plotOptions: {
				column: {
					pointWidth:30,
					borderWidth: 0
				},
		},
		series: [{
				name: '东京',
				data: [
						{y:49.9,color:_colors[0]},
						{y:65.4,color:_colors[1]},
						{y:64.0,color:_colors[2]},
						{y:23.5,color:_colors[3]},
						{y:64.5,color:_colors[4]},
						{y:36.8,color:_colors[5]}
				]
		}]
});


//四行2列 饼图

Highcharts.chart('chart-container-4-2', {
				chart: {
				spacing : [40, 0 , 40, 0]
		},
		title: {
				floating:true,
				text: null
		},
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		colors:_colors,
		legend: {  //图例
				layout: 'vertical',
				borderRadius: '0',
				maxHeight: 400,
				padding: 0,
				itemMarginTop: 10,
				x:40,
				useHTML: true,
				squareSymbol: true,
				align: 'left',
				verticalAlign:'middle',
				navigation:true,
				rtl: false,
				symbolHeight: 10,
				symbolWidth: 10,
				symbolRadius: 10
		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
						showInLegend: true,
						cursor: 'pointer',
						dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
										color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
						},
				}
		},
		series: [{
				type: 'pie',
//				innerSize: '80%',   //默认为饼图 设置后变为环形图
				name: '市场份额',
				data: [
						{name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
						['IE',       26.8],
						{
								name: 'Chrome',
								y: 12.8
						},
						['Safari',    8.5],
						['Opera',     6.2],
						['其他',   0.7]
				]
		}]
});




