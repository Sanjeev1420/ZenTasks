
class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating==undefined?"PG":rating;
    }

    static getPg(mvs) {
        return mvs.filter((mv) => mv.rating === "PG"); 
    }
}


// a first instance of class movie is created with given details
const mv1 = new movie("Casino Royale","Eon Productions","PG13");
console.log(mv1);


//getPg() methode is invocked by creating some new instances
const mv2 = new movie("Good Night","Million Dolar Studios");
const mv3 = new movie("Jailer","Sun Pictures","PG15");
const mv4 = new movie("Maveeran","Shanthi Talkies");

let movies = [mv1,mv2,mv3,mv4];
console.log(movie.getPg(movies)); 
