/* 自己封装的带模糊查询的下拉  */

(function() {
	'use strict'

	var _time = 0;//计数器
	console.log(_time++);


	var $targetInput = document.getElementById('sui-select-js');
	var $selectCon = document.getElementsByClassName('test');
	var _conDiv = document.createElement('div');
	_conDiv.setAttribute("class", "test");
	_conDiv.setAttribute("id", "test");
	var tarDiv = document.getElementById('test');
	document.onclick = function() {
		_conDiv.setAttribute("class", "hide-con");
	}
	$targetInput.addEventListener('click', function(event) {
		event.stopPropagation();
	}, false);
	$targetInput.onclick = function() {
		//alert("绑定成功了");
		_conDiv.setAttribute("class", "test");
		insertAfter(_conDiv, $targetInput);
		bindStop($selectCon);
	}

})();

//原生JS在目标元素后追加
function insertAfter(newElement, targentElement) {
	var parent = targentElement.parentNode;
	if(parent.lastChild == targentElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targentElement.nextSibling)
	}
}

//事件绑定
function bindStop(el) {
	if(el.length > 0) {
		console.log('应该是没进来');
		for(var i = 0; i < el.length; i++) {

			el[i].addEventListener('click', function(event) {
				event.stopPropagation();
			}, false);
		}
	}
}

//点击窗口以外的区域隐藏窗口
//$(document).click(function(){
//  $(".ul-con").hide();
//});
////阻止target区域冒泡到document
//$(".pos-con").click(function(event){
//  event.stopPropagation();
//});