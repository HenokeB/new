angular.module('plunker', ['ui.bootstrap']);
function CarouselDemoCtrl($scope) {

  $scope.myInterval = 5000;
  var slides = $scope.slides = [{
    'imgName':'images/banner7.jpg',
    'caption':'Sunday worship',
    'author':'unkown'
  },{
    'imgName':'images/banner6.jpg',
    'caption':'Come and let praise the lord',
    'author':'unknown'
  },{
    'imgName':'images/banner8.png',
    'caption':'Jesus is my savior',
    'author':'unknown'
  }];
}

