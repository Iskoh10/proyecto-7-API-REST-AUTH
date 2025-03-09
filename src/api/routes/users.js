const {
  getUsers,
  register,
  login,
  updateUser,
  deleteUser
} = require('../controllers/users');
const usersRouter = require('express').Router();

usersRouter.post('/register', register);
usersRouter.put('/:id', updateUser);
usersRouter.post('/login', login);
usersRouter.delete('/:id', deleteUser);
usersRouter.get('/', getUsers);

module.exports = usersRouter;
