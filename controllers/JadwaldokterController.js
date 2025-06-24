const Jadwaldokter = require('../models/Jadwaldokter');
const Dokter = require('../models/Dokter');
const Day = require('../models/Day');

Dokter.hasMany(Jadwaldokter, { foreignKey: "id" });  
Jadwaldokter.belongsTo(Dokter, { foreignKey: "dokterid" }); 

exports.getAll = async (req, res) => {
  const { Op } = require('sequelize');
  const startDate = req.query.date_range_start;
  const endDate = req.query.date_range_finish;

  const jadwaldokters = await Jadwaldokter.findAll({
  include: [
    {
    model: Dokter,
    required: true,  
     attributes: ["nama"],             
      }
    ],
    attributes: ["quota","status","id","createdAt","updatedAt","dokterid","date","day","time_start","time_finish"],
    where: {
    date: {
      [Op.between]: [startDate, endDate],
    },
    },
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
  const { quota, status, dokterid, date, day, time_start, time_finish } = req.body;

  // validasi dokter
  const countdokter = await Dokter.findAndCountAll({
  where: {
    id: dokterid
  },
});
  if (countdokter.count  === 0) {
    return res.json({ message: 'Data Tidak ada di table referensi Dokter' });
  }
  // validasi dokter


  
  // validasi day
  const countday = await Day.findAndCountAll({
      where: {
        nama: day
      },
    });
  if (countday.count === 0) {
    return res.json({ message: 'Data Tidak ada di table referensi Day' });
  }
  // validasi day

  const newJadwaldokter = await Jadwaldokter.create({ quota, status, dokterid, date, day, time_start, time_finish });
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