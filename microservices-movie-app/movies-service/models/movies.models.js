let movies = [
  { id: 1, title: "Treasure Planet", year: 2002 },
  { id: 2, title: "The Matrix", year: 1999 },
];

const getMovies = async () => {
  return movies;
};

const getMovieById = async (id) => {
  return movies.find((m) => m.id === parseInt(id));
};

module.exports = { getMovies, getMovieById };
