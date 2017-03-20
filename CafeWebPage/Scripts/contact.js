/*Google Map API*/


/* <script src="https://maps.googleapis.com/maps/api/js?key= YOUR_API_KEY &callback=initMap"
    async defer></script>
    
+++ add '&' before "callback"  (this gave you trouble!)
+++ https://developers.google.com/maps/documentation/javascript/
*/


function myMap(){
    var coffeeHauss = {lat: 42.009260, lng: -87.691775};
        
    var googleMap = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: coffeeHauss
        });
        
    var marker = new google.maps.Marker({
          position: coffeeHauss,
          map: googleMap
        });   
}

