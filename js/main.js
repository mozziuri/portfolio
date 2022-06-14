

/*슬라이드 효과*/
$(".js-navigate").on("click", function() {
  console.log("실행");
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe1.on");
  var findNext = $(current).next(".recipe1");
  var findPrev = $(current).prev(".recipe1");
  var button = $(this);

  $(current).removeClass("on");
  setTimeout(function() {
    if ($(button).hasClass("js-right")) {
      $(findNext).addClass("on");
      checkForDisable();
    } else if ($(button).hasClass("js-left")) {
      $(findPrev).addClass("on");
      checkForDisable();
    }
  }, 300);
});

function checkForDisable() {
  var current = $(".recipe1.on");
  if ($(current).is(".recipe1:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe1:first")) {
    $(".js-left").addClass("disabled");
  }
}
/*슬라이드 효과*/




// $(window).load(function () {
//     $('.loader_container').delay(2000).fadeOut(2000);
// });

/*parallax*/
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
/*parallax*/



/*글씨 써지는 효과*/
        $('.has-animation').each(function (index) {
            $(this).delay($(this).data('delay')).queue(function () {
                $(this).addClass('animate-in');
            });
        });

        $(document).scroll(function(){
        var scrollPos=$(document).scrollTop();
        //console.log(scrollPos);

            if(scrollPos>600){
                $('.has-animation1').each(function(index) {
                $(this).delay($(this).data('delay')).queue(function(){
                $(this).addClass('animate-in');
               });
            });

        }
        })
          






