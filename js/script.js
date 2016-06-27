function init_map() {
		var var_location = new google.maps.LatLng(19.0760,72.8777);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 15,
          scrollwheel: false,
        };
 
		var var_marker = new google.maps.Marker({
			position: var_location,
			map: var_map,
			title:"Mumbai"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
		var_marker.setMap(var_map);	
 
}
 
google.maps.event.addDomListener(window, 'load', init_map);