
import User from '../models/usuarios';
controllers/usuarioController.js                                                                                                                                                                                                            


export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

export const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};