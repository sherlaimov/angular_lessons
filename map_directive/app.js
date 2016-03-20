angular.module('mapDirective', [])
    .controller('MainCtrl', ['$scope', MainCtrl])
    .directive('googleMap', function(){
        function initializeMap(center, zoom){
            var mapProp = {
                center: center,
                zoom: zoom
            };
            var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }
        return {
            scope: false,
            replace: true,
            template: '<map id="googleMap" center="{{center}}" zoom="{{zoom}}"  style="width:500px;height:380px;"></map>',

            link: function(scope, element, attrs){
                google.maps.event.addDomListener(window, 'load', initializeMap(scope.center, scope.zoom));
            }
        }
    });

function MainCtrl($scope){
    $scope.center = new google.maps.LatLng(51.508742,-0.120850);
    $scope.zoom = 10;
}