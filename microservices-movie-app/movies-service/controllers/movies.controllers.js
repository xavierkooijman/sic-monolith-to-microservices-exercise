const moviesService = require("../services/movies.services");

const getMovies = async (req, res, next) => {
  try {
    const movies = await moviesService.getMovies();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await moviesService.getMovieById(req.params.id);
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

module.exports = { getMovies, getMovieById };
