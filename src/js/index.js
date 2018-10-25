define(function(){
	
var name = "张三";
var age = 18;
var sex = "男";
return{
	index1:function shw(){
	console.log("姓名：" + name + ",年龄" + age + ",性别" + sex);
}
// function fnRand(min,max){
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// 	console.log('haha');
// 	console.log('haha');
// }
}
})

// define(function(){
// 	var num = 3;
// 	function fn(){
// 		return num;
// 	}
// 	//对外所留的访问接口
// 	return {
// 		num : num,
// 		fn : fn
// 	}
// })