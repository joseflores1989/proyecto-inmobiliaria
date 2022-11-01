var map;
var centerPos = new google.maps.LatLng(-34.5945313,-58.412589);
var zoomLevel = 15;
var image = 'imagen/icon.png'
function initialize() {
var mapOptions = {
    center: centerPos,
    zoom: zoomLevel
};
map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
var locations = [
    ['Sucursal Córdoba', -34.59789, -58.41425],
    ['Sucursal Santa Fé', -34.59215, -58.40659],
  ];
   
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      title: locations[i][0],
      map: map,
      icon: image
    });
  }


}


google.maps.event.addDomListener(window, 'load', initialize);


