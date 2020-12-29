const URL = "https://covid19.mathdro.id/api";
let app = angular.module("MyApp", []);

app.controller("MyController", ($scope, $http) => {
  $scope.title = "Stay Home Stay Safe!";

  $http.get(URL).then(($response) => {
    //success      
    $scope.all_data = $response.data;
  }, ($error) => {
    //error
  });

  $scope.get_c_data = () => {
    let country = $scope.c;
    if (country != "") {
      $http.get(`${URL}/countries/${country}`).then(($response) => {
        $scope.c_data = $response.data;
      }, ($error) => {
        console.log($error);
      });
    } else {
      $scope.c_data = undefined;
      return;
    }
  }
})