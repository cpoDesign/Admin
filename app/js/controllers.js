'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
    .controller("MessagesCtrl", function(){
        // will be used for drop down messages for an user
    })
    .controller("NotificationCtrl", function(){
        // will be used for drop down notification for an user
    })
    .controller('LoginCtrl', [function() {

  }])
    .controller('BlankPageCtrl', [function() {

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

            // console.log(action);
            $scope.isInEdit = true;
        }
        $scope.saveChanges = function(editingAction){
            //console.log(editingAction);

            $scope.action = editingAction;
            $scope.isInEdit = false;
            $scope.editingAction = null;
        }
    })

    .controller('DashboardCtrl', [function() {

  }])
    .controller('FormsCtrl', [function() {

  }])
    .controller('ChartsCtrl', [function() {

  }])
    .controller('GridCtrl', [function() {

  }])
    .controller('ElementsCtrl', [function() {

  }]);