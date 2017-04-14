(function (angular) {
    "use strict";
    // 1.主模块的创建
    let app = angular.module('myhome',[
        'ui.router','manage'
    ]);
    //2.配置路由
    app.config(["$stateProvider","$urlRouterProvider",
        function($stateProvider,$urlRouterProvider){
             $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl:"./manage/view/view.html",
                    controller:"appController"//该模块的控制器
                })
                .state('particulars', {
                    url: '/particulars',
                    templateUrl:"./particulars/view/view.html"
                })
                .state('footer', {
                    url: '/fo',
                    template: `欢迎访问我的网站`
                });
        }])
    // 主页模块控制器
    app.controller('mainController',[
        '$scope','$state',function($scope,$state){
            $scope.name = "holle word";
            $scope.username = "苏镇";
            $scope.leftCn = 'menu1';
            $scope.items = [
                {menu:'main',name:'账号管理',class:'fa-laptop',cng:'menu1'},
                {menu:'particulars',name:'账单明细',class:'fa-bar-chart-o',cng:'menu2'},
                {menu:'footer',name:'个人简介',class:'fa-bar-chart-o',cng:'menu3'}
            ];
            $scope.change =function(c){
                $scope.leftCn = c;
            }
            $state.go("main");
        }]);
})(angular);
