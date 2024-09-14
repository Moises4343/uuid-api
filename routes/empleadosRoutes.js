import express from 'express';
import { createEmployee, getEmployeeById, getEmployees } from '../controllers/empleadosController.js';

const router = express.Router();

router.get('/api/v1/empleados', getEmployees);
router.get('/api/v1/empleados/:id', getEmployeeById);
router.post('/api/v1/empleados', createEmployee);

export default router;
