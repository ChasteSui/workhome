/*
 
 * 开发过程中常用的jquery拓展方法
 * 拓展jquery有两种方式
 * */

/*第一种    
 * 
 * 使用方法:  $.funcName();
 
 * 
 * */
$.extend({
	sayHello : function(){
		alert("Hello world");
	}
});

/*第二种    
 * 绑定到JQ的DON元素上.相当于jquery自带的attr/on/css/hover等方法的使用
 * 使用方法:  $(DOM).funcName();
 
 * 
 * */

$.fn.extend({
	sayHi : function(){
		alert("HI,我是绑定到JQUERY元素上的方法");
	}
})