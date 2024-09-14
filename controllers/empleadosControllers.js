controllers/empleadosController.js
import Employee from '../models/empleados';

export const getEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

export const getEmployeeById = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);
  res.json(employee);
};

export const createEmployee = async (req, res) => {
  const newEmployee = await Employee.create(req.body);
  res.status(201).json(newEmployee);
};