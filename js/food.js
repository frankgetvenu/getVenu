var lat,
    lon

navigator.geolocation.getCurrentPosition(function(location) {
  lat = location.coords.latitude;
  lon = location.coords.longitude;
});

$(document).ready {

}

var lat,
    lon

navigator.geolocation.getCurrentPosition(function(location) {
        //localStorage.lat = location.coords.latitude;
        //localStorage.lon = location.coords.longitude;
        //debugger
        //console.log("MADE IT")

        lat = location.coords.latitude
        lon = location.coords.longitude
  });

$(document).ready(function() {
});