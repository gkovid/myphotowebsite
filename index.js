var selected = "about_me";

$(document).ready(function() {

    //navheight is the size of the navbar
    //height = size of screen
    var height = document.getElementsByTagName("NAV")[0].clientHeight;
    var navHeight = height;
    height = $(window).height() - navHeight;

    $("#first").css("margin-top", navHeight);

    collapse();

    about_me(height, navHeight);
    coding(height, navHeight);
    photography(height, navHeight);
    upcoming_projects(height, navHeight);
    contact_me(height, navHeight);
});

function collapse()
{
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
}

function about_me(height, navHeight) {	

    $("#my_top").css("height", (height * 0.10));
    $("#my_content").css("height", (height * 0.80));
    $("#my_pic, #my_text").css("height", "100%");
    $("#my_bottom").css("height", (height * 0.10));
    $("#first").css("height", height);

    var imgHeight = document.getElementsByTagName("IMG")[0].clientHeight;
    var picDivHeight = document.getElementById("my_pic").clientHeight;

    $("img").css("margin-top", String((picDivHeight - imgHeight) / 2));

    $("#about_me").click(function() {
    	$('html, body').animate({
         scrollTop: $("#first").offset().top - navHeight
     }, 500);

        $("#" + selected).parent().removeClass("active");
        selected = this.id;
        $("#" + selected).parent().addClass("active");
    });
}

function coding(height, navHeight) {
    $("#second").css("height", height);
    $("#coding").click(function() {
    	$('html, body').animate({
         scrollTop: $("#second").offset().top - navHeight
     }, 500);

        $("#" + selected).parent().removeClass("active");
        selected = this.id;
        $("#" + selected).parent().addClass("active");
    });
}

function photography(height, navHeight) {
    $("#third").css("height", height);
    $("#photography").click(function() {
        $('html, body').animate({
            scrollTop: $("#third").offset().top - navHeight
        }, 500);

        $("#" + selected).parent().removeClass("active");
        selected = this.id;
        $("#" + selected).parent().addClass("active");
    });
}

function upcoming_projects(height, navHeight) {
    $("#fourth").css("height", height);
    $("#upcoming_projects").click(function() {
        $('html, body').animate({
            scrollTop: $("#fourth").offset().top - navHeight
        }, 500);

        $("#" + selected).parent().removeClass("active");
        selected = this.id;
        $("#" + selected).parent().addClass("active");
    });
}

function contact_me(height, navHeight) {
    $("#fifth").css("height", height);
    $("#contact_me").click(function() {
        $('html, body').animate({
            scrollTop: $("#fifth").offset().top - navHeight
        }, 500);

        $("#" + selected).parent().removeClass("active");
        selected = this.id;
        $("#" + selected).parent().addClass("active");
    });
}