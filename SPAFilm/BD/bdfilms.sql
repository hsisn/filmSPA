-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 07 Avril 2018 à 07:00
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `bdfilms`
--
CREATE DATABASE IF NOT EXISTS `bdfilms` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `bdfilms`;

-- --------------------------------------------------------

--
-- Structure de la table `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_title` varchar(200) NOT NULL,
  `banner_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `banner`
--

INSERT INTO `banner` (`banner_id`, `banner_title`, `banner_image`) VALUES
(1, 'Banner 1', 'banner-1.jpg'),
(2, 'Banner 2', 'banner-2.jpg'),
(3, 'Banner 3', 'banner-3.jpg'),
(4, 'Banner 4', 'banner-4.jpg'),
(5, 'Banner 5', 'banner-5.jpg'),
(6, 'Banner 6', 'banner-6.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `display_name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL,
  `date_added` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `member`
--

INSERT INTO `member` (`id`, `first_name`, `last_name`, `display_name`, `email`, `password`, `date_added`) VALUES
(1, 'Jay', 'Pabs', 'jaypabs', 'asdf@gmail.com', '202cb962ac59075b964b07152d234b70', '2016-11-12 20:24:33'),
(2, 'nadjib', 'larkem', 'nadj851', 'nadjiblar@hotmail.fr', '21232f297a57a5a743894a0e4a801fc3', '2018-02-19 21:53:07'),
(3, 'NONO', 'LOLO', 'nadj851', 'naar8@hotmail.com', '202cb962ac59075b964b07152d234b70', '2018-02-21 03:57:17'),
(4, 'admin', 'admin', 'admin', 'admin@admin.com', '21232f297a57a5a743894a0e4a801fc3', '2018-02-25 20:39:53'),
(5, 'nana', 'lala', 'jas', 'jas@hotmail.com', '202cb962ac59075b964b07152d234b70', '2018-03-03 18:39:43');

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE IF NOT EXISTS `panier` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `idf` int(11) NOT NULL,
  `email` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=43 ;

--
-- Contenu de la table `panier`
--

INSERT INTO `panier` (`id`, `idf`, `email`) VALUES
(24, 3, 'admin@admin.com'),
(25, 4, 'admin@admin.com'),
(27, 3, 'naar8@hotmail.com'),
(34, 7, 'naar8@hotmail.com'),
(41, 5, 'jas@hotmail.com'),
(42, 4, 'jas@hotmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `tabfilms`
--

CREATE TABLE IF NOT EXISTS `tabfilms` (
  `idf` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `duree` int(11) NOT NULL,
  `res` varchar(60) CHARACTER SET utf8 NOT NULL,
  `cat` varchar(60) CHARACTER SET utf8 NOT NULL,
  `prix` decimal(50,0) NOT NULL,
  `pochette` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lienFilm` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'www',
  PRIMARY KEY (`idf`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=33 ;

--
-- Contenu de la table `tabfilms`
--

INSERT INTO `tabfilms` (`idf`, `titre`, `duree`, `res`, `cat`, `prix`, `pochette`, `lienFilm`) VALUES
(3, 'Blade runner 2049 ', 120, 'VILLENEUVE DENIS', 'ACTION', '19', '9261ef8ace6a359717cc84538f312c625f4b590b.jpg', 'https://www.youtube.com/embed/dZOaI_Fn5o4'),
(4, 'Jumanji', 120, 'JAKE KASDAN', 'ACTION', '260', '8b3650ab8fc4afa848297c1c6948fba45a501f53.jpg', 'https://www.youtube.com/embed/2QKg5SZ_35I'),
(5, 'Thor', 180, 'WAITITI TAIKA ', 'Action', '29', 'cd69016d66e7e6239d7c1b2e25510c6032aadc1e.jpg', 'https://www.youtube.com/embed/ue80QwXMRHg'),
(6, 'The Greatest Showman ', 120, 'GRACEY MICHAEL ', 'DRAME', '24', '6d9ea36884b9887d9a20ac9bbf5a32e78f762031.jpg', 'https://www.youtube.com/embed/AXCTMGYUg9A'),
(7, 'Arthur l''aventurier', 140, 'ARTHUR L''AVENTURIER', 'POUR LA FAMILLE', '17', '97f9ba15023f7a3fd1c84832636e2c8c5e4e7d35.jpg', 'https://www.youtube.com/embed/abGsxWVi5gA'),
(8, 'Murder on the orient express ', 120, 'BRANAGH KENNETH ', 'SUSPENSE', '24', 'b44ecf0015784a77205a7944592fb95dc9aa8558.jpg', 'https://www.youtube.com/embed/Mq4m3yAoW8E'),
(9, 'Justice league ', 120, 'WARNER HOME VIDEO', 'ACTION', '19', '0cd5ef8c4bcce3d81e7638c0a1d2e1f7f7120f23.jpg', 'https://www.youtube.com/embed/r9-DM9uBtVI'),
(11, 'Call me by your name', 60, 'LUCA GUADAGNINO ', 'DRAME', '22', '0af26d5caf42a2481dbf1153ee8358e403a1542c.jpg', 'https://www.youtube.com/embed/Z9AYPxH5NTM'),
(12, 'Cars 3', 60, 'FEE BRIAN', 'POUR LA FAMILLE', '29', '3415d248acaa117be47d1c99c1599f3c022fb24e.jpg', 'https://www.youtube.com/embed/2LeOH9AGJQM'),
(14, 'Shutter island ', 120, 'SCORSESE MARTIN', 'SUSPENSE', '6', '9c11eb740397afc11a65eccd50fb73f88521cda2.jpg', 'https://www.youtube.com/embed/2LeOH9AGJQM'),
(15, 'Jigsaw (+dc)', 160, 'PETER SPIERIG ', 'HORREUR', '29', '0b2adca970ff143f8764a68b02ddc67096351391.jpg', 'https://www.youtube.com/embed/fcb68kAOvt4'),
(16, 'Millenium 1 ', 120, 'ARDEN OPLEV NIEL', 'SUSPENSE', '6', '407f550735d12781c35eaa0a4c31bd4b0de7d3b3.jpg', 'https://www.youtube.com/embed/QPxwcNxkVgA'),
(17, 'Happy death day ', 120, 'LANDON CHRISTOPHER ', 'HORREUR', '14', 'ca4d205c7d94e83d5ae7f600dfd1df8bfaae5703.jpg', 'https://www.youtube.com/embed/wiPD9X43knU'),
(18, 'Intouchables', 120, 'NAKACHE OLIVIER', 'DRAME', '6', 'ed76c6b8241b63e46ee471e7bb923cf39c89b8bf.jpg', 'https://www.youtube.com/embed/34WIbmXkewU'),
(19, 'Dunkirk (+uv)(dunkerque)', 120, 'NOLAN CHRISTOPHER ', 'DRAME', '16', '1ac3894664bee6f5efe60861aa879e270683cd12.jpg', 'https://www.youtube.com/embed/F-eMt3SrfFU'),
(20, 'Downsizing ', 60, 'ALEXANDER PAYNE ', 'COMEDIE', '22', 'f80eb8160064744564697003b2e19bdbc2d7274d.jpg', 'https://www.youtube.com/embed/0Md0XJZlbAk'),
(21, 'Transformers: the last knight', 120, 'MICHAEL BAY ', 'SCIENCE FICTION', '14', 'fa04d5c7d234ca846058f44362171b82f57052d9.jpg', 'https://www.youtube.com/embed/6Vtf0MszgP8'),
(22, 'Geostorm', 120, 'DEVLIN DEAN ', 'SCIENCE FICTION', '24', '21d3266b391a8e56b25aba337b72e2f31ccbbe81.jpg', 'https://www.youtube.com/embed/EuOlYPSEzSc'),
(23, 'The Fate Of The Furious', 120, 'GRAY F. GARY', 'Action', '14', '977e15dd58815ceef72177f736a39fbabc6b753f.jpg', 'https://www.youtube.com/embed/JwMKRevYa_M'),
(24, 'The Martian', 150, 'SCOTT RIDLEY ', 'ACTION', '6', '554fd666dc3a43c34ccedeebcb61e7a82421c834.jpg', 'https://www.youtube.com/embed/ej3ioOneTy8'),
(25, 'Schindler''s list ', 140, 'SPIELBERG STEVEN ', 'ACTION', '12', '0a22feee83dab4353f3a876e88b9b6b0f364e3d4.jpg', 'https://www.youtube.com/embed/gG22XNhtnoY');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
