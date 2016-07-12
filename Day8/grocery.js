var app = angular.module('groceryList', []); 

app.controller('GroceryCtrl', function($scope) {
  $scope.grocItems = [];
  
   $scope.addItem = function() {
    for (var i=0; i < $scope.grocItems.length; i++) {
      if ($scope.grocItems[i].itemName === $scope.itemName) {
        $scope.grocItems[i].itemQty += parseInt($scope.itemQty);
        return;
      }
    } 

    var newItem = {
      itemName: $scope.itemName,
      itemQty: parseInt($scope.itemQty)
    };
    $scope.grocItems.push(newItem);
    $scope.itemName = "";
    $scope.itemQty = "";
  };

  $scope.add = function(i) {
    items.itemQty+= 1;
  };
   $scope.subtract = function(i) {
    if (items.itemQty !== 0) {
    items.itemQty-= 1;
  }
  };
  $scope.delete = function(i) {
    $scope.grocItems.splice(i , 1);
  }
});