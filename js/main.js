
$(document).ready(function() {

    $(".home-link").click(function() {
    	var clicked = "";
    	switch($(this).prop("id")){
    		case "team-link":
    			clicked = $("#team-container");
    			break;
    		case "about-link":
    			clicked = $("#about-container");
    			break;
    		case "contact-link":
    			clicked = $("#contact-container");
    			break;
    	}
    	$("html, body").animate({
		    scrollTop: clicked.offset().top
		}, 1000);
    })

});



