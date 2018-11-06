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
					 
					 
					 
					 
					 
					 /*详情tab切换*/
					 
					 $(".detail-ul").children("li").click(function(){
						$(this).addClass("active");
							 
						$(this).siblings("li").removeClass("active");	
					
					 })
					
					
					/*轮播图*/
					$(".pic-thumb").children(".picList").children("ul").children("li").mouseenter(function(){
						$(this).addClass("on");
						$(this).siblings("li").removeClass("on");
					})
					 