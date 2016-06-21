app.controller('MainController', ['$scope', function($scope) 
{ 

  var indexx;

  //localStorage.clear();

  $scope.appTitle = "Globant Movies Library";
  $scope.saved = localStorage.getItem('movies');
  //$scope.movies = (localStoragead.getItem('movies') !== null) ? JSON.parse($scope.saved) : [{
  if(localStorage.getItem('movies') !== "undefined" && localStorage.getItem('movies') !== "null")
   {
	 $scope.movies = JSON.parse($scope.saved);
   }
   else
   {
   $scope.movies = [{ 
    name: 'Terminator',
	year: '1981',
	duration: '94 min',
	img : 'terminator.jpg',
  }, {
	name: 'Back to the Future',
	year: '1985',
	duration: '120 min',
	img : 'back.jpg',
  }, {
  	name: 'Short Circuit',
	year: '1986',
	duration: '99 min',
	img : 'corto.jpg',
  }, {
	name: 'Karate Kid',
	year: '1984',
	duration: '86 min',
	img : 'karate.jpg',
  }];
  }
  localStorage.setItem('movies', JSON.stringify($scope.movies));

  $scope.addmovie = function() 
  {
	if($scope.edit)
	{
		var o = [{
			name: $scope.name,
			year: $scope.year,
			duration: $scope.duration,
			img : $scope.img,	 
		  }];
		$scope.movies[indexx] = o[0];
		$scope.edit = false;
		 //return;
	}
	else if(!$scope.edit)
	{
	
    $scope.movies.push({
      name: $scope.name,
	  year: $scope.year,
	  duration: $scope.duration,
	  img: $scope.img,
    });
	}
	$scope.edit = false;
    $scope.name = ''; //clear the input after adding
	$scope.year = ''; 
	$scope.duration = '';
	$scope.img = ''; 
	if(!$scope.edit)
    localStorage.setItem('movies', JSON.stringify($scope.movies));
	
  };
  
  $scope.editMovie= function(index){
        $scope.movie = $scope.movies[index];
		indexx = index;
		$scope.name = $scope.movie.name;
		$scope.year = $scope.movie.year
		$scope.duration = $scope.movie.duration ;
		$scope.img = $scope.movie.img;
        $scope.edit = true;
    };
   
   $scope.deleteMovie = function (index) {
		$scope.movies.splice(index, 1);	
		localStorage.setItem('movies', JSON.stringify($scope.movies));	
  };
  
}]);
