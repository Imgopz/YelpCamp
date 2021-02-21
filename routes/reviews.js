const express = require('express');
const router = express.Router({ mergeParams: true }); // otherwise the id wont be sent via express
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

// Review Controller of MVC
const reviews = require('../controllers/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;