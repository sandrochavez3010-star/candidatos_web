const express = require('express');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/api/auth', authRoutes);

app.listen(4000, () => console.log("Servidor en puerto 4000"));