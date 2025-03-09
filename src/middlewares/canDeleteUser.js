const canDeleteUser = (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id.toString();
  const userRol = req.user.rol;

  if (userRol === 'admin') {
    return next();
  }

  if (id !== userId) {
    return res
      .status(403)
      .json('No tienes permiso para eliminar a otro usuario');
  }
  next();
};

module.exports = { canDeleteUser };
