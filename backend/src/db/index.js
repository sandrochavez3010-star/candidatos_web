const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const schema = require('./schema');
require('dotenv').config();

// La URL de conexión viene de tu archivo .env
const connectionString = process.env.DATABASE_URL;

// Crear el cliente de la base de datos
const client = postgres(connectionString, { prepare: false });

// Inicializar Drizzle con el esquema que definimos antes
const db = drizzle(client, { schema });

module.exports = { db };