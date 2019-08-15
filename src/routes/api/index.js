const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

router.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({
      error: {
        message: err.error.message,
      },
    });
  } else {
    res.status(500).json({
      error: {
        message: err.message,
      },
    });
  }

  return next(err);
});

module.exports = router;
