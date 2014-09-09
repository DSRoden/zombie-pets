(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.toggleWeapon =function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.pet = {health:100};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;

    $scope.togglePet =function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.weapon = {};
    $scope.weapons = [];

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };

    $scope.healthbar = function(health){
      if(health > 10){
        return {'background-color': 'green', 'width':health + '%'};
      }else if(health < 0){
        return {'background-color': 'black', 'width': '100%'};
      } else {
        return {'background-color': 'red', 'width': health + '%'};
      }
    };


    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.fight = function(){
      var p1Damage = Math.random()*$scope.player1.weapon.damage,
          p2Damage = Math.random()*$scope.player2.weapon.damage,
          random = Math.random();


      if($scope.player1.health < 0){
        p1Damage = Math.random()*3;
        $scope.player1.name = 'Zombie';
      }

      if($scope.player2.health < 0){
        p2Damage = Math.random()*3;
        $scope.player2.name = 'Zombie';
      }

      if(random < 0.5){
        $scope.player1.health = $scope.player1.health - p2Damage;
        $scope.player2.health = $scope.player2.health - p1Damage;

        console.log($scope.player2.health);

      } else {
        $scope.player2.health = $scope.player2.health - p1Damage;
        $scope.player1.health = $scope.player1.health - p2Damage;
      }
    };

  }]);
})();

