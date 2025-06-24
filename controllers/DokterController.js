const Dokter = require('../models/Dokter');

exports.getAll = async (req, res) => {
  const dokter = await Dokter.findAll();
  res.json(dokter);
};
