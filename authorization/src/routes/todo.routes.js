const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

router.use(auth);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
