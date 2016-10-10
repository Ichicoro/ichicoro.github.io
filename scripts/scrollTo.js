$(document).on('scroll', function() {
   	if($(this).scrollTop()>=$('#about').position().top){
   		console.log("Past #above!");
       	document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.1)";
   	} else {
   		console.log("Above... #above!");
       	document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
   	}
})