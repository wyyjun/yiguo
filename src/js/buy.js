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