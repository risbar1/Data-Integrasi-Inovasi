
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Cek user berdasarkan username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Username tidak ditemukan' });
    }

    // 2. Verifikasi password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({ message: 'Password salah' });
    }

    // 3. Buat JWT
    const payload = {
      id: user.id,
      username: user.username,
    };
    const token = jwt.sign(payload, 'SECRET_KEY_JWT_##', {
      expiresIn: '1h',
    });

    // 4. Berikan Token
    res.json({ message: 'Login berhasil', token });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan' });
  }
};