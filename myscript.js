$(document).ready( function() {
	var fsvs = $.fn.fsvs({
		speed : 900,
		bodyID : 'fsvs-body',
		selector : '>.page',
		mouseSwipeDisance : 40,
        afterSlide: function(){
            typeWriter();
        },
		beforeSlide : function(){},
		endSlide : function(){},
		mouseWheelEvents : true,
		mouseDragEvents : true,
		touchEvents : true,
		arrowKeyEvents : true,
		pagination : false,
		nthClasses : false,
		detectHash : true
	});
	//slider.slideUp();
	//slider.slideDown();
	//slider.slideToIndex( index );
	//slider.unbind();
	//slider.rebind();
    var i = 0;
var txt = 'Debris around Earth increasing dramatically'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
document.getElementById("type").addEventListener("scroll", typeWriter);
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
        setTimeout(function() {
          document.getElementById("typewriter2").classList.toggle('transition');
        }, speed); // Add a delay to ensure the class is toggled after the typing animation is complete
      }
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById("coordinates").textContent = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("coordinates").textContent = "Latitude: " + latitude + ", Longitude: " + longitude;
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById("coordinates").textContent = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("coordinates").textContent = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.getElementById("coordinates").textContent = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("coordinates").textContent = "An unknown error occurred.";
        break;
    }
  }
});
  