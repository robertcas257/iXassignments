var app = angular.module('groceryList', []); 

app.controller('GroceryCtrl', function($scope) {
  $scope.grocItems = [];
  
   $scope.addItem = function() {
    for (var i=0; i < $scope.grocItems.length; i++) {
      if ($scope.grocItems[i].itemName === $scope.itemName.toLowerCase()) {
        $scope.grocItems[i].itemQty += parseInt($scope.itemQty);
        $scope.itemName = "";
        $scope.itemQty = "";
        return;
      }
    } 

    if (isNaN($scope.itemName) === false && $scope.itemName !== "") {
      alert("You've entered a quantity as your grocery item. Please enter an item :)");
      $scope.itemName = "";
      return;
    } 
    else if ($scope.itemName === "") {
      console.log("this is empty")
      return;
    }


    var newItem = {
      itemName: $scope.itemName.toLowerCase(),
      itemQty: parseInt($scope.itemQty),
      isEditing: false
    }
    $scope.grocItems.push(newItem);
    $scope.itemName = "";
    $scope.itemQty = "";
  }

  $scope.add = function(i) {
    i.itemQty+= 1;
  };
  $scope.subtract = function(i) {
    if (i.itemQty !== 0) {
    i.itemQty-= 1;
  }
  };
  $scope.delete = function(i) {
    $scope.grocItems.splice(i, 1)
  };
  $scope.emptyCart = function(i) {
    $scope.grocItems = [];
  }
});