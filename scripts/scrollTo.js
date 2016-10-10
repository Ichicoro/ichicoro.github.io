$(document).on('scroll', function() {
   	if($(this).scrollTop()>=$('#about').position().top){
       	document.getElementById("header").className = "semi";
   	} else {
       	document.getElementById("header").className = "transparent";
   	}
})