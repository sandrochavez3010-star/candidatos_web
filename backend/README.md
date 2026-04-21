# Backend - Sistema de Autenticación

Este proyecto es el backend de un sistema de autenticación de usuarios (login y registro), desarrollado con Node.js y conectado a una base de datos MySQL.

---

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- CORS

---

## Instalación

Clonar el repositorio y entrar a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:
```bash
npm install
```

## Confi de la BD

Crea un bd en mysql con el nombre:
```bash
candidatos_web
```
Creas la tabla usuarios
```bash
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100)
);
```

## Ejecuta

```bash
node server.js
```
