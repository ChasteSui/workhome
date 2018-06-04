

var one = new testObj({
	el:'ss',
	name:'dd',
	age:'fff'
});

var two = new testObj({
	el:'第二个',
	name:'嗯行',
	age:'凑合吧'
});



function testObj(obj){
	this.el = obj.el;
	this.name = obj.name;
	this.age = obj.age;
	
	this.initTest = function(res){
		alert(res);
	}
	
}


one.initTest("你好");

two.initTest("您吃了么?");
