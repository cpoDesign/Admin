'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1.1');

angular.module('myApp.services', [])
    .factory('messagesSvc',function messagesSvc() {
    var messages =[{
        'from':'John Smith',
        'created': Date.now(),
        'text': 'Lorem ipsum dolor sit amet, consectetur...',
        'id':'1',
        'read': false
    },
    {
        'from':'James Smith',
        'created': Date.now(),
        'text': 'Lorem ipsum dolor sit amet, consectetur...',
        'id':'2',
        'read': true
    },
    {
        'from':'George Smith',
        'created': Date.now(),
        'text': 'Lorem ipsum dolor sit amet, consectetur...',
        'id':'3',
        'read': false
    },
        {
            'from':'Jade Smith',
            'created': Date.now(),
            'text': 'Lorem ipsum dolor sit amet, consectetur...',
            'id':'4',
            'read': true
        },
        {
            'from':'Lauren Smith',
            'created': Date.now(),
            'text': 'Lorem ipsum dolor sit amet, consectetur...',
            'id':'5',
            'read': false
        },
        {
            'from':'John Smith',
            'created': Date.now(),
            'text': 'Lorem ipsum dolor sit amet, consectetur...',
            'id':'6',
            'read': true
        }
    ];

    return{
        getLastMessages: function(numberOfMessages){
            return _.last(messages, numberOfMessages);
        },
        unreadMessages: function(){
            // todo: add correct implementation
            return messages.length;
        },
        getMessages: function(){
            return messages;
        },
        getMessage: function(messageId){
            return _.find(messages, function(message){
                return message.id == messageId;
            })
        }
    }
});

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


angular.module('myApp.services.loginSvc',
    function loginSvc ($scope){
    });



