const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies.controllers");

router.get("/", moviesController.getMovies);
router.get("/:id", moviesController.getMovieById);
router.post("/", moviesController.createMovie);
router.put("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);

module.exports = router;
