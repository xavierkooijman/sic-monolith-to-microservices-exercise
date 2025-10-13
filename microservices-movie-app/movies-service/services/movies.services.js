const moviesModel = require("../models/movies.models");
const axios = require("axios");

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

  // Fetch reviews from the reviews service
  const movieReviews = await axios.get(
    `http://localhost:5002/reviews?movieId=${id}`
  );
  console.log(movieReviews.data);
  movie.reviews = movieReviews.data;

  return movie;
};

module.exports = { getMovies, getMovieById };
