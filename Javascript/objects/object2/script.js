var movies = [
  {
    title: "Iron Man",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Prisoner of Ezkaban",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "The Italian Job",
    rating: 4,
    hasWatched: false
  }
]

  movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
      result += "watched ";
    } else {
      result += "not seen "
    }
    result +="\"" + movie.title + "\" - ";
    result += movie.rating + " stars"
    console.log(result)
  })


// Or you could do it this way:
  function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
      result += "watched ";
    } else {
      result += "not seen "
    }
    result +="\"" + movie.title + "\" - ";
    result += movie.rating + " stars"
    return result;
  }

  movies.forEach(function(movie){
    console.log(buildString(movie));
  });
