# 🗳️ Sistema Web de Candidatos Políticos (Cards + Fichas + PDF + Comentarios)

## 📌 Descripción general

Este proyecto es una aplicación web desarrollada para la visualización e interacción con información de candidatos políticos.

El sistema permite ver candidatos en formato de tarjetas, abrir fichas detalladas con información completa, exportar esa información en PDF y participar mediante un sistema de comentarios tipo chat en tiempo real.

Está desarrollado como un sistema completo integrando frontend y backend.

---

## 🚀 Funcionalidades principales

### 🧱 Sistema de tarjetas (Cards de candidatos)

Se implementó un sistema de tarjetas que muestra a los candidatos de manera visual y ordenada en formato tipo dashboard.

Cada tarjeta contiene información resumida como:
- Nombre del candidato
- Partido político
- Cargo o región
- Estado (alerta o limpio)
- Historial político resumido

Las tarjetas tienen interacción visual (hover), lo que mejora la experiencia del usuario y hace más dinámico el sistema.

---

### 🧾 Fichas detalladas (Modal)

Al seleccionar una tarjeta, se abre una ficha detallada del candidato en un modal.

Esta ficha organiza la información en secciones como:
- Hoja de vida
- Trayectoria política
- Propuestas

El diseño está estructurado como una ficha informativa moderna, mejorando la lectura y organización de los datos.

---

### 📥 Exportación a PDF

El sistema permite generar un archivo PDF de la ficha del candidato.

El documento incluye la información principal organizada de forma clara, permitiendo al usuario descargar y guardar la información de cada candidato.

---

### 💬 Sistema de comentarios

Se implementó un sistema de comentarios tipo chat donde los usuarios pueden escribir y ver mensajes en tiempo real.

Características:
- Envío de comentarios con botón o tecla Enter
- Visualización tipo chat
- Avatares con iniciales
- Colores dinámicos por usuario
- Scroll automático hacia los últimos mensajes

---

### 🗄️ Persistencia de datos

Los comentarios se almacenan en una base de datos MySQL mediante una API en PHP.

El sistema permite:
- Guardar comentarios nuevos
- Cargar comentarios existentes al iniciar la página
- Mantener la información persistente

---

## 🧠 Problemas solucionados durante el desarrollo

Durante el desarrollo se resolvieron varios problemas importantes como:
- Errores al abrir las fichas (modal)
- Problemas de renderizado de tarjetas
- Comentarios duplicados
- Validación de inputs vacíos
- Integración entre frontend y backend
- Correcta conexión con la base de datos

---

## 🎯 Resultado final

El proyecto final es un sistema funcional que incluye:

- Visualización de candidatos mediante cards interactivas
- Fichas detalladas con información estructurada
- Exportación de información en PDF
- Sistema de comentarios en tiempo real
- Integración completa con base de datos MySQL

---

## 🛠️ Tecnologías utilizadas

- Astro
- JavaScript
- CSS3
- PHP
- MySQL
- XAMPP
- jsPDF

---
