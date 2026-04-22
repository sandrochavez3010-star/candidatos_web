const express = require('express');
const router = express.Router();
const { db } = require('../db/index'); // Tu instancia de conexión
const { users } = require('../db/schema');
const { eq } = require('drizzle-orm');
const bcrypt = require('bcryptjs');

// RUTA: Registro
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // 1. Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Insertar en DB usando Drizzle
    const newUser = await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword,
    }).returning();

    res.status(201).json({ message: "Usuario creado", user: newUser[0].email });
  } catch (error) {
    res.status(400).json({ error: "El correo ya existe o faltan datos" });
  }
});

// RUTA: Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Buscar usuario
  const user = await db.select().from(users).where(eq(users.email, email));

  if (user.length === 0) return res.status(404).json({ error: "Usuario no encontrado" });

  // Verificar contraseña
  const validPassword = await bcrypt.compare(password, user[0].password);
  if (!validPassword) return res.status(401).json({ error: "Contraseña incorrecta" });

  res.json({ message: "Bienvenido", user: user[0].fullName });
});

module.exports = router;