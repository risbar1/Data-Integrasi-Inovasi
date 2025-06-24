const Jadwaldosen = require('../models/Jadwaldosen');

exports.getAll = async (req, res) => {
  const jadwaldosens = await Jadwaldosen.findAll();
  res.json(jadwaldosens);
};

exports.getById = async (req, res) => {
  const jadwaldosen = await Jadwaldosen.findByPk(req.params.id);
  if (!jadwaldosen) return res.status(404).send({ message: 'Not Found' });
  res.json(jadwaldosen);
};

exports.create = async (req, res) => {
  const { name, price } = req.body;
  const newJadwaldosen = await Jadwaldosen.create({ name, price });
  res.json(newJadwaldosen);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const jadwaldosen = await Jadwaldosen.findByPk(id);
  if (!jadwaldosen) return res.status(404).send({ message: 'Not Found' });
  await jadwaldosen.update({ name, price });
  res.json(jadwaldosen);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deleted = await Jadwaldosen.destroy({ where: { id } });
  if (!deleted) return res.status(404).send({ message: 'Not Found' });
  res.json({ message: 'Deleted successfully' });
};