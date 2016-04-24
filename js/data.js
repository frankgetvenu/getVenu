var startingLocation = "Trump+Tower"

var fourSeasons = {
  name: "Four Seasons",
  rating: "4.6 Stars",
  address: "E 52nd St",
  category: "American",
  image: "http://fourseasonsrestaurant.com/images/index/Four%20Seasons%20PDR1.jpg",
  phone: "212-754-9494",
  distance: "0.4 mile",
  mapEmbed: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCBR22ALksTJlfUqgBbiblbe0koi2l6d44&origin=Trump+Tower&destination=Four+Seasons"
 }

var theModern = {
  name: "The Modern",
  rating: "4.4 Stars",
  category: "American",
  address: "W 53 St.",
  image: "http://nyjournal.squarespace.com/storage/modern.jpg",
  phone: "212-333-1220",
  distance: "0.3 mile",
   mapEmbed: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCBR22ALksTJlfUqgBbiblbe0koi2l6d44&origin=Trump+Tower&destination=the+modern"
}

var laGrenouille = {
  name: "La Grenouille",
  rating: "4.6 Stars",
  category: "French",
  address: "3 E 52nd St, New York, NY 10022",
  image: "https://i.ytimg.com/vi/Ah7h2mJwTOg/hqdefault.jpg",
  phone: "212-752-1495",
  distance: "0.2 mile",
  mapEmbed: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCBR22ALksTJlfUqgBbiblbe0koi2l6d44&origin=Trump+Tower&destination=La+Grenouille"
}

var leCirque = {
  name: "Le Cirque",
  rating: "4.2 Stars",
  category: "French",
  address: "151 E 58th St, New York, NY 10022",
  image: "http://assets.nydailynews.com/polopoly_fs/1.368567!/img/httpImage/image.jpg",
  distance: "0.5 mile",
  mapEmbed: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCBR22ALksTJlfUqgBbiblbe0koi2l6d44&origin=Trump+Tower&destination=le+cirque"
}

var felidia = {
  name: "Felidia",
  rating: "4.1 Stars",
  category: "Italian",
  address: "243 E 58th St, New York, NY 10022",
  image: "http://assets.nydailynews.com/polopoly_fs/1.368567!/img/httpImage/image.jpg",
  distance: "0.6 mile",
  mapEmbed: "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCBR22ALksTJlfUqgBbiblbe0koi2l6d44&origin=Trump+Tower&destination=felidia"
}

var locations = [felidia, leCirque, laGrenouille, theModern, fourSeasons]

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function createMap(location) {
  var iframe = document.createElement('iframe')
  // new_row.className = "aClassName";
//   var html = '<iframe
//   width="450"
//   height="250"
//   frameborder="0" style="border:0"
//   src=' + location.mapEmbed + ' allowfullscreen>
// </iframe>'
  iframe.src = "iframe.src = 'data:text/html;charset=utf-8,'" + encodeURI(location.mapEmbed)
  document.body.appendChild(iframe)

}

// function displayMap() {
//   document.getElementById("myThing").addEventListener("click", createMap(locations[0]));
// }

document.getElementById("myThing").addEventListener("click", function(){ alert("Hello World!"); });

shuffle(locations)



// var 21 Club = { name: "21 Club" }
// var Nobu Fifty Seven = { name: "Nobu Fifty Seven" }
// var Jojo = { name: "Jojo" }
// var Hillstone = { name: "Hillstone" }
// var Betony = { name: "Betony" }
// var Ma Peche = { name: "Ma Peche" }

// }