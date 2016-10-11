$(document).on('scroll', function() {
   	if($(this).scrollTop() + parseInt(51) >=$('#about').position().top){
       	document.getElementById("header").className = "semi";
   	} else {
       	document.getElementById("header").className = "transparent";
   	}
})