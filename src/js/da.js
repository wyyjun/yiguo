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
				$(this).css({'background':'none'}).val("huoxie")
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

/*固定菜单栏*/
/**/


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
	 
	 
	 /*固定*/
	 $(window).scroll(function(){
	      	if($(window).scrollTop() > $("#header-nav").offset().top){
	 			 // console.log(1);
	      		// $(".header_fixed").slideDown(200) 
	 			$("#header").addClass("header_fixed");
	      	}
					else{
	      		$("#header").removeClass("header_fixed");
						// console.log(2);
	         }
	     })
			 
			 /*鼠标划入出现加入购物车按钮*/
			 
			 $(".goodInfo").mouseenter(function(){
				 $(this).children(".p_buy").css({"display":"block"});
				 
			 })
			 $(".goodInfo").mouseleave(function(){
			 	$(this).children(".p_buy").css({"display":"none"});
			 	
			 })
			 
			 $("#gotop").click(function() {
			 	$("body,html").animate({
			 		scrollTop: 0
			 	}, 0, function() {
			 		mark = 1;
			 	});
			 });
			 
			 
			 
			 /*购物车*/
			 
			 $(function(){
				//加载已有的购物车信息
				 loadCart();
				
				//给购物车按钮加一个点击事件
				$("#buy").click(function(){
					location.href = "buy.html";
				})
				//给加入购物车按钮添加点击事件
				// $(".goodInfo .addToCart").click(function(e){
					$(".goodInfo .p_buy").click(function(e){
					//获取商品的id（用来区分不同的商品）
					// var goodId = $(this).parent().attr("data-good-id");
					var goodId = $(this).parent().attr("data-good-id");
					//获取商品的名称
					// var goodName = $(this).siblings('span').eq(0).html();
					var goodName = $(this).prev().children("div").eq(0).children("a").html();
					//获取商品的价格
					 var goodPrice = parseFloat( $(this).prev().children("div").eq(1).children("span").children("strong").html() );
					
					console.log(goodPrice);
					//获取商品的图片src
					 // var goodSrc = $(this).siblings("p_img").children("a").children(".j_product_img").attr("src");
					 var goodSrc = $(this).parent().children("div").eq(0).children("a").children(".j_product_img").attr("src");

					// var goodSrc = $(".j_product_img").attr("src");
					console.log(goodSrc);
//					document.cookie = "key=value"
					//存到购物车中去，商品信息统一可以放在cookie当中
					//购物车中是否有商品？
					//购物车中是否加过同一个商品？
					//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
					/*设计以下结构的对象来处理商品信息
					 * 以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					 * {
					 * 	sp1 : {
					 * 		name : "香蕉",
					 *      price : 30,
					 *      num : 1,
					 *      src : "img/1.jpg"
					 *  },
					 * sp2 :{
					 * 	    name :"苹果",
					 *      price : 40,
					 *      num:2,
					 *      src : "img/2.jpg"
					 *  },
					 * sp3{
					 * 	    name : "梨"，
					 *      price : 50,
					 *      num : 3,
					 *      src : "img/3.jpg"
					 *  }
					 * }
					 */
					//获取cookie中的信息
					//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
					var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					//将字符串转成对象
					var cartObj = convertCartStrToObj(cartStr);
					//判断该商品是否已经在购物车中存在
					if(goodId in cartObj){
						//如果已存在，那么该商品的数量加1
						cartObj[goodId].num += 1;
					}else{
						//如果不存在，那么将新商品的信息存入
						cartObj[goodId] = {
							name : goodName,
							price : goodPrice,
							num : 1,
							src : goodSrc
						};
					}
					
					//将新的购物车信息存回cookie
					//将对象转为字符串
					cartStr = convertObjToCartStr(cartObj);
					//存入cookie
					//document.cookie = "key=value"
					$.cookie("cart",cartStr,{expires : 7,path:"/"});
					
					
					
					//做一个飞入购物车的效果
					var cloneImg = $(this).parent().children("div").eq(0).children("a").children(".j_product_img").clone().css({width:50,height:50});

					cloneImg.fly({
						start : {
							top : e.clientY,
							left : e.clientX
						},
						end :{
							top : $("#buy").offset().top,
							left : $("#buy").offset().left,
							width:0,
							height:0
						},
						autoPlay : true,
						onEnd : function(){
							$("#buy").val(function(index,v){
						//"购物车（0）"
						var pattern = /(\d+)/;
						var num = parseInt(v.match(pattern)[1]);
						return "购物车(" + (num + 1) + ")";
					});
					cloneImg.remove();
						}
					})
				})
			});
			function convertCartStrToObj(cartStr){
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr){
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i ++){
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name : data[1],
						price : parseFloat(data[2]),
						num : parseInt(data[3]),
						src : data[4]
					}
				}
				return obj;
			}
			function convertObjToCartStr(obj){
					/* {
					 * 	sp1 : {
					 * 		name : "香蕉",
						 * price : 30,
						 * num : 1,
						 * src : "img/1.jpg"
					 * },
					 * sp2 :{
						 * 	name :"苹果",
						 * price : 40,
						 * num:2,
						 * src : "img/2.jpg"
					 * },
					 * sp3{
						 * 	name : "梨"，
						 * price : 50,
						 * num : 3,
						 * src : "img/3.jpg"
					 * }
					 * }
					 */
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
					}
					return cartStr;
			}
			
			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart(){
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
					var cartObj = convertCartStrToObj(cartStr);
					//获取到购物车中所有商品的数量
					var total = 0;
					for(var id in cartObj){
						total += cartObj[id].num;
						
// 						var good = cartObj[id];
// 	var nu =good.num*good;
// 	$(nu).appendTo("#buyNumber").html();
						
					}
					$("#buy").val("购物车(" + total + ")");
			}
			
			