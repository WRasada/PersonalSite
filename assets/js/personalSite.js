          //************* Global JS *************//

//Fade NavBar and Landing Page Content
$('#homePage .navbar-default').fadeIn(1100, function(){
  $('#myName').fadeIn(1000, function(){
    $('hr').animate({
      width: '340'
    }, 1000);
    $('#myNameContent').fadeIn(800);
  });
});

$('#blogPage .navbar-default').fadeIn(1100);
