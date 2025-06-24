const express = require('express');
const dotenv = require('dotenv');


const sequelize = require('./models/koneksi');
const jadwaldokterRoutes = require('./routes/jadwaldokter');
const dokterRoutes  = require('./routes/dokter');
const loginRoutes  = require('./routes/login');
const authenticate  = require('./middleware/auth');




dotenv.config();
const app = express();

// Middleware
app.use(express.json());


// Route
app.use('/jadwaldokter', authenticate, jadwaldokterRoutes);
app.use('/dokter', authenticate ,dokterRoutes);
app.use('/login', loginRoutes);
// npm run start

// Sync database
sequelize.sync({ force: false }) // `force:true` untuk drop table
  .then(() => {
    console.log('Database connected!');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  });