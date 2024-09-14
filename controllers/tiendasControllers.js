controllers/tiendasController.js
import Store from '../models/tiendas';

export const getStores = async (req, res) => {
  const stores = await Store.findAll();
  res.json(stores);
};

export const getStoreById = async (req, res) => {
  const store = await Store.findByPk(req.params.id);
  res.json(store);
};

export const createStore = async (req, res) => {
  const newStore = await Store.create(req.body);
  res.status(201).json(newStore);
};