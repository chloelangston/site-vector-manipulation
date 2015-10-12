$(function(){
  var windowSize = $(window).width();
  var svgWidth;
  var xCoord;
  $(window).resize(function() {
    windowSize = $(window).width();
    svgWidth = ($('.left-container').width())-($('.list-text').width());
    xCoord = svgWidth-200;
    // console.log(screen.width);
    var bar = document.querySelector('.first');
    bar.setAttribute("points", "0,20 " + xCoord + ",20 ");
    var bar2 = document.querySelector('.second');
    bar2.setAttribute("points", "0,20 " + xCoord + ",20 ");
    var bar3 = document.querySelector('.third');
    bar3.setAttribute("points", "0,20 " + xCoord + ",20 ");
    var bar4 = document.querySelector('.fourth');
    bar4.setAttribute("points", "0,20 " + xCoord + ",20 ");
  })
  $('#list-1').hover(function(){
    $('.first').css("stroke", "green")
  }, function(){
    $('.svg-capabilities').css("width", svgWidth)
    console.log(svgWidth);
  },
   function(){
    $('.first').css("stroke", "green")
  })

  $('#list-2').hover(function(){
    $('.second').css("stroke", "green")
  }, function(){
    $('.second').css("stroke", "green")
  })

  $('#list-3').hover(function(){
    $('.third').css("stroke", "green")
  }, function(){
    $('.third').css("stroke", "green")
  })

  $('#list-4').hover(function(){
    $('.fourth').css("stroke", "green")
  }, function(){
    $('.fourth').css("stroke", "green")
  })



})
