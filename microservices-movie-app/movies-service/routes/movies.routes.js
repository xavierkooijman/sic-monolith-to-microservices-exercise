const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies.controllers");

router.get("/", moviesController.getMovies);
router.get("/:id", moviesController.getMovieById);
module.exports = router;
