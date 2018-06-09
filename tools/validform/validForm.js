/*
 * 表单验证
 	$ : 构造函数中的私有变量或私有方法
 	_ : prototype原型中的属性或方法
 	无标识符的this变量或方法为构造函数暴露给外界的API或属性
 * 
 * */
'use strict';

//基本类型和Array数组  放到Vf函数中
var Vf = function ValidForm(setting) {
	var $tar_ele = null; //目标元素
	//this.sayHello();  //调用原型中的方法
	//获取设置信息
	if(setting.constructor == Object) {
		if(!setting.el) return false;
		$tar_ele = document.getElementById(setting.el);
		if($tar_ele == null) {
			console.error("id: " + setting.el + " is null");
			return false;
		}
		//将用户自定义设置更新到默认初始化设置中
		var _con;
		for(var key in setting) {
			//传值不规范 则使用默认的值
			//console.log(setting[key].constructor);
			_con = setting[key].constructor;

			if(_con != null && _con != undefined && _con === String && _con != "") {
				this._default_setting[key] = setting[key];
			}
			if(_con != null && _con != undefined && _con === Array && _con.length > 0) {
				this._default_setting[key] = setting[key];
			}
			if(_con != null && _con != undefined && _con === Object) {
				this._default_setting[key] = setting[key];
			}

		}
		$initFun(this._default_setting); //调用初始化函数
	}

	//初始化函数 不要放在原型中  避免外界直接调用
	function $initFun(user_setting) {
		//console.log(user_setting);
		//为目标元素绑定验证事件
		var eventStr = user_setting.eventType.substring(2);
		//console.log(eventStr);

		$tar_ele.addEventListener(eventStr, function() {
			var ele_val = $tar_ele.value, //验证项的值
				v_type = user_setting.validType, //用户选择的验证类型  默认require
				u_reg = user_setting.userReg; //用户自定义正则
			var isTrue = $RegTest(ele_val, v_type, u_reg);
			if(!isTrue) {
				$tar_ele.classList.add('bind-style');
			} else {
				$tar_ele.classList.remove('bind-style');
			}
		});

	}

	//支持多个默认正则 及 自定义正则
	function $RegTest(_val, _type, _userReg) {
		//console.log(_type[0]);
		var d_reg_obj = Vf.prototype._default_type;
		if(_userReg.enabled) { //true  使用用户自定义正则

			return _userReg.reg.test(_val);
		} else { //使用指定正则
			//数组可以使用indexof  匹配的是每一个元素
			var _flag = true;
			for(var tpye_key in d_reg_obj) {
				if(_type.indexOf(tpye_key) != -1) {
					var _reg = d_reg_obj[tpye_key];
					_flag = _reg.test(_val);
					if(!_flag) break; //_flag 为false表示不符合正则 则终止循环  绑定验证

				}
			}

			return _flag;

		}

	}

	//构造函数私有方法  每个实例化对象都会copy一份独立的方法  实例化对象无法调用
	function privateFun() {
		console.log('私有方法');
	}

	//通过  __proto__  获取原型中的key
	//this.__proto__.sayHello();
	/*如果需要用自定义参数,修改默认参数,方法写在构造函数中*/
	//实例化对象可以调用的方法
	this.getPara = function(msg) {
		this.name = msg;
		console.log("构造函数中的getPara    " + this.name);
	}
};
//方法放在原型中    Vf原型
Vf.prototype = {
	constructor: Vf, //指向构造函数
	__proto__: null, //指向null  防止外界通过__proto__修改原型中属性
	_default_setting: {
		//默认参数
		validType: ['require'], //校验类型  require 必填  array
		eventType: 'onblur', //事件类型  默认onblur   string   定义一个枚举类型 来判断用户输入
		userReg: {
			enabled: false,
			reg: null
		} //是否使用用户自定义正则   两个参数 1 true 使用   2 用户正则
		//warning : 0 ,  //提醒样式   0是默认样式 红框

	},
	//默认支持的验证类型
	_default_type: {
		//		"require": /\S/    //空 包括space tab等
		"require": /\S/, //空 包括space tab等
		"money": /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, //默认要两位小数
		"telephone": /^[1][3,4,5,7,8][0-9]{9}$/ //,  //手机号  11位 1开头 第二位是3,4,5,7,8
		//"email":/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/    //email

	},

	/*原型中方法
	  传入的参数不需要覆盖构造函数中的参数
	 * */
	_sayHello: function() {
		console.log("Hello 我是原型中方法");
	}

};