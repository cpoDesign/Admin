'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1');


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
    });


angular.module('myApp.services.loginSvc',
    function loginSvc ($scope){
    });



