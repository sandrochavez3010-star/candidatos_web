-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2026 a las 21:49:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comentarios_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuario`, `mensaje`, `fecha`) VALUES
(1, 'Sandro', 'Keiko es una mrd', '2026-04-22 08:36:24'),
(2, 'Rodrigo', 'Porky solo sabe tragar', '2026-04-22 08:36:24'),
(22, 'Carlos', 'Aún no me decido, hay propuestas interesantes pero necesito comparar mejor.', '2026-04-22 09:14:49'),
(23, 'Valeria', 'Estoy revisando propuestas, quiero asegurarme antes de elegir.', '2026-04-22 09:14:49'),
(24, 'Diego', 'Hay diferencias claras entre opciones, eso ayuda a decidir.', '2026-04-22 09:14:49'),
(25, 'Camila', 'Me gustaría ver más información concreta para tomar una mejor decisión.', '2026-04-22 09:14:49'),
(26, 'Mateo', 'Hay una opción que me parece más coherente, pero sigo dudando.', '2026-04-22 09:14:49'),
(27, 'Sofía', 'Comparar propuestas aquí es fácil, eso ayuda bastante.', '2026-04-22 09:14:49'),
(28, 'Javier', 'Algunas ideas son buenas, pero otras se sienten incompletas.', '2026-04-22 09:14:49'),
(29, 'Fernanda', 'Todavía no estoy segura, pero ya tengo una opción en mente.', '2026-04-22 09:14:49'),
(30, 'Luis', 'Se nota quién tiene propuestas más claras.', '2026-04-22 09:14:49'),
(31, 'Daniela', 'Me gustaría ver ejemplos concretos de lo que proponen.', '2026-04-22 09:14:49'),
(32, 'Marco', 'Hay opciones que generan más confianza que otras.', '2026-04-22 09:14:49'),
(33, 'Elena', 'Estoy entre dos opciones, ambas tienen puntos fuertes.', '2026-04-22 09:14:49'),
(34, 'Raúl', 'Voy a revisar todo bien antes de decidir, pero ya tengo una inclinación.', '2026-04-22 09:14:49'),
(36, 'Tú', 'acuña es un webon p', '2026-04-22 09:21:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
