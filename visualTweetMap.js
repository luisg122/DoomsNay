// initialize the map
var mymap = L.map('mapid').setView(new L.LatLng(40.758700379161006, -73.95652770996094), 13);
// load a tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVpc2cxMjIiLCJhIjoiY2tocXo2MHdsMGN1NjJ3cGRpNjFtZGV5YSJ9.LA1GqN3vUVJwZqCBL3zR3w'
}).addTo(mymap);   

var circle = L.circle([40.758700379161006, -73.95652770996094], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);