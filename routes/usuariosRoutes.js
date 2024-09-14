import express from 'express';
import { createUser, getUserById, getUsers } from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/api/v1/usuarios', getUsers);
router.get('/api/v1/usuarios/:id', getUserById);
router.post('/api/v1/usuarios', createUser);

export default router;
