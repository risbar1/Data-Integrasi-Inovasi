const { DataTypes } = require('sequelize');
const sequelize = require('./koneksi');

const Jadwaldokter = sequelize.define('jadwal_dokter', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  dokterid: {
    type: DataTypes.INTEGER,
  },
  quota: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
  },
  date : {
    type: DataTypes.DATE,
  },
  day : {
    type: DataTypes.STRING,
  },
  time_start : {
    type: DataTypes.TIME,
  },
  time_finish : {
    type: DataTypes.TIME,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, {
      freezeTableName: true,
  });

module.exports = Jadwaldokter;