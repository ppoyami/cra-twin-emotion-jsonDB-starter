const { Router } = require('express');
const router = Router();

router.use('/posts', require('./posts'));

module.exports = router;
