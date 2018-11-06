$(function(){
	$("#PhoneReg").click(function(){
		//获取用户名和密码
		var usn = $("#Phone-Mobile").val();
		var pwd = $("#Phone-Password").val();
		var con = $("#Phone-ConfimPassword").val(); //确认密码
		var yqm = $("#Phone-AtCode").val();
		
		//用户不能为空
		if(!usn){
			alert("用户名不能为空！");
			return;
		}
		
		if(!pwd){
			alert("密码不能为空！");
			return;
		}
		
		if(pwd !== con){
			alert("两次输入的密码不相同，请重试!");
			return;
		}
		
		if(!yqm){
			alert("邀请码不能为空！");
			return;
		}
		
		//获取cookie中的用户信息
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
		
	
		
		//将字符串转为对象
		users = convertStrToObj(users);
		if(usn in users){ //判断usn属性是否在users对象中。
			alert("用户名已经被注册");
			return;
		}else{
			//注册成功，设置用户信息的cookie
			//test1 123  test2 abc  test3 888
			//"test1,123:test2,abc:test3,888"设置cookie的value值
			//registerUsers 设置cookie的name(key)值
			//将用户添加到已注册用户列表对象中
			users[usn] = pwd;
			//假设users[李涛] = 123
			
			
			//将用户信息对象转化回字符串，以便于设置cookie
			userStr = convertObjToStr(users);
			//设置用户信息cookie
			$.cookie("registerUsers",userStr,{expires:7,path:"/"});
			console.log(decodeURIComponent(document.cookie))
			alert("注册成功！");
		}
		
		
});
$(".orange").click(function(){
		//转到登录页面
		location.href = "login.html";
	});
	
})

//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
	var obj = {};
	/*
	 * var obj = new Object();
	 * obj["name"] = "zhangsan";
	 * 
	 */
	//遍历数组
	for(var i = 0; i < users.length; i ++){
		//将字符串转为数组
		var userData = users[i].split(",");
		//["test1",123] ["test2","abc"] ["test3",888]
		obj[userData[0]] = userData[1];
		/*转为对象如下：
		 * obj = {
		 * 	test1 : 123,
		 *  test2 : abc,
		 *  test3 : 888
		 * }
		 */
	}
	return obj;
}

//将对象转为字符串
function convertObjToStr(obj){
	////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}