// Code goes here
angular.module('App', [])
    .controller('digestCtrl', function($scope){
        var digests = 0;
        $scope.val = 0;
        $scope.digests = 0;

        //gets called every digest
        $scope.$watch(function(){
            digests ++;
            console.log('digest: ' + digests);

            if($scope.val >= 4 && $scope.val < 10){
                $scope.val++;
            }
        });
        $scope.inc = function(){
            $scope.val++;
            digests = 0;
            console.log('\nclick');
        };
    });
