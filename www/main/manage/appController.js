/**
 * Created by Administrator on 2017/4/8.
 */
(function(angular){
    angular.module('manage',[])
    .controller("appController",['$scope','$http','$rootScope',function($scope,$http,$rootScope){
            //$scope.userName='suzhen';
            $scope.getShu = function(){
               console.log($scope.time);
                $http.get('/chaxun').then(function(res){
                    console.log(res.data);
                    if(res.data.name){
                        alert("查询成功"+res.data.name)
                    }
                })
            }
            $scope.changeBodyClass = function(){
                $rootScope.isBodyMin = !$rootScope.isBodyMin;
            }
        }])
})(angular);