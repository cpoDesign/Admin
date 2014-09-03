'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1.1')
    // auth service
    .factory('Auth', function ($cookieStore, ACCESS_LEVELS) {
        var _user = $cookieStore.get('user');
        var setUser = function (user) {
            if (!user.role || user.role < 0) {
                user.role = ACCESS_LEVELS.pub
            }

            _user = user;
            $cookieStore.put('user', _user);
        };

        return{
            isAuthorised: function (lvl) {
                return _user.role >= lvl;
            },
            setUser: setUser, isLoggedIn: function () {
                return _user ? true : false;
            },
            getUser: function () {
                return _user;
            },
            getId: function () {
                return _user ? _user._id : null;
            },
            getToken: function () {
                return _user ? _user.token : ''
            },
            logout: function () {
                $cookieStore.remote(user);
                _user = null;
            }
        }
    });

angular.module('myApp.services', [])
    .factory('messagesSvc', function messagesSvc() {
        var messages = [
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '1',
                'read': false
            },
            {
                'from': 'James Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '2',
                'read': true
            },
            {
                'from': 'George Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '3',
                'read': false
            },
            {
                'from': 'Jade Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '4',
                'read': true
            },
            {
                'from': 'Lauren Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '5',
                'read': false
            },
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '6',
                'read': true
            }
        ];

        return{
            getLastMessages: function (numberOfMessages) {
                return _.last(messages, numberOfMessages);
            },
            unreadMessages: function () {
                // todo: add correct implementation
                return messages.length;
            },
            getMessages: function () {
                return messages;
            },
            getMessage: function (messageId) {
                return _.find(messages, function (message) {
                    return message.id == messageId;
                })
            }
        }
    });

angular.module('myApp.services', [])
    .factory('taskSvc', function taskSvc() {
        var messages = [
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '1',
                'read': false
            },
            {
                'from': 'James Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '2',
                'read': true
            },
            {
                'from': 'George Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '3',
                'read': false
            },
            {
                'from': 'Jade Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '4',
                'read': true
            },
            {
                'from': 'Lauren Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '5',
                'read': false
            },
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '6',
                'read': true
            }
        ];

        return{
            getLastMessages: function (numberOfMessages) {
                return _.last(messages, numberOfMessages);
            },
            unreadMessages: function () {
                // todo: add correct implementation
                return messages.length;
            },
            getMessages: function () {
                return messages;
            },
            getMessage: function (messageId) {
                return _.find(messages, function (message) {
                    return message.id == messageId;
                })
            }
        }
    });

angular.module('myApp.services', [])
    .factory('transactionSvc', function transactionSvc() {
        var transactions = [
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '1',
                'read': false
            }
        ];

        return{
//            getLastMessages: function (numberOfMessages) {
//                return _.last(transactions, numberOfMessages);
//            },
//            unreadMessages: function () {
//                // todo: add correct implementation
//                return transactions.length;
//            },
//            getMessages: function () {
//                return transactions;
//            },
//            getMessage: function (messageId) {
//                return _.find(transactions, function (item) {
//                    return item.id == messageId;
//                })
//            }
        }
    });

angular.module('myApp.services', [])
    .factory('ordersSvc', function ordersSvc() {
        var orders = [
            {
                id:1,
                orderDate: '2014/10/01',
                orderTime: '3:29 PM',
                amount: 321.10
            }
        ];

        return{

//            getLastMessages: function (numberOfMessages) {
//                return _.last(orders, numberOfMessages);
//            },
//            unreadMessages: function () {
//                // todo: add correct implementation
//                return orders.length;
//            },
//            getMessages: function () {
//                return orders;
//            },
//            getMessage: function (orderId) {
//                return _.find(orders, function (order) {
//                    return order.id == orderId;
//                })
//            }
        }
    });

angular.module('myApp.services', [])
    .factory('supportSvc', function supportSvc() {
        var support = [
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '1',
                'read': false
            }
        ];

        return{
//            getLastMessages: function (numberOfMessages) {
//                return _.last(support, numberOfMessages);
//            },
//            unreadMessages: function () {
//                // todo: add correct implementation
//                return messages.length;
//            },
//            getMessages: function () {
//                return support;
//            },
//            getMessage: function (messageId) {
//                return _.find(support, function (supportItem) {
//                    return supportItem.id == messageId;
//                })
//            }
        }
    });

/*
 angular.module('myApp',[])
 .config(function($httpProvider){
 // build our interceptor here
 var interceptor = function($q, $rootScope, Auth){
 return{
 'response': function(resp){
 if(resp.config.url =='/api/login'){
 // assuming that our api server response with following data: {token: 'AUTH_TOKEN'}
 Auth.setToken(resp.data.token);
 }
 } ,
 'responseError': function(rejection){
 switch (rejection.status){
 case 401:
 if(rejection.config.url !=='api/login')
 $rootScope.$broadcast('auth:loginRequired');
 break;
 case 403:
 $rootScope.$broadcast('auth:forbidden');
 break;
 case 404:
 $rootScope.$broadcast('page:notFound');
 break;
 case 500:
 $rootScope.$broadcast('server:error');
 break;
 }
 return $q.reject(rejection)
 }
 }
 };

 $httpProvider.interceptors.push(interceptor());
 });
 */


angular.module('myApp.services.loginSvc',
    function loginSvc($scope) {
    });



