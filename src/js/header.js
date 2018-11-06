       $(".myyiguo").mouseenter(function(){
			$(this).addClass("current");
		})
			
 			$(".myyiguo").mouseleave(function(){
		$(this).removeClass("current")
			})
			
			
	    $(".mobile").mouseenter(function(){
				$(this).addClass("current");
			})
				
		$(".mobile").mouseleave(function(){
			$(this).removeClass("current")
				})
				/*鼠标划过城市*/
				$(".city-name").mouseenter(function(){
					$(this).css({'background':'#007F4D','color':'#fff'}).children("s").css({
	  	'background-position':' -25px 0px',"-webkit-transform":"rotate(180deg)" });
		$(this).parent().siblings().css({
	 		display:"block",
	 	})
				})
				
// 		$(".city-name").mouseleave(function(){
// 							$(this).css({'color':"#008842",
// 				background:"none"}).children("s").css({
// 				'background-position':'0px 0px',"-webkit-transform":"rotate(0deg)"
// });
// 				$(this).parent().next(".city-con").css({
// 					display:"none",
// 				})
// 						})
// 			/*鼠标离开城市*/
 			$(".city-con").mouseleave(function(){
 			$(this).css({
 				display:"none",
 			}).prev().children("a").css({
 				color:"#008842",
 				background:"none"
 			}).children("s").css({
	  	'background-position':'0px 0px',"-webkit-transform":"rotate(0deg)"});
 			})
				
				/*购物车划入*/
				$(".shopping-btn").mouseenter(function(){
					$(this).siblings().show("slow")})
					/*购物车划出*/
			$(".shopping-list").mouseleave(function(){
				$(this).hide(2500);
			})
			
			/*搜索框聚焦样式*/
			$("#keyword").focus(function(){
				$(this).css({'background':'#fff'}).val("")
			})
			/*搜索框失焦*/
// 			$("#keyword").blur(function(){
// 				if($("keyword").val()!= ""){
// 					$(this).val() = val();}
// 					 else{
// 				$(this).css({'background':'none'}).val("输入商品名/编号/拼音")} }
// 				
// 			)
			$("#keyword").blur(function(){
				$(this).css({'background':'none'}).val("输入商品名/编号/拼音")
			})
			
			
			/*亚马逊菜单*/
// 			$("h3").mouseenter(function(){
// 				$(this).children('a').css({'left':"10px"})
// 			})
// $(".catalogs-title").click(function(){
// 	$(this).next(".catalogs-list").css({"display":'block'})
// })

$(".catalogs-title").click(function(){
	$(this).next(".catalogs-list").slideToggle();
})

$('.item').mouseenter(function(){
	$(this).addClass("current");
})
$('.item').mouseleave(function(){
	$(this).removeClass("current");
})

/*banner图*/
class Slider{
	constructor(id) {
	    //获取大盒子
		this.bigBox = document.getElementById(id);
		//获取所有的大图
		this.ullis = this.bigBox.firstElementChild.children;
		//大图数量
		this.num = this.ullis.length;
		//圆点
		this.ollis = this.createEle();
		//当前下标 
		this.indexA = 0;
		//获取左按钮
		this.ltBtn = $id('ltBtn');
		//获取右按钮
		this.rtBtn = $id('rtBtn');
		//文字信息
		this.div = $id('msg');
		this.slide();
		this.addEvent();
		//计时器
		this.timer = null;
		this.autoPlay();
	}
	//创建元素
	createEle(){
		//左按钮
		var leftSpan = $create('span');
		leftSpan.id = 'ltBtn';
		leftSpan.innerHTML = '&lt;';
		this.bigBox.appendChild(leftSpan);
		
		//右按钮
		var rightSpan = $create('span');
		rightSpan.id = 'rtBtn';
		rightSpan.innerHTML = '&gt;';
		this.bigBox.appendChild(rightSpan);
		
		//小圆点
		var ol = $create('ol');
		var arr = [];
		for(var i = 0;i < this.num;i ++){
			var li = $create('li');
			ol.appendChild(li);
			arr.push(li);
		}
		this.bigBox.appendChild(ol);
		//文字信息
		/*let div = $create('div');
		div.id = 'msg';
		this.bigBox.appendChild(div);*/
		
		return arr;
		
	}
	slide(){
		for(let i = 0;i < this.num;i ++){
			//大图
			this.ullis[i].style.display = 'none';
			//圆点
			this.ollis[i].style.background = '#b5b2a8';
		}
		//当前大图
		this.ullis[this.indexA].style.display = 'block';
		//当前圆点
		this.ollis[this.indexA].style.backgroundColor = '#5aaa16';
	}
	addEvent(){
		this.ltBtn.onclick = ()=>{
			this.indexA --;
			if(this.indexA == -1){
				this.indexA = this.num - 1;
			}
			this.slide();
		}
		this.rtBtn.onclick = ()=>{
			this.indexA ++;
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slide();
		}
		for(let i = 0;i < this.num;i ++){
			this.ollis[i].onmouseenter = ()=>{
				this.indexA = i;
				this.slide();
			}
		}
	}
	autoPlay(){
		this.timer = setInterval(()=>{
			this.indexA ++;
			if(this.indexA == this.num){
				this.indexA = 0;
			}
			this.slide();
		},8000)
		this.bigBox.onmouseenter = ()=>{
			clearInterval(this.timer);
		}
		this.bigBox.onmouseleave = ()=>{
			this.autoPlay();
		}
	}
}


//工具箱
function $id(id){
	return document.getElementById(id);
}
function $create(tagName){
	return document.createElement(tagName);
}

/**/
$(window).scroll(function(){
     	if($(window).scrollTop() > $("#header-nav").offset().top){
			// console.log(1);
     		// $(".header_fixed").slideDown(200) 
			$("#header").addClass("header_fixed");
     	}else{
     		$("#header").removeClass("header_fixed");
        }
    })
	
	
	/*楼层导航*/
	$("#LoutiNav ul li").not(".last").hover(function() {
				//鼠标滑上去
				$(this).addClass("hover");
			}, function() {
				//鼠标移开
				$(this).removeClass("hover");
			});
			 //鼠标点击
			var mark = 1;
			$("#LoutiNav ul li").not(".last").click(function() {
				mark = 2; //改变标记
				$("#LoutiNav ul li").find("span").removeClass("active");
				$(this).find("span").addClass("active");
				//点击左边导航 然后跳到指定的楼层
				var $index = $(this).index(); //找到了对应的序列号
				// alert($index);
				var $top = $("#floor .margin .Louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
				// alert($top);
				$("body,html").animate({
					scrollTop: $top
				}, 500, function() {
					mark = 1;
				}); //浏览器滚动的高度
			});
			 //浏览器窗口滚动事件
			$(window).scroll(function() {
				if (mark == 1) {
					var $t = $(this).scrollTop(); //获取滚动条滚动的高度
					//document.title = $t;
					if ($t > 1000) { //通过滚动条来判断
					$("#LoutiNav").fadeIn();//淡入 导航慢慢显示出来
					$("#gotop").fadeIn();
				} else {
					$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
					$("#gotop").fadeOut();
				}
					var $obj = $("#floor .margin .Louti");
					//循环每一个Louti 然后找到最先满足条件的那个 Louti
					$obj.each(function() {
						var $index = $(this).index();
						//楼层与浏览器上面的高度
						var $height = $obj.eq($index).offset().top + $(this).height() / 2;
						//alert($height) 
						//document.title = $t + "--" + $height;
						if ($t < $height) {
							$("#LoutiNav ul li").find("span").removeClass("active")
							$("#LoutiNav ul li").eq($index).find("span").addClass("active");
							return false;
						}
					});
				}
			});
			 //点击 Top按钮 跳转到浏览器顶部
			/*$("#LoutiNav ul li.last").click(function() {
				$("body,html").animate({
					scrollTop: 0
				}, 0, function() {
					mark = 1;
				});
			});*/
			$("#gotop").click(function() {
				$("body,html").animate({
					scrollTop: 0
				}, 0, function() {
					mark = 1;
				});
			});
			
		/*登陆*/	
			$(function(){
				
				var str = $.cookie("loginedUsers") ? $.cookie("loginedUsers") : "";
				if(str){
					var obj = convertStrToObj(str);
					$("#fr").prepend($('<li>欢迎您！' + str + '<a href="javascript:;" id="logout">&nbsp;注销</a></li>'))
				}else{
					var str1 = $('<li>你好，请登录！<a href="javascript:;" id="register">免费注册</a></li>');
					$("#fr").prepend(str1);

				}
				$("#register").click(function(){
					location.href = "register.html";
				})
				$("#logout").click(function(){
					$(this).parent().remove();
					$.removeCookie("loginedUsers",{expires : 7,path:"/"});
					location.href = "login.html";
				})	
			})
			function convertStrToObj(str){
				if(!str){
					return {};
				}
				var users = str.split(":");
				var obj = {};
				for(var i = 0; i < users.length; i ++){
					var data = users[i].split(",");
					obj[data[0]] = data[1];
				}
				return obj;
			}
			function convertObjToStr(obj){
				var str = "";
				for(var usn in obj){
					var pwd = obj[usn];
					if(str){
						str += ":";
					}
					str += usn + "," + pwd;
				}
				return str;
			}
			
			/*地址选择区*/
				/*鼠标划入*/
							$(".city-tit").mouseenter(function(){
								$(this).siblings(".city-con").addClass("current");
								})
			/*ABCDtab键*/
			 $(".citytab").children("span").mouseenter(function(){
				 	$(".citytab").children("span").removeClass("active").eq($(this).index()).addClass("active")
				    .end().parent().siblings(".citylist").removeClass("active").eq($(this).index()).addClass("active")
				 })