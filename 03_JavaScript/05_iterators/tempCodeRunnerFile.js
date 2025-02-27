movieRatings.forEach((movie)=>{
    movie.ratings=(movie.ratings.reduce((acc,num)=> acc+num)/movie.ratings.length).toPrecision(3);
})