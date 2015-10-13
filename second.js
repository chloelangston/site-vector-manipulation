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
    var containerWidth = $('.middle-container').width();
    var startX = containerWidth - (containerWidth/6);
    var midX = containerWidth - (containerWidth/2);
    var endX = containerWidth + 50;
    var firstPoint = ($('.left-container').width() - $('span').width());

    var secondXPoint = containerWidth-startX;
    var midXPoint = containerWidth-midX;
    var firstYPoint;


    $('.list-element').each(function(i, val){
      $(this).hover(drawBars).hover(drawBars);
      function drawBars(){
        var allPoints = [];
        var rightIndexArray = $(this).data("connects-to").toString().split(",").map(function(num){return parseInt(num)});
        currentElement = i;
        $.each(rightIndexArray, function(i, val){
          firstYPoint = currentElement*40;
          firstRightElementY = rightIndexArray[i]*40;
          points = [[secondXPoint, firstYPoint], [midXPoint, firstRightElementY], [endX, firstRightElementY], [midXPoint, firstRightElementY], [secondXPoint, firstYPoint]];
          allPoints.push(points);
          document.querySelector('.svg-bar').setAttribute("points", [0, firstYPoint].join(",") + " " +  allPoints.join(" "));
        })
      }
    })
  }

  //on resize
  $(window).resize(checkWidth);
  //execute on load
  checkWidth();
})
