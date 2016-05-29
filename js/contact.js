var map = null;
jQuery(document).ready(function($){
    
    $("#selectmenu").selectmenu({
        change: function( event, ui ) {
            $('#selectmenu-button').addClass('valid');
        }
    });

	if($("#map").length) {
		//google map
		var coordinate = new google.maps.LatLng(41.816338, -71.3597077);
		var mapOptions = {
			zoom: 14,
			center: coordinate,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: false,
			mapTypeControl: false
		};

		map = new google.maps.Map(document.getElementById("map"),mapOptions);
		new google.maps.Marker({
			position: new google.maps.LatLng(41.816338, -71.3597077),
			map: map,
			icon: new google.maps.MarkerImage("/img/utils/map_pointer.png", new google.maps.Size(29, 38), null, new google.maps.Point(14, 37))
		}); // RWS changes; they changed Size(38,45), Point(18,44), whole thing in try block
	}
	
	//window resize
	$(window).resize(function(){
		if(map!=null)
			map.setCenter(coordinate);
	});

    function hasHtml5Validation () {
        return typeof document.createElement('input').checkValidity === 'function';
    }
    
    if (hasHtml5Validation()) {
        $('.contact_form').submit(function (e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                if ($('#user_name').val().trim() == '') {
                    $('#user_name').focus();
                    return false;
                }
                if ($('#user_message').val().trim() == '') {
                    $('#user_message').focus();
                    return false;
                }
                return false;
            } else {
                if (($('#selectmenu').val() == null) || ($('#selectmenu').val() == "default")) {
                    e.preventDefault();
                    $('#selectmenu-button').focus();
                    return false;
                }
                return true;
            }
        });
    }
});