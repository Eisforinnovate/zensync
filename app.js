// The main application script, ties everything together.
var express = require('express');
var app = module.exports = express();

//configure express app
app.configure(function(){
  app.use(express.bodyParser());
  app.use(app.router);
});

//set the route for the static content
app.use(express.static(__dirname + '/web-app'));
//start the server on the port
app.listen(process.env.PORT || 8080);
console.log("Express server listening on port %d", process.env.PORT || 8080);

<script>
//firebase login with facebook
    //var ref = new Firebase('https://boiling-fire-2567.firebaseio.com');
    $rootScope.auth = loginService.getAuth();

    $scope.logout = function(){
        $rootScope.auth.$logout();
        $rootScope.auth.user = null;
        $location.path('/login');
    };

    $scope.login = function(provider){
        $rootScope.auth.$login(provider);

    }

});
</script>