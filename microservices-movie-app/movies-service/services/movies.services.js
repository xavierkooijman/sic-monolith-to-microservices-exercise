const moviesModel = require("../models/movies.models");

const getMovies = async () => {
  return await moviesModel.getMovies();
};

const getMovieById = async (id) => {
  const movie = await moviesModel.getMovieById(id);

  if (!movie) {
    const error = new Error("Movie not found");
    error.status = 404;
    throw error;
  }

  return movie;
};

module.exports = { getMovies, getMovieById };
