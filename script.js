$(document).ready(function(){
  setBindings();
  var navigation = $("#nav");
  var header = $("header");

  $(window).scroll(function(){
      if($(this).scrollTop() > 355) {
          navigation.addClass("nav-scrolled");
          header.addClass("hideBitch");

      } else {
        navigation.removeClass("nav-scrolled");
        header.removeClass("hideBitch");
      }
  });


})
 // https://teamtreehouse.com/community/forum-tip-create-a-sticky-navigation-with-css-and-jquery-2
 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- -  - - - - - - - - -

 function setBindings() {
   $("#nav1").click(function(e){
     e.preventDefault();
     $("html, body").animate({scrollTop: $("#section1" ).offset().top-1080}, 1000)
   })


   $("#nav2").click(function(e){
     e.preventDefault();
     $("html, body").animate({scrollTop: $("#section1" ).offset().top}, 1000)
   })


   $("#nav3").click(function(e){
     e.preventDefault();
     $("html, body").animate({scrollTop: $("#section2" ).offset().top-100}, 1000)
   })


   $("#nav4").click(function(e){
     e.preventDefault();
     $("html, body").animate({scrollTop: $("#section3" ).offset().top-100}, 1000)
   })
 // - - - - ---  -- - original script ends here - - -- - - - - - - - -- - - -



   /*$("#section1").click(function(e){
     e.preventDefault();
     alert("hello there!");
     $("html, body").animate({scrollTop: $("#section3").offset().top-120}, 1000)
   })*/

 }
