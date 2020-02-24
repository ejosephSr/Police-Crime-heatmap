var myMap = L.map("map", {
  center: [35.7596, -79.0193],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "  https://data.townofcary.org/api/v2/catalog/datasets/cpd-incidents";

d3.json(newtry, function(response) {

  console.log(response);

  for (var i = 0; i < response.fields.length; i++) {
    var location = response[i].location;

    if (location) {
      L.marker([location.fields[], location.coordinates[0]]).addTo(myMap);
    }
  }

});
