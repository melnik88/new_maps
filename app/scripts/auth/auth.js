/**
 * Created by mac on 16.05.14.
 */
angular
    .module('auth',[])
    .config(['$stateProvider', function($stateProvider){
        console.log('config auth module');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login.html',
                controller: 'LoginController',
                resolve: {

                }
            })

    }]);
