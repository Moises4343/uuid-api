import express from 'express';
import { createStore, getStoreById, getStores } from '../controllers/tiendasController.js';

const router = express.Router();

router.get('/api/v1/tiendas', getStores);
router.get('/api/v1/tiendas/:id', getStoreById);
router.post('/api/v1/tiendas', createStore);

export default router;
