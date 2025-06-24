const { DataTypes } = require('sequelize');
const sequelize = require('./koneksi');

const Day = sequelize.define('day', {
  nama : {
    type: DataTypes.STRING,
  },
}, {
      freezeTableName: true,
      timestamps: false,
  });

module.exports = Day;
Day.removeAttribute('id');