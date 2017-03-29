$(document).ready(function(){
	$(".burger-nav").on("click", function(){
		$("nav ul").toggleClass("open");
	});

	$("nav ul li a").click(function(){
    	$("nav ul").toggleClass("open");
	});
});


