const { DataTypes } = require('sequelize');
const sequelize = require('./koneksi');

const Jadwaldosen = sequelize.define('dokter', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nama : {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, {
      freezeTableName: true,
  });

module.exports = Jadwaldosen;