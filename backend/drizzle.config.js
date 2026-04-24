import 'dotenv/config'; // Importante para que lea el DATABASE_URL
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/db/schema.js", // Ruta a tu archivo de tablas
  out: "./drizzle",            // Carpeta donde se guardarán las migraciones
  dialect: 'postgresql',       // El motor que configuraste
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});