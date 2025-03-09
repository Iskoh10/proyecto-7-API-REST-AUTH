const { generateSign } = require('../../utils/jwt');
const { User } = require('../models/users');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    const userDuplicated = await User.findOne({ email: req.body.email });

    if (userDuplicated) {
      return res.status(400).json('Este usuario ya existe');
    }

    const userSaved = await user.save();
    return res.status(200).json(userSaved);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json('Usuario o contraseña incorrectos');
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = generateSign(user._id);
      return res.status(200).json({ token, user });
    } else {
      return res.status(400).json('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    return res.status(400).json('error');
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate({
      path: 'nameProjects',
      populate: {
        path: 'organism',
        collection: 'organisms'
      }
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUser = new User(req.body);
    newUser._id = id;
    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true
    });
    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(400).json('error');
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json(userDeleted);
  } catch (error) {
    return res.status(400).json('error');
  }
};
module.exports = { register, login, getUsers, updateUser, deleteUser };
