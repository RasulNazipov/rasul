function CaseCtrl($scope) {
  $scope.Cases = [
    {text:'Вынести мусор', done:true},
    {text:'Покормить коня', done:false}];
 
  $scope.addCase = function() {
    $scope.Cases.push({text:$scope.CaseText, done:false});
    $scope.CaseText = '';
  };


 
  
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.Cases, function(Case) {
      count += Case.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.delete = function() {
    var oldCases = $scope.Cases;
    $scope.Cases = [];
    angular.forEach(oldCases, function(Case) {
      if (!Case.done) $scope.Cases.push(Case);
    });
  };

$scope.alldelete = function() {
    var alldelete = $scope.Cases;
    $scope.Cases = [];
  };

$scope.info = function() {
    var info = ('1) Выделите дело как законченное.\n2) Нажмите на кнопку "Удалить законченные дела" \n3) Добавте новое исправленное дело');
     
    alert(info);   
  };
  
}
