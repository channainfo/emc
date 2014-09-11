var province_load = false;
var commune_load = false;
var map;
var communes_list = EMC.map.communes

var infoWindow = new google.maps.InfoWindow({ content: "" });

$(function(){
  google.maps.event.addDomListener(window, 'load', initialize);
})

function renderCommunes(){
  for(i=0; i<communes_list.length;i++) {
    var commune = communes_list[i];

        toPolygon(commune)

  }
}

function toPolygon(commune){
  var paths = [];
  console.log("adding commune to map: " + commune.name);
  var coor = eval(commune.coordinate)
  for(var i=0; i< coor.length; i++) {
    paths.push(new google.maps.LatLng( coor[i][0], coor[i][1]) );
  }

  polygon = new google.maps.Polygon({
    paths: paths,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  polygon.setMap(map);
}

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(11.54, 104.90)
  };

  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  renderCommunes();
}
