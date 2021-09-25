const { Router } = require('express');
const router = Router();
const ctrl = require('./posts.ctrl');

// Create
router.post('/', ctrl.create_posts);
// Update
router.put('/:id', ctrl.update_post);
// Read
router.get('/', ctrl.get_posts);
// Delete
router.delete('/:id', ctrl.delete_post);

module.exports = router;
