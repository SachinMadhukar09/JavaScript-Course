let movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "01",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "02",
  },
  {
    title: "The Lord of the Rings",
    rank: 9,
    id: "03",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "04",
  },
  {
    title: "The Good ,the Bad and the ugly",
    rank: 5,
    id: "05",
  },
  {
    title: "The Dark Kniight",
    rank: 6,
    id: "06",
  },
  {
    title: "Pulp Fiction",
    rank: 4,
    id: "07",
  },
  {
    title: "Schindler's List",
    rank: 8,
    id: "08",
  },
  {
    title: "12 Angry Man",
    rank: 7,
    id: "09",
  },
  {
    title: "The Godfather : Part II",
    rank: 3,
    id: "10",
  },
];

window.onload = function () {
    // let sortedMovies  =sortMoviesByRank(movies);
  document.getElementById("id").addEventListener("click",ById)
  document.getElementById("rank").addEventListener("click",ByRank) 
  document.getElementById("name").addEventListener("click",ByName)
  // let sortedMovies = sortMoviesByAttribute(movies, "name");
  displayMovies();
  console.log(a>b)
};

function ByRank(){
  let sortedMovies = sortMoviesByAttribute(movies, "rank");
  displayMovies(sortedMovies);
}

function ById(){
  let sortedMovies = sortMoviesByAttribute(movies, "id");
  displayMovies(sortedMovies);
}

function ByName(){
  let sortedMovies = sortMoviesByAttribute(movies, "name");
  displayMovies(sortedMovies);
}

function displayMovies() {
  let table = "<table border='1' style='width:100%'> ";
  table += "<tr><th>ID</th><th>Name</th><th>Rank</th><tr>";
  for (let index = 0; index < movies.length; index++) {
    table += "<tr>";
    table += "<td>" + movies[index].id + "</td>";
    table += "<td>" + movies[index].title + "</td>";
    table += "<td>" + movies[index].rank + "</td>";
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("movie-list").innerHTML = table;
}

function sortMoviesByRank(movies) {
  for (let j = 0; j < movies.length - 1; j++) {
    let max_obj = movies[j];
    let max_location = j;

    for (let i = j; i < movies.length; i++) {
      if (movies[i].rank > max_obj.rank) {
        max_obj = movies[i];
        max_location = i;
      }
    }
    movies[max_location] = movies[j];
    movies[j] = max_obj;
  }
  return movies;
}

function sortMoviesByAttribute(movies, sortAttribute) {
  for (let j = 0; j < movies.length - 1; j++) {
    let max_obj = movies[j];
    let max_location = j;

    for (let i = j; i < movies.length; i++) {
      if (movies[i][sortAttribute] > max_obj[sortAttribute]) {
        max_obj = movies[i];
        max_location = i;
      }
    }
    movies[max_location] = movies[j];
    movies[j] = max_obj;
  }
  return movies;
}
