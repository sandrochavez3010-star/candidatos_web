# 🏛️ Voto Informado Perú 2026

Plataforma ciudadana independiente desarrollada para fomentar un voto consciente en las Elecciones Generales 2026. La aplicación ofrece acceso a hojas de vida, propuestas y una guía sobre la nueva bicameralidad en el Perú.

## 🚀 Estructura del Proyecto

El proyecto utiliza una arquitectura de **Client-Server**:

* **/frontend**: Desarrollado con **Astro.js**, enfocado en la velocidad, SEO y una experiencia de usuario fluida.
* **/backend**: Desarrollado con **Node.js y Express**, encargado de la gestión de base de datos, comentarios en tiempo real y autenticación.

### Backend
* **Express.js**: Framework de servidor.
* **CORS**: Para comunicación segura entre dominios.
* **Dotenv**: Gestión de variables de entorno.
* **Nodemon**: Herramienta de desarrollo para reinicio automático.

## 📁 Organización de Archivos

```text
CANDIDATOS_WEB/
├── backend/                # Servidor API Express
│   ├── src/
│   │   └── app.js          # Punto de entrada del servidor
│   ├── .env                # Variables sensibles (DB, Ports)
│   └── package.json
├── src/                    # Frontend Astro
│   ├── components/         # Componentes modulares (Hero, News, etc.)
│   ├── pages/              # Rutas (Index, Dashboard, Login)
│   └── styles/             # CSS Global y específico
├── public/                 # Recursos estáticos (Imágenes, Logos)
└── astro.config.mjs        # Configuración de Astro