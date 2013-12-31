$(document).ready(function(){
	var $vid = $("#video")
	$("#frame").load(function(){
		setTimeout(function(){
			$vid.fadeIn("slow").animate({
				marginLeft: "-310px",
				opacity: 1
			}, 500);
		}, 1000)
	})

})
