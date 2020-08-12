$(document).ready(function($) {    
	var TopFixMenu = $("#fixNav");
	var startAnimation = true
    $(window).scroll(function(){
    // Nếu cuộn xuống ta đổi vị trí của thanh menu
        if($(this).scrollTop()<200){              
            TopFixMenu.css('top', '0');
            startAnimation = true
        }
		else{
            if(startAnimation){
                TopFixMenu.animate({top: -100}, 700);
                startAnimation = false
            }
        }
    });
});
    