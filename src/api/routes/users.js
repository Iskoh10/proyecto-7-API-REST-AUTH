const { canDeleteUser } = require('../../middlewares/canDeleteUser');
const { isAdmin } = require('../../middlewares/isAdmin');
const { isAuth } = require('../../middlewares/isAuth');
const {
  getUsers,
  register,
  login,
  updateUser,
  deleteUser
} = require('../controllers/users');
const usersRouter = require('express').Router();

usersRouter.post('/register', register);
usersRouter.put('/:id', [isAdmin], updateUser);
usersRouter.post('/login', login);
usersRouter.delete('/:id', [isAuth, canDeleteUser], deleteUser);
usersRouter.get('/', [isAuth], getUsers);

module.exports = usersRouter;
