const { DataTypes } = require('sequelize');
const sequelize = require('./koneksi');

const User = sequelize.define('user', {
   username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
      freezeTableName: true,
  });

module.exports = User;