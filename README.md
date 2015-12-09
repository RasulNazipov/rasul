# rasul
<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="UTF-8">
  <title>СПИСОК ДЕЛ</title>
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" href="tobo.css">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.js"></script>
  <script src="bower_components/angular/angular.js"></script>
  <script src="controllers.js"></script>

</head>
<body>

	<h2>Список дел {{name}}</h2>

	Имя: <input type="text" ng-model="name"></br>
	
	<div ng-controller="CaseCtrl">
		<span>Всего {{Cases.length}} дел(о). Осталось {{remaining()}} дел(о)</span>
    <a href="" ng-click="delete()"><button>Удалить законченные дела</button></a>
    <a href="" ng-click="alldelete()"><button>Удалить все дела</button></a>
		
      <ul class="unstyled">
        <li ng-repeat="Case in Cases">
          <input type="checkbox" ng-model="Case.done">
          <span class="done-{{Case.done}}">{{Case.text}}</span>
        </li>
      </ul>
      <form ng-submit="addCase()">
        <input type="text" ng-model="CaseText"  size="20"
               placeholder="впишите новое дело">
        <input class="btn-primary" type="submit" value="Добавить">
        <input type="reset" value="Очистить"></p> 
        <a href="" ng-click="info()"><button>Хотите изменить?</button></a>

</body>
</html>
