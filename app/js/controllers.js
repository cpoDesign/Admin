'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

    .controller("MessagesOverViewCtrl", ['$scope', '$location', 'messagesSvc', function($scope, $location, messagesSvc){

        $scope.messages=messagesSvc.getLastMessages(3);

        $scope.goToMessage = function(id){
            $location.path('/messages/'+id);
        }

        $scope.showAllMessages = function(){
            $location.path('/messages');
        }
    }])
    .controller("MessagesCtrl", function($scope, $location, messagesSvc){
        $scope.messages=messagesSvc.getMessages();

        $scope.goToMessage = function(id){
            $location.path('/messages/'+id);
        }
    })
    .controller("MessageDetailCtrl", function($scope, message){

        $scope.message=message;
    })
    .controller("NotificationCtrl", function(){
        // will be used for drop down notification for an user
    })
    .controller('LoginCtrl', [function() {

  }])
    .controller('BlankPageCtrl', [function() {

  }]).controller('TemplateCtrl', ["$scope", function($scope) {

        $scope.htmlTemplateResult = '<p>No template has been rendered yet</p>';

        $scope.renderTemplate = function(){
            $scope.htmlTemplateResult = '<div>this is content written by John</div><div><label>Author</label>John Doe</div>';
        }

  }])
    .controller('TablesCtrl', ['$scope', function($scope) {

        $scope.priorities = [
            {id:1, name:'priority 1',
                actions:[
                    {id:2, name:'action 2'},
                    {id:3, name:'action 3'}
                ]},
            {id:2, name:'priority 2',
                actions:[
                    {id:5, name:'action 5'},
                    {id:6, name:'action 6'}
                ]}
        ];
  }])
    .controller('UpdateActionsCtrl', function($scope){
        $scope.isInEdit = false;
        $scope.editingAction = null;
        $scope.edit =function(action){
            $scope.editingAction = {
                id:action.id,
                name:action.name
            };

            $scope.isInEdit = true;
        }
        $scope.saveChanges = function(editingAction){
            $scope.action = editingAction;
            $scope.isInEdit = false;
            $scope.editingAction = null;
        }
    })

    .controller('DashboardCtrl', function($scope, messagesSvc) {
        $scope.unreadMessages = messagesSvc.unreadMessages();

        $scope.messagesText = function(){
            if($scope.unreadMessages==0){
                return 'No unread messages';
            }else{
                return 'New messages';
            }
        }

  })
    .controller('FormsCtrl', [function() {

  }])
    .controller('ChartsCtrl', [function() {

  }])
    .controller('GridCtrl', [function() {

  }])
    .controller('ElementsCtrl', [function() {

  }]);