function Movie(title,year){
    this.title = title;
    this.year = year;
    this.getDetails = function() {
        console.log(`Title: ${this.title}
            Year: ${this.year}`);
    };
}
const movie = new Movie('Avatar',2013);
console.log(movie);
movie.getDetails();