let movies = [
  {
    title: "Fight Club",
    rank: 10,
    id: "tt0137532",
  },
  {
    title: "The Shawshank Redemption",
    rank: 1,
    id: "tt0111161",
  },
  {
    title: "The Lord of the Rings",
    rank: 9,
    id: "tt0167260",
  },
  {
    title: "The Godfather",
    rank: 2,
    id: "tt068646",
  },
  {
    title: "The Good ,the Bad and the ugly",
    rank: 5,
    id: "tt060196",
  },
  {
    title: "The Dark Kniight",
    rank: 6,
    id: "tt0468569",
  },
  {
    title: "Pulp Fiction",
    rank: 4,
    id: "tt011092",
  },
  {
    title: "Schindler's List",
    rank: 8,
    id: "tt0108052",
  },
  {
    title: "12 Angry Man",
    rank: 7,
    id: "tt005083",
  },
  {
    title: "The Godfather : Part II",
    rank: 3,
    id: "tt007162",
  },
];

window.onload = function () {
  //   let sortedMovies  =sortMoviesByRank(movies);
  let sortedMovies = sortMoviesByAttribute(movies, "id");
  displayMovies(sortedMovies);
  console.log(a>b)
};

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
