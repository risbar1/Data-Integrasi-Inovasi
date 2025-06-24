const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./models/koneksi');
const jadwaldokterRoutes = require('./routes/jadwaldokter');
const dokterRoutes  = require('./routes/dokter');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Route
app.use('/jadwaldokter', jadwaldokterRoutes);
app.use('/dokter', dokterRoutes);

// npm run start

// Sync database
sequelize.sync({ force: false }) // `force:true` untuk drop table
  .then(() => {
    console.log('Database connected!');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  });