const Jadwaldokter = require('../models/Jadwaldokter');
const Dokter = require('../models/Dokter');

Dokter.hasMany(Jadwaldokter, { foreignKey: "id" });  
Jadwaldokter.belongsTo(Dokter, { foreignKey: "dokterid" }); 

exports.getAll = async (req, res) => {
  const jadwaldokters = await Jadwaldokter.findAll({
  include: [
    {
    model: Dokter,
    required: true,  
     attributes: ["nama"],             
      }
    ],
    attributes: ["quota","status","id","createdAt","updatedAt","dokterid","date","day","time_start","time_finish"],
    raw: true,
    nest: false,  
  });
  res.json(jadwaldokters);
};

// exports.getById = async (req, res) => {
//   const jadwaldokter = await Jadwaldokter.findByPk(req.params.id);
//   if (!jadwaldokter) return res.status(404).send({ message: 'Not Found' });
//   res.json(jadwaldokter);
// };

exports.create = async (req, res) => {
  const { name, price } = req.body;
  const newJadwaldokter = await Jadwaldokter.create({ name, price });
  res.json(newJadwaldokter);
};

// exports.update = async (req, res) => {
//   const { id } = req.params;
//   const { name, price } = req.body;

//   const jadwaldokter = await Jadwaldokter.findByPk(id);
//   if (!jadwaldokter) return res.status(404).send({ message: 'Not Found' });
//   await jadwaldokter.update({ name, price });
//   res.json(jadwaldokter);
// };

// exports.delete = async (req, res) => {
//   const { id } = req.params;
//   const deleted = await Jadwaldokter.destroy({ where: { id } });
//   if (!deleted) return res.status(404).send({ message: 'Not Found' });
//   res.json({ message: 'Deleted successfully' });
// };