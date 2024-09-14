import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/db.js';
import empleadosRoutes from './routes/empleadosRoutes.js';
import tiendasRoutes from './routes/tiendasRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(usuariosRoutes);
app.use(tiendasRoutes);
app.use(empleadosRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
