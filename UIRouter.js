var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('index', {
		url: '/index',
		views: {
			'': {
				templateUrl: 'template/index.html'
			},
			'topbar@index': {
				templateUrl: 'template/topbar.html'
			},
			'main@index': {
				templateUrl: 'template/home.html'
			}
		}
	}).state('index.user', {
		url: '/user',
		views: {
			'main@index': {
				templateUrl:  'template/user.html',
				controller: function($scope, $state){
					$scope.addUserType = function(){
						$state.go('index.user.addUserType')
					}
				}
			} 
		}
	}).state('index.user.highUsers', {
		url: '/highUsers',
		templateUrl: 'template/highUsers.html'
	}).state('index.user.normalUsers',{
		url: '/normalUsers',
		templateUrl: "template/normalUsers.html"
	}).state('index.user.lowerUsers', {
		url: '/lowerUsers',
		templateUrl: 'template/lowerUsers'
	}).state('index.user.addUserType', {
		url: '/addUserType',
		templateUrl: 'template/addUserType.html',
		controller: function($scope, $state){
			$scope.backToPrevious = function(){
				window.history.back()
			}
		}
	}).state('index.permission', {
		url: '/permission',
		views: {
			'main@index': {
				template: 'Permission Pages'
			}
		}
	}).state('index.report', {
		url: '/report',
		views: {
			'main@index': {
				template: 'Report Pages'
			}
		}
	}).state('index.settings', {
		url: '/settings',
		views: {
			'main@index': {
				template: 'Settings Pages'
			}
		}
	})
})