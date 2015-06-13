angular.module('lab62.Controllers',
    [
        'ionic',
        'lab62.Services'
    ]
)

.controller('lab62.ListController', function($scope,  $state, users) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };

        $scope.getListProduct = function() {

            $state.transitionTo('productList');

        };
})

.controller('lab62.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;

})

.controller('lab62.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
        })
})

.controller('lab62.ListProductController', function($scope,lists_products) {

        $scope.products = lists_products.product_list.query(function(data){

            console.log(data);
        })      

});
