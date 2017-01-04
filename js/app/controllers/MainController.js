function MainController() {
    this.name = 'Bill Gates';
}

function addNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

angular
    .module('app')
    .controller('MainController', MainController);
