const reviewsService = require("../services/reviews.services");

const getReviews = async (req, res, next) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.description = 'Get all reviews or filter by movieId'
  #swagger.responses[200] = {
    description: 'Reviews retrieved successfully',
    schema: [{ $ref: '#/definitions/GetReview' }]
  }
  */
  try {
    const { movieId } = req.query;
    if (movieId) {
      const reviews = await reviewsService.getReviewsByMovieId(movieId);
      return res.status(200).json(reviews);
    }
    const reviews = await reviewsService.getReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

const getReviewById = async (req, res, next) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.description = 'Get a review by ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Review ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: 'Review retrieved successfully',
    schema: { $ref: '#/definitions/GetReview' }
  }
  #swagger.responses[400] = { description: 'Invalid id format' }
  #swagger.responses[404] = { description: 'Review not found' }
  #swagger.responses[500] = { description: 'Internal Server Error' }
  */
  try {
    const { id } = req.params;
    
    // 400 Bad Request - ID inválido (não é número)
    if (Number.isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return res.status(400).json({ error: "Invalid id format. Must be a positive integer" });
    }
    
    const review = await reviewsService.getReviewById(id);
    res.status(200).json(review);
  } catch (error) {
    // 404 Not Found - lançado pelo service quando review não existe
    // 500 Internal Server Error - tratado pelo middleware de erros
    next(error);
  }
};

const createReview = async (req, res, next) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.description = 'Create a new review'
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'New review object',
    required: true,
    schema: { $ref: '#/definitions/CreateReview' }
  }
  #swagger.responses[201] = {
    description: 'Review created successfully',
    schema: { $ref: '#/definitions/GetReview' }
  }
  #swagger.responses[400] = { description: 'Invalid data' }
  */
  try {
    const newReview = await reviewsService.createReview(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.description = 'Delete a review by ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Review ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[204] = { description: 'Review deleted successfully' }
  #swagger.responses[404] = { description: 'Review not found' }
  */
  try {
    await reviewsService.deleteReview(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  /*
  #swagger.tags = ['Reviews']
  #swagger.description = 'Update a review by ID'
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Review ID',
    required: true,
    type: 'integer'
  }
  #swagger.parameters['body'] = {
    in: 'body',
    description: 'Updated review object',
    required: true,
    schema: { $ref: '#/definitions/UpdateReview' }
  }
  #swagger.responses[200] = {
    description: 'Review updated successfully',
    schema: { $ref: '#/definitions/GetReview' }
  }
  #swagger.responses[404] = { description: 'Review not found' }
  #swagger.responses[400] = { description: 'Invalid data' }
  */
  try {
    const updatedReview = await reviewsService.updateReview(req.params.id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    next(error);
  }
};

module.exports = { getReviews, getReviewById, createReview, deleteReview, updateReview };