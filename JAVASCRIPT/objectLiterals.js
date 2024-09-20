const movie = {
    title: 'The Avengers',
    year:2012,
    genre: 'Action, Sci-fi, Thriller',
    cast:{
        main_lead:'Iron Man',
        others:'Captain America',
    },
    getDetails:function(){
        console.log(`Title: ${movie.title}|nYear: ${movie.year}|nGenre: ${movie.genre}|nCast: ${movie.cast}`);
    },
    getMovieDetails:function(detail){
        console.log(movie[detail]);
    },
};
console.log(movie.title);
movie.getDetails();
const detail = 'year';
movie.getMovieDetails(detail);
console.log(movie.cast.main_lead);