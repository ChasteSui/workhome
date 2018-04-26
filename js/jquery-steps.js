//用于调试动态步骤图的代码

//alert("ssss");

function test(){
	var tar_test = "加工";
	var index = 0;
	$(".judge-status").each(function(i,v){
		var txt = $(v).find("label").html();
		//alert(txt);
		if(tar_test == txt){
			index = i;
		}
		
	})
	console.log("index赋值    "+index);
	//$(".judge-status:eq(1)").addClass("finished");
	for(var i=0;i<index+1;i++){
		
		$(".judge-status:eq("+i+")").addClass("current");
		
	}
	
	
}
