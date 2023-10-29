const filteredList = watchList.map(function(individualMovie){
  let refinedMovieData = {};
refinedMovieData.title = individualMovie.Title;
refinedMovieData.rating = individualMovie.imdbRating;
return refinedMovieData;
}).filter(function(individualMovie){
  let ratingInteger =parseFloat(individualMovie.rating);
  if(ratingInteger >= 8.0){
    return individualMovie;
  }
});