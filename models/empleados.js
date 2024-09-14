import sequelize from '../config/db.js';

const Empleados = sequelize.define('Empleados', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  puesto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tiendasId: {
    type: DataTypes.UUID,
    references: {
      model: 'Tiendas',
      key: 'id',
    },
  },
});

export default Empleados;
