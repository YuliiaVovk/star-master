$('.my_countdown').county({ 
    endDateTime: new Date('2017/01/10 10:00:00'),
    reflection: false,
    animation: 'scroll'
});

$(".fancy").fancybox();

$("#go_top").click(function(){
	$("body").animate({scrollTop:0}, 400);
});

$( ".more_reviews" ).click(function() {
  $( ".optional_rev" ).slideToggle(600);
  return false;
});