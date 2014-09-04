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
    })

    .factory('taskSvc', function taskSvc() {
        var tasks = [
            {
                'from': 'John Smith',
                'created': Date.now(),
                'text': 'Lorem ipsum dolor sit amet, consectetur...',
                'id': '1',
                'read': false
            }
        ];

        return{
           getTasks : function(){
               return tasks;
           }
        }
    })
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
    })
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
    })
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
            NoOfOpenSupportTickets : function(){
                return 1;
            }
        }
    });



angular.module('myApp.services.loginSvc',
    function loginSvc($scope) {
    });



