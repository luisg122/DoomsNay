var myArr  = [];
var county;
var initialUrl;
var fullUrl;

$(document).ready(function() {
    $(".searchButton").click(function(){
        initialUrl = 'https://corona.lmao.ninja/v2/jhucsse/counties/'
        county = document.getElementById('searchInput').value;
        fullUrl = initialUrl.concat(county)
        
        $.ajax({
            method:'GET',
            url: fullUrl,
            success:function(response){
                myArr = response
                loadCoordinates(myArr[0].coordinates.latitude, myArr[0].coordinates.longitude)
                buildTable(myArr)
                console.log(myArr)
            }
        })
    });
});

function loadCoordinates(latitude, longitude){
    // Get County Coordinates
    var container = L.DomUtil.get('mapid');
    if(container != null){
       container._leaflet_id = null;
    }
    mymap = L.map('mapid').setView(new L.LatLng(latitude, longitude), 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibHVpc2cxMjIiLCJhIjoiY2tocXo2MHdsMGN1NjJ3cGRpNjFtZGV5YSJ9.LA1GqN3vUVJwZqCBL3zR3w'
    }).addTo(mymap);
}

function buildTable(data){
    // Get County Data, i.e, number of COVID cases, deaths etc..
    var table = document.getElementById('myTable')

    for(var i = 0; i < data.length; i++){
        var state  = data[i].province
        var county = data[i].county 
        var row = `<tr> 
                        <td>${state}</td>
                        <td>${county}</td>
                        <td>${data[i].stats.confirmed}</td>
                        <td>${data[i].stats.deaths}</td>
                </tr>`
        table.innerHTML += row
    }
}

buildTable(myArr);