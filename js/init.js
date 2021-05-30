(function($){
  $(function(){

    $('.pushpin').pushpin();
    $('.scrollspy').scrollSpy();


    $(window).on("scroll", function() {
      if($(document).scrollTop() >= 50){
        $("nav").css("background-color", "#e9e9e9")
        $("nav").css("transition", "background-color 0.1s linear")
      } else {
        $("nav").css("background-color", "#fcfcfc")
        $("nav").css("transition", "background-color 0.1s linear")
      }
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space

//Initialize and add the map
function initMap() {
  // The location of Uluru
  const whatuwhiwhi = { lat: -34.8499966, lng: 173.416665 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: whatuwhiwhi,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: whatuwhiwhi,
    map: map,
  });
}
