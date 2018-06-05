/*表单验证*/
'use strict'

//基本类型和Array数组  放到Vf对象中
var Vf = function ValidForm(setting) {

	//console.log(typeof setting);判断传入的参数是否是对象
	//获取设置信息
	if(setting.constructor == Object) {

		if(!setting.el) return false;

		//console.log("还执行吗");

		var tar_ele = document.getElementById(setting.el);
		if(tar_ele == null) {
			console.error("id: " + setting.el + " is null");
			return false;
		}

		
		tar_ele.classList.add('bind-style');

	}

	//构造函数私有方法
	function privateFun() {
		console.log('私有方法');
	}

	//构造函数私有属性
	var _default_setting = {
		
		reg : "en "
	}
	
	/*如果需要用自定义参数,修改默认参数,方法写在构造函数中*/
	this.getPara = function (msg){
		console.log(_default_setting.reg);
	}
};

//方法放在原型中    Vf原型

Vf.prototype = {
	constructor: Vf,

	/*原型中方法
	  传入的参数不需要覆盖构造函数中的参数
	 * */
	sayHello: function() {
		console.log("我是原型中方法");
	}
};


