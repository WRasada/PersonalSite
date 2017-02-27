          //************* GLOBAL JS *************//

//Fade NavBar and Landing Page Content
$('.navbar-default').fadeIn(1200, function(){
  $('#myName').fadeIn(1000, function(){
    $('#messageSeparator').animate({
      width: '50%'
    }, 1000);
    $('#myNameContent').fadeIn(800);
  });
});

$('.navbar-default')
          //************* BLOG JS *************//

$('#blogPage .navbar-default').fadeIn(1200, function(){
  $('.blogContainer').fadeIn(1000);
});

$('.icon1').on("click", function(){
    $(".post1").slideToggle(1000);
});

$('.icon2').on("click", function(){
    $(".post2").slideToggle(1000);
});
      //************* ABOUT JS *************//

$('#aboutPage .navbar-default').fadeIn(1200, function(){
  $('.aboutHeader').slideDown(1100, function(){
    $('.aboutContainer').fadeIn(800);
  });
});

$('.navbar-nav li').mouseenter(function(){
	if($(this).hasClass('active')){
  } else {
    $(this).addClass('active');
    $(this).mouseleave(function(){
      $(this).removeClass('active');
    });
  }
});
