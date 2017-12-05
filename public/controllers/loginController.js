app.controller('loginCtrl', ['$scope', function ($scope) {
    $scope.reseted = true;
    $scope.signin = {};
    $scope.sign = function(){
        if($scope.loginForm.$invalid){
            alert("One of the fields are invalid, please fix it")
        } else {
            console.log($scope.signin);
            $scope.loginAccount($scope.signin).then(redirect).catch(onErr);
        }
    };

    $scope.register = {};
    // setInterval(function(){
    //     console.log($scope.signForm);
    // }, 500);
    $scope.reg = function(){
        if($scope.signForm.$invalid){
            alert("One of the fields are invalid, please fix it")
        } else {
            $scope.createNewAccount($scope.register).then(redirect).catch(onErr)
        }
    };
    $scope.forgot = {};
    $scope.forget = function(){
        if($scope.signForm.$invalid){
            alert("One of the fields are invalid, please fix it")
        } else {
            $scope.forgotMyPass($scope.forgot).then(redirect).catch(onErr)
        }
    };

    $scope.resetPass = function() {
        if ($scope.resetForm.$invalid) {
            console.log($scope.resetForm);
            alert("One of the fields are invalid, please fix it")
        } else {
            $scope.resetApi($scope.forgot.username).then(function(){
                alert("Success, please check your email please..");
                $scope.reseted = false;
                window.location.hash = 'login';
            }).catch(function(err){
                console.log(err);
                alert("Failed, check your username and try again...");
            })

        }
    }

    function redirect(resp){
        window.location = '/';
    }
    function onErr(err){
        console.log(err);
        alert(err.data);
    }
}]);