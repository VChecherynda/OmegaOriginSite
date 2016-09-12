 $("#owl-demo").owlCarousel({

  	items: 4,
  	dots: false,
  	margin: 34,
	  nav: true,
    navText: [
      "<i class='icon-chevron-left icon-white'></i>",
      "<i class='icon-chevron-right icon-white'></i>"
      ],
});

/* BOX AND ARROWS WICH CONECT WITH SLIDER*/


$('.face-box').on('click', function() {
  
      $('.face-box .boxBotArrow').removeClass('arrow');
      $(this).children(1).addClass('arrow');

      $('#six .user-item').removeClass('on');
      $('#six .user-item').eq($(this).parent().index()).addClass('on');

});

/* MODAL POPUP */

$('.image-box-lg').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
});

/* Scroll smothly to ancors */

var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;

$(function(){
    
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        // Increase or reset current anchor
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1) 
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 2000, 'swing', function(){
            isAnimating  = false;
        });
    });

    updateAnchors();   
    
});

/* Dropdon function */

function myDropFunc() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

