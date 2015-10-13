$(function(){

  $('#responsive-sites').hover(function(){
    $('.resp').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.resp').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#dash-data').hover(function(){
    $('.dash').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.dash').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#content-man').hover(function(){
    $('.cont').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.cont').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#art-int').hover(function(){
    $('.art').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.art').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#nat-lang').hover(function(){
    $('.nat').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.nat').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#web-serv').hover(function(){
    $('.web').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.web').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#loc-apps').hover(function(){
    $('.loc').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
    $('.loc').css("opacity", "0.5").removeClass("right-list-anim")
    $(this).css("opacity", "0.5")
  })

  $('#ecommerce').hover(function(){
    $('.ecom').css("opacity", "1").addClass("right-list-anim")
    $(this).css("opacity", "0.8")
  }, function(){
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
      $(this).hover(drawBars, function(){$('.svg-bar').css("opacity", "0")})
      // $(this).hover(
      //   function(){
      //     $('.svg-bar').fadeTo("slow", 1, function(){})
      //   },function(){
      //     $('.svg-bar').css("opacity", "0")
      //   }
      // );
      function drawBars(){
        $('.svg-bar').css("opacity", "1")
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
