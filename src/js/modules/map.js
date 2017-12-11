// function initMap() {
//     var coordinates = {lat: 55.759992, lng: 37.6626081},
//     zoom = 15,
    
//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates,
//             zoom: zoom,
//             disableDefaultUI: true
//         });
//         image = '../img/svg-icons/marker.svg',
//         marker = new google.maps.Marker({
//             position: coordinates,
//             map: map,
//             icon: image
//         });
//         $.getJSON("../json/map-style/map-style_colored.json", function (data) {
//             map.setOptions({styles: data});
//         });
// }

// $(document).ready(function() {
//     initMap();
// });

var GM = {
    init: function () {
        // this.initCache();
        this.initMap();
        // this.initBannerTopParallax();
    },

    // initCache: function() {
    //     this.$body         = $('body');
    //     this.$popupContent = $('.js-marker-content');
    //     this.parallaxImg   = '.js-parallax-img:visible'
    // },

    // initBannerTopParallax: function () {
    //     var $parallaxImg  = null;

    //     this.$body.mousemove(function(e) {
    //         if($parallaxImg) {
    //             var $el    = $(e.currentTarget),
    //                 xPos   = e.pageX - (window.innerWidth / 2),
    //                 mXPcnt = Math.round(xPos / $el.width() * 100),
    //                 diffX  = $parallaxImg.width() - $el.width(),
    //                 myX    = diffX * (mXPcnt / 1500);

    //             $parallaxImg.animate({left: myX}, 0);
    //         } else if($(this.parallaxImg).length) {
    //             $parallaxImg = $(this.parallaxImg);
    //         }
    //     }.bind(this));
    // },

    initMap: function () {
        var coordinates = {lat: 55.759936, lng: 37.662236},
            // popupContent = this.$popupContent.html(),
            markerImage = 'img/svg-icons/marker.svg',
            zoom = 15,

            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true, // элементы управления
                scrollwheel: false
            }),

            // infowindow = new google.maps.InfoWindow({
            //     content: popupContent
            // }),

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });

            var styles = 
            [
                {
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#212121"
                    }
                  ]
                },
                {
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#212121"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#757575"
                    },
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "administrative.neighborhood",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative.province",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.man_made",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.terrain",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.terrain",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.attraction",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.business",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.government",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.medical",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#181818"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1b1b1b"
                    }
                  ]
                },
                {
                  "featureType": "poi.place_of_worship",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.school",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "poi.sports_complex",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#2c2c2c"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#8a8a8a"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#373737"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#3c3c3c"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#4e4e4e"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#000000"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#3d3d3d"
                    }
                  ]
                }
              ]
            map.setOptions({styles: styles});

        // $.getJSON("../../json/map-style/map-style_colored.json", function (data) {
        //     map.setOptions({styles: data});
        // });

        // google.maps.event.addListener(infowindow,'closeclick',function(){
        //     marker.setAnimation(google.maps.Animation.BOUNCE);
        // });

        // marker.addListener('click', function () {
        //     marker.setAnimation(null);
        // });

        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });

        // infowindow.open(map, marker);
    }
};

$(document).ready(function() {
    GM.init();
});