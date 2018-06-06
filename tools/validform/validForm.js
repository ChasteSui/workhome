/*表单验证*/
'use strict'

//基本类型和Array数组  放到Vf函数中
var Vf = function ValidForm(setting) {
	
	
	var initSetting = {};//初始化参数

	//console.log(typeof setting);判断传入的参数是否是对象
	//获取设置信息
	if(setting.constructor == Object) {

		if(!setting.el) return false;


		var tar_ele = document.getElementById(setting.el);
		if(tar_ele == null) {
			console.error("id: " + setting.el + " is null");
			return false;
		}
		
		//tar_ele.classList.add('bind-style');

	}

	//构造函数私有方法  每个实例化对象都会copy一份独立的方法
	function privateFun() {
		console.log('私有方法');
	}

	//通过  __proto__  获取原型中的key
	
	//this.__proto__.sayHello();
	/*如果需要用自定义参数,修改默认参数,方法写在构造函数中*/
	this.getPara = function (msg){
		this.name = msg;
		console.log("构造函数中的getPara    "  + this.name);
	}
};
//方法放在原型中    Vf原型
Vf.prototype = {
	//将公有属性或方法,无需进行
	constructor: Vf,
	name:'我是原型中的属性',
	//构造函数私有属性
	_default_setting : {
		
		//默认参数
		//validType : ['require'],   //校验类型  require 必填  array
		//eventType ; 'onblur',  //事件类型  默认onblur   string   定义一个枚举类型 来判断用户输入
		//userReg : {enabled:false,reg:''},  //是否使用用户自定义正则   两个参数 1 true 使用   2 用户正则
		//warning : 0 ,  //提醒样式   0是默认样式 红框
		
		
		
		
		
	},
	/*原型中方法
	  传入的参数不需要覆盖构造函数中的参数
	 * */
	sayHello: function() {
		console.log("我是原型中方法");
	}
};


