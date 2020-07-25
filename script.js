const numberOffFilms=+prompt("siz necha film ko'rgansiz",'');

const personalMovieDB={
    count:numberOffFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a=prompt("oxirgi ko'rgan filmingiz?",""),
      b=prompt("necha baho berasiz?",""),
      c=prompt("oxirgi ko'rgan filmingiz?",""),
      d=prompt("necha baho berasiz?","");

      personalMovieDB.movies[a]=b;
      personalMovieDB.movies[c]=d;
console.log(personalMovieDB);

