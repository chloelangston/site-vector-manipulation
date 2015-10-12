$(function(){

  $('#responsive-sites').hover(function(){
    $('.first').fadeTo("slow", 1, function(){});
    $('.resp').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")

  }, function(){
    $('.first').fadeTo("fast", 0, function(){})
    $('.resp').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#dash-data').hover(function(){
    $('.second').fadeTo("slow", 1, function(){})
    $('.dash').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.second').fadeTo("fast", 0, function(){})
    $('.dash').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#content-man').hover(function(){
    $('.third').fadeTo("slow", 1, function(){})
    $('.cont').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.third').fadeTo("fast", 0, function(){})
    $('.cont').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#art-int').hover(function(){
    $('.fourth').fadeTo("slow", 1, function(){})
    $('.art').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.fourth').fadeTo("fast", 0, function(){})
    $('.art').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#nat-lang').hover(function(){
    $('.fifth').fadeTo("slow", 1, function(){})
    $('.nat').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.fifth').fadeTo("fast", 0, function(){})
    $('.nat').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#web-serv').hover(function(){
    $('.sixth').fadeTo("slow", 1, function(){})
    $('.web').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.sixth').fadeTo("fast", 0, function(){})
    $('.web').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#loc-apps').hover(function(){
    $('.seventh').fadeTo("slow", 1, function(){})
    $('.loc').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.seventh').fadeTo("fast", 0, function(){})
    $('.loc').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#ecommerce').hover(function(){
    $('.eighth').fadeTo("slow", 1, function(){})
    $('.ecom').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.eighth').fadeTo("fast", 0, function(){})
    $('.ecom').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  function checkWidth(){
    console.log($('.left-container').width())
    console.log($('.middle-container').width() + $('.left-container').width() + 50);
    var containerWidth = $('.middle-container').width();
    var startX = containerWidth - (containerWidth/6);
    var midX = containerWidth - (containerWidth/2);
    var endX = containerWidth + 50;
    var firstPoint = ($('.left-container').width() - $('span').width());
    console.log($('span').width());
    console.log(firstPoint);

    var secondY = 40;
    var thirdY = 80;
    var fourthY = 120;
    var fifthY = 160;
    var sixthY = 200;
    var seventhY = 240;
    var eighthY = 280;



    var firstBar = document.querySelector('.first');
    firstBar.setAttribute("points", "0,0 " + (containerWidth-startX) + ",0 " + (containerWidth-midX) + ",40 " + (endX) + ",40, " + (containerWidth-midX) + ",40 " + (containerWidth-startX) + ",0 " + (containerWidth-midX) + ",80 " + (endX) + ",80, " + (containerWidth-midX) + ",80 " + (containerWidth-startX) + ",0 " + (containerWidth-midX) + ",280 " + (endX) + ",280, " + (containerWidth-midX) + ",280 " + (containerWidth-startX) + ",0 " + (endX) + ",0");

    var secondBar = document.querySelector('.second');
    secondBar.setAttribute("points", "0," + secondY + " " + (containerWidth-startX) + "," + secondY + " " + (containerWidth-midX) + "," + (secondY+40) + " " + (endX) + "," + (secondY+40) + ", " + (containerWidth-midX) + "," + (secondY+40) + " " + (containerWidth-startX) + "," + secondY + " " + (containerWidth-midX) + "," + (secondY-40) + " " + (endX) + "," + (secondY-40) + ", " + (containerWidth-midX) + "," + (secondY-40) + " " + (containerWidth-startX) + "," + secondY + " " + (containerWidth-midX) + "," + (secondY+120) + " " + (endX) + "," + (secondY+120) + ", " + (containerWidth-midX) + "," + (secondY+120) + " " + (containerWidth-startX) + "," + secondY + " " + (containerWidth-midX) + "," + (secondY+160) + " " + (endX) + "," + (secondY+160) + ", " + (containerWidth-midX) + "," + (secondY+160) + " " + (containerWidth-startX) + "," + secondY + " " + (endX) + "," + secondY);

    var thirdBar = document.querySelector('.third');
    thirdBar.setAttribute("points", "0," + thirdY + " " + (containerWidth-startX) + "," + thirdY + " " + (containerWidth-midX) + "," + (thirdY+160) + " " + (endX) + "," + (thirdY+160) + ", " + (containerWidth-midX) + "," + (thirdY+160) + " " + (containerWidth-startX) + "," + thirdY + " " + (containerWidth-midX) + "," + (thirdY+200) + " " + (endX) + "," + (thirdY+200) + ", " + (containerWidth-midX) + "," + (thirdY+200));

    var fourthBar = document.querySelector('.fourth');
    fourthBar.setAttribute("points", "0," + fourthY + " " + (containerWidth-startX) + "," + fourthY + " " + (containerWidth-midX) + "," + (fourthY+40) + " " + (endX) + "," + (fourthY+40) + ", " + (containerWidth-midX) + "," + (fourthY+40) + " " + (containerWidth-startX) + "," + fourthY);

    var fifthBar = document.querySelector('.fifth');
    fifthBar.setAttribute("points", "0," + fifthY + " " + (containerWidth-startX) + "," + fifthY + " " + (containerWidth-midX) + "," + (fifthY-80) + " " + (endX) + "," + (fifthY-80) + ", " + (containerWidth-midX) + "," + (fifthY-80) + " " + (containerWidth-startX) + "," + fifthY + " " + (endX) + "," + fifthY);

    var sixthBar = document.querySelector('.sixth');
    sixthBar.setAttribute("points", "0," + sixthY + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY+40) + " " + (endX) + "," + (sixthY+40) + ", " + (containerWidth-midX) + "," + (sixthY+40) + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY-40) + " " + (endX) + "," + (sixthY-40) + ", " + (containerWidth-midX) + "," + (sixthY-40) + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY-120) + " " + (endX) + "," + (sixthY-120) + ", " + (containerWidth-midX) + "," + (sixthY-120) + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY+80) + " " + (endX) + "," + (sixthY+80) + ", " + (containerWidth-midX) + "," + (sixthY+80) + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY-160) + " " + (endX) + "," + (sixthY-160) + ", " + (containerWidth-midX) + "," + (sixthY-160) + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY-200) + " " + (endX) + "," + (sixthY-200) + ", " + (containerWidth-midX) + "," + (sixthY-200) + " " + (containerWidth-startX) + "," + sixthY + " " + (containerWidth-midX) + "," + (sixthY-80) + " " + (endX) + "," + (sixthY-80) + ", " + (containerWidth-midX) + "," + (sixthY-80) + " " + (containerWidth-startX) + "," + sixthY + " " + (endX) + "," + sixthY);

    var seventhBar = document.querySelector('.seventh');
    seventhBar.setAttribute("points", "0," + seventhY + " " + (containerWidth-startX) + "," + seventhY + " " + (containerWidth-midX) + "," + (seventhY-240) + " " + (endX) + "," + (seventhY-240) + ", " + (containerWidth-midX) + "," + (seventhY-240) + " " + (containerWidth-startX) + "," + seventhY + " " + (containerWidth-midX) + "," + (seventhY-140) + " " + (endX) + "," + (seventhY-140));

    var eighthBar = document.querySelector('.eighth');
    eighthBar.setAttribute("points", "0," + eighthY + " " + (containerWidth-startX) + "," + eighthY + " " + (containerWidth-midX) + "," + (eighthY-40) + " " + (endX) + "," + (eighthY-40) + ", " + (containerWidth-midX) + "," + (eighthY-40) + " " + (containerWidth-startX) + "," + eighthY);
  }

  //execute on load
  checkWidth();
  //on resize
  $(window).resize(checkWidth);

})
