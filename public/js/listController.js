/**
 * Created by anmolgupta on 12/09/15.
 */

app.controller('listController',['$scope','$http','$window',function($scope, $http,$window){

    $scope.devices = [];

    $http.get('/centre/list').
        then(function(response) {
            console.log('anmol'+JSON.stringify(response));
            $scope.list = response.data;


        }, function(error) {

            $window.alert('something wrong happened');
            console.log("anmol error"+ JSON.stringify(error));

        });

    $scope.getDevices = function(centreId, indexVal){
        console.log("indexVal"+indexVal);

        $http.get('/device/centerId/'+centreId).then(function(response){

            console.log('devices'+JSON.stringify(response.data));
            $scope.devices[indexVal] = response.data;

        }),function(error){

            $window.alert('something wrong happened');
            console.log("anmol error"+ JSON.stringify(error));
        }
    }
}]);
