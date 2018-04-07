-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 28 mars 2018 à 20:52
-- Version du serveur :  5.7.17
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `munarela`
--
CREATE DATABASE IF NOT EXISTS `munarela` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `munarela`;

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
  `idAdresse` int(11) NOT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `codePostale` varchar(45) DEFAULT NULL,
  `pays` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `adresse`
--

INSERT INTO `adresse` (`idAdresse`, `ville`, `codePostale`, `pays`) VALUES
(1, 'testville', 'testcode', 'algerie'),
(2, 'alger', 'w1w1w1', NULL),
(3, '', '', NULL),
(4, 'alger', 'w1w1w1', NULL),
(5, 'alger', 'w1w1w1', NULL),
(6, 'alger', 'w1w1w1', NULL),
(7, 'rio', 'w1w1w1w', 'AR'),
(8, 'melbourne', 'a1a1a1a', 'AT'),
(9, 'melbourne', 'a1a1a1a', 'AT'),
(10, '', '', ''),
(11, '', '', ''),
(12, '', '', ''),
(13, 'alger', 'w1w1w1', 'DZ'),
(14, 'alger', 'w1w1w1', 'DZ'),
(15, 'alger', 'w1w1w1', 'DZ'),
(16, 'alo', 'a12a12', 'BY'),
(17, 'alo', 'a12a12', 'BY'),
(18, 'alo', 'a12a12', 'BY'),
(19, 'alo', 'a12a12', 'BY'),
(20, 'alo', 'asdasd', 'BS'),
(21, 'alo', 'aaaaaa', 'AT'),
(22, '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_title` varchar(200) NOT NULL,
  `banner_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `banner`
--

INSERT INTO `banner` (`banner_id`, `banner_title`, `banner_image`) VALUES
(1, 'Banner 1', 'banner-1.jpg'),
(2, 'Banner 2', 'banner-2.jpg'),
(3, 'Banner 3', 'banner-3.jpg'),
(4, 'Banner 4', 'banner-4.jpg'),
(5, 'Banner 5', 'banner-5.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `circuit`
--

CREATE TABLE `circuit` (
  `idCircuit` int(11) NOT NULL,
  `titre` varchar(45) NOT NULL,
  `dateDeDepart` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `dateDeRetour` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  `nbPersonnesMax` int(2) DEFAULT NULL,
  `nbPersonnesMin` int(2) DEFAULT NULL,
  `description` varchar(256) NOT NULL,
  `prix` float NOT NULL,
  `imageCircuit` varchar(256) NOT NULL,
  `guide` varchar(256) DEFAULT NULL,
  `idPromotion` int(11) DEFAULT NULL,
  `idThematique` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `circuit`
--

INSERT INTO `circuit` (`idCircuit`, `titre`, `dateDeDepart`, `dateDeRetour`, `nbPersonnesMax`, `nbPersonnesMin`, `description`, `prix`, `imageCircuit`, `guide`, `idPromotion`, `idThematique`) VALUES
(31, 'mal', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', NULL, NULL, '', 0, 'f1d299bec6543f6807864b5a5740214b525b6a62', NULL, NULL, 11),
(32, 'ssss', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', NULL, NULL, '', 0, '3d66d765c45e5e6f32813eefb317f2903ccf1f01', NULL, NULL, 11),
(33, 'alo', '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', NULL, NULL, '', 0, '523bcf58b642ab843073d90b8f7bc8b05377852d', NULL, NULL, 11),
(34, 'circuitnadjib', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'grhththtr', 1230, '51926b6fe7c71763bca16574b83a7d5373b94d96.jpg', NULL, NULL, 11),
(35, 'raydercircuit', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'gegre', 1230, '7406b97ff9753b23f3047682e759e05fe536b679.jpg', NULL, NULL, 11),
(36, 'lili', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'fefefw', 1230, 'd8299af0e7354f8b78285ddda79b971726e5458a.jpg', NULL, NULL, 11),
(37, 'mostapha circuit', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'hhrtr', 1230, '91be745b3d80ddb87f4df366bd2437513f467894.jpg', NULL, NULL, 11),
(38, 'mira', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'grehyer', 12369, '3923e5729ac3059372ba652b30f87d73aed9e719.jpg', NULL, NULL, 11),
(39, 'umilala', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'gregreger', 1230, 'b3663c38c49848e59284fb546cfdec184d1a717e.jpg', NULL, NULL, 11),
(40, 'new', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'ger', 1236, 'da92504ae4df1397be9b149c61eac48330e310c1.jpg', NULL, NULL, 11),
(41, 'hihi', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'ege', 15151, 'f9d4afd5b7462b6c72f19558709f34378f554da5.jpg', NULL, NULL, 11),
(42, 'nawa', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'fregreg', 12360, '09958a19c808373c98602b78394478a6d2f6fc30.jpg', NULL, NULL, 11),
(43, 'kikli', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 123, 123, 'uytu', 21255, 'a1d4e91cf4e37f8943b0c4f7bbdffb5c5dbc48b2.jpg', NULL, NULL, 11),
(44, 'rthr', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 1256, 126, 'jjr', 126, 'e1025f83ca4dbb0ab9e6faa679ece55b7e13df8b.jpg', NULL, NULL, 11),
(45, 'cirque1', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'fwfwwe', 1000, '338c7e824c4e422149f2798bca0d9da53f5dc593.jpg', NULL, NULL, 11),
(46, 'ciraua', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'ergre', 1230, 'e453fa520f91f7b72b014f63d5e524a5819a001f.jpg', NULL, NULL, 11),
(47, 'trh', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'hrthtrh', 1265, 'c15b3a20870968c65c8eeaa211b40c4e8ae6199f.jpg', NULL, NULL, 11),
(48, 'ewfew', '2011-06-18 04:00:00.000000', '2011-06-18 04:00:00.000000', 10, 10, 'L\'Ã®le de Phuket (en thaÃ¯ : à¹€à¸à¸²à¸°à¸ à¸¹à¹€à¸à¹‡à¸•), qui est aussi une province, est la plus grande Ã®le de ThaÃ¯lande, elle se trouve Ã  867 km au sud de Bangkok, la capitale', 5000, '02a3d6dea5860520bdc92fdfec46bf89b473dd1c.jpg', NULL, NULL, 11),
(49, 'gfgf', '2018-01-10 05:00:00.000000', '2018-01-20 05:00:00.000000', 10, 10, 'hrh', 14526, '49e95476e50a1a36668268286081cee603f41e9d.jpg', NULL, NULL, 11);

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE `etape` (
  `idEtape` int(11) NOT NULL,
  `nomEtape` varchar(256) NOT NULL,
  `descriptionEtape` varchar(256) NOT NULL,
  `idCircuit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `etape`
--

INSERT INTO `etape` (`idEtape`, `nomEtape`, `descriptionEtape`, `idCircuit`) VALUES
(19, 'pal', '', 31),
(20, 'sssss', '', 32),
(21, 'aloetape', '', 33),
(22, 'etape1', 'gerg', 34),
(23, 'etap1', 'ggergre', 35),
(24, 'etap1', 'fw', 36),
(25, 'etap1', 'hthrt', 37),
(26, 'etap1', 'rgerg', 38),
(27, 'etap1', 'ggre', 39),
(28, 'etap1', '', 40),
(29, 'etpa1', 're', 41),
(30, 'etap1', 'gegre', 42),
(31, 'etap1', 'gerg', 43),
(32, 'y', 'y', 44),
(33, 'etap1', 'reh', 45),
(34, 'etap1', '', 46),
(35, 'etap1', 'eergerge', 47),
(36, 'etap2', '', 47),
(37, 'jjjj', 'L\'Ã®le de Phuket (en thaÃ¯ : à¹€à¸à¸²à¸°à¸ à¸¹à¹€à¸à¹‡à¸•), qui est aussi une province, est la plus grande Ã®le de ThaÃ¯lande, elle se trouve Ã  867 km au sud de Bangkok, la capitale', 47),
(38, 'etape2', '', 47),
(39, '', '', 49);

-- --------------------------------------------------------

--
-- Structure de la table `jour`
--

CREATE TABLE `jour` (
  `idJour` int(11) NOT NULL,
  `nomhotel` varchar(256) DEFAULT NULL,
  `urlHotel` varchar(100) DEFAULT NULL,
  `nomRestaurant` varchar(100) DEFAULT NULL,
  `urlRestaurant` varchar(100) DEFAULT NULL,
  `dejeuner` tinyint(1) NOT NULL DEFAULT '0',
  `diner` tinyint(1) NOT NULL DEFAULT '0',
  `souper` tinyint(1) NOT NULL DEFAULT '0',
  `description` varchar(256) DEFAULT NULL,
  `idEtape` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jour`
--

INSERT INTO `jour` (`idJour`, `nomhotel`, `urlHotel`, `nomRestaurant`, `urlRestaurant`, `dejeuner`, `diner`, `souper`, `description`, `idEtape`) VALUES
(3, 'sssss', '', '', NULL, 0, 0, 0, 'ss', 20),
(4, 'sssss', '', '', NULL, 1, 0, 0, 'ss', 20),
(5, 'sssss', '', '', NULL, 1, 1, 0, 'ss', 20),
(6, 'aaa', '', '', '', 0, 0, 0, '', 21),
(7, 'aaa', '', '', '', 0, 0, 0, 'aaaaaa', 21),
(8, 'aaa', 'xxxUH', 'xR', 'xUR', 1, 0, 0, 'des', 21),
(9, 'j1', 'trrt', 'rhrt', 'rhrt', 0, 0, 0, 'hrthrthtrhtr', 23),
(10, 'j1', '', '', '', 0, 0, 0, '', 24),
(11, 'j1', '', '', '', 0, 0, 0, '', 25),
(12, 'j1', '', '', '', 0, 0, 0, '', 28),
(13, 'j1', '', '', '', 0, 0, 0, '', 34),
(14, 'j2', '', '', '', 0, 0, 0, '', 34),
(15, 'j3', '', '', '', 0, 0, 0, '', 34),
(16, 'j4', '', '', '', 0, 0, 0, '', 34),
(17, 'j1', '', '', '', 0, 0, 0, '', 35),
(18, 'j1', '', '', '', 0, 0, 0, '', 36),
(19, 'j2', '', '', '', 0, 0, 0, '', 36),
(20, 'j3', '', '', '', 0, 0, 0, '', 36),
(21, '111', '', '', '', 0, 1, 0, '', 37),
(22, '222', '', '', '', 0, 1, 0, '', 38),
(23, '2222', '', '', '', 0, 0, 0, '', 38),
(24, '', '', '', '', 0, 0, 0, '', 39);

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `idPaiement` int(11) NOT NULL,
  `datePaiment` timestamp(6) NULL DEFAULT NULL,
  `montanttPaiment` float DEFAULT NULL,
  `idReservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `idPanier` int(11) NOT NULL,
  `idCircuit` int(11) DEFAULT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `participants`
--

CREATE TABLE `participants` (
  `idparticipants` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `courriel` varchar(256) DEFAULT NULL,
  `sexe` varchar(45) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `idAdresse` int(11) NOT NULL,
  `idPasspor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `participants`
--

INSERT INTO `participants` (`idparticipants`, `nom`, `prenom`, `courriel`, `sexe`, `tel`, `idAdresse`, `idPasspor`) VALUES
(1, 'alo', 'malo', 'a@g.com', 'Homme', NULL, 1, 1),
(2, 'mal', 'al', 'a@gmail.com', 'Homme', '133456789', 17, 2),
(5, 'larkem', 'nadjib', 'a@gmail.com', 'Homme', '123456', 20, 5);

-- --------------------------------------------------------

--
-- Structure de la table `passeport`
--

CREATE TABLE `passeport` (
  `idPasspor` int(11) NOT NULL,
  `numeroPass` int(50) NOT NULL,
  `dateDelivPass` date NOT NULL,
  `dateExpiration` date NOT NULL,
  `nationalites` varchar(100) DEFAULT NULL,
  `lieuDeliv` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `passeport`
--

INSERT INTO `passeport` (`idPasspor`, `numeroPass`, `dateDelivPass`, `dateExpiration`, `nationalites`, `lieuDeliv`) VALUES
(1, 0, '0000-00-00', '0000-00-00', 'algerie', 'alger'),
(2, 1234562365, '2015-01-01', '2020-01-01', 'alo', 'alo'),
(3, 1234562365, '2015-01-01', '2020-01-01', 'alo', 'alo'),
(4, 1234562365, '2015-01-01', '2020-01-01', 'alo', 'alo'),
(5, 123456789, '2015-01-01', '2020-01-01', 'alger', 'alo'),
(6, 123456789, '2015-01-01', '2020-01-01', 'alger', 'alger');

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `idPromotion` int(11) NOT NULL,
  `taux` float DEFAULT NULL,
  `datedebut` timestamp(6) NULL DEFAULT NULL,
  `datefin` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `idReservation` int(11) NOT NULL,
  `montanTotal` float DEFAULT NULL,
  `nbrPlaceDispo` int(11) DEFAULT NULL,
  `nbrAdult` int(11) DEFAULT NULL,
  `nbrEnfMTrois` int(11) DEFAULT NULL,
  `NbrEnfBTroisONZ` int(11) DEFAULT NULL,
  `Etat` varchar(45) DEFAULT NULL,
  `nPaiment` varchar(45) DEFAULT NULL,
  `datePaiment` timestamp(6) NULL DEFAULT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `idCircuit` int(11) NOT NULL,
  `idPanier` int(11) NOT NULL,
  `solde` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `reservationparticipant`
--

CREATE TABLE `reservationparticipant` (
  `idParticipants` int(11) NOT NULL,
  `idReservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `thematique`
--

CREATE TABLE `thematique` (
  `idThematique` int(11) NOT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `thematique`
--

INSERT INTO `thematique` (`idThematique`, `nom`, `description`, `image`) VALUES
(11, 'Oceanie', 'ffzfzfzfzz', 'a0f1e055bde100cc799d036ede688d6b9ef8ee5f.jpg'),
(13, 'Pacifique', 'zfzz', '03e249731897c59c0c75e0cb0e9cc1fa3ef57403.jpg'),
(14, 'Europe', 'qszf', '3a85dba78f53862dbf6321135088987a61968b8b.jpg'),
(15, 'Afrique', 'qszf', '03434e9348bed1b93193ef2c29e9ed697a2d78cc.jpg'),
(16, 'Antilles', 'qszf', 'e5dfef216dc2aa856d78116320b8a5b959a5b2e1.jpg'),
(17, 'Capitales', 'qszf', '8fec20818bcb9334ebfee5e45dc3657f3185aaae.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `display_name` varchar(50) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `first_name`, `last_name`, `display_name`, `email`, `password`) VALUES
(1, 'Jay', 'Pabs', 'jaypabs', 'asdf@gmail.com', '202cb962ac59075b964b07152d234b70'),
(2, 'nadjib', 'larkem', 'nadj851', 'nadjiblar@hotmail.fr', '21232f297a57a5a743894a0e4a801fc3'),
(3, 'NONO', 'LOLO', 'nadj851', 'naar8@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(4, 'admin', 'admin', 'admin', 'admin@admin.com', '21232f297a57a5a743894a0e4a801fc3'),
(5, 'nana', 'lala', 'jas', 'jas@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(6, 'nadjib', 'larkem', 'nadjib', 'nadjib@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(7, 'lara', 'mara', 'lara', 'lara@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(8, 'haha', 'lala', 'lala', 'lala@hotmail.com', '202cb962ac59075b964b07152d234b70'),
(9, 'ahcen', 'boutaghane', 'haswen', 'eee@d.com', '96e79218965eb72c92a549dd5a330112'),
(10, 'nasd', 'dwdw', 'fwfwf', 'n@hotmail.fr33', '698d51a19d8a121ce581499d7b701668'),
(11, 'ahcen', 'boutaghane', 'ere', 'nadjiblar@h1otmaill.fr', '698d51a19d8a121ce581499d7b701668'),
(12, 'ahcen', 'boutaghane', 'haswen', 'nad111jiblar@hotmaill.fr', '698d51a19d8a121ce581499d7b701668'),
(13, '1', '1', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`idAdresse`);

--
-- Index pour la table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Index pour la table `circuit`
--
ALTER TABLE `circuit`
  ADD PRIMARY KEY (`idCircuit`,`idThematique`),
  ADD KEY `fk_Circuit_Promotion1_idx` (`idPromotion`),
  ADD KEY `fk_Circuit_Thematique1_idx` (`idThematique`);

--
-- Index pour la table `etape`
--
ALTER TABLE `etape`
  ADD PRIMARY KEY (`idEtape`,`idCircuit`),
  ADD KEY `fk_Etape_Circuit1_idx` (`idCircuit`);

--
-- Index pour la table `jour`
--
ALTER TABLE `jour`
  ADD PRIMARY KEY (`idJour`,`idEtape`,`dejeuner`,`diner`,`souper`),
  ADD KEY `fk_Jour_Etape1_idx` (`idEtape`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`idPaiement`),
  ADD KEY `fk_Paiement_Reservation1_idx` (`idReservation`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`idPanier`);

--
-- Index pour la table `participants`
--
ALTER TABLE `participants`
  ADD PRIMARY KEY (`idparticipants`),
  ADD KEY `fk_participants_Adresse1_idx` (`idAdresse`),
  ADD KEY `fk_participants_Passeport1_idx` (`idPasspor`);

--
-- Index pour la table `passeport`
--
ALTER TABLE `passeport`
  ADD PRIMARY KEY (`idPasspor`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`idPromotion`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`idReservation`,`idUtilisateur`,`idCircuit`),
  ADD KEY `fk_Reservation_Utilisateur_idx` (`idUtilisateur`),
  ADD KEY `fk_Reservation_Circuit1_idx` (`idCircuit`),
  ADD KEY `fk_Reservation_Panier1_idx` (`idPanier`);

--
-- Index pour la table `reservationparticipant`
--
ALTER TABLE `reservationparticipant`
  ADD PRIMARY KEY (`idReservation`,`idParticipants`),
  ADD KEY `fk_ReservationParticipant_participants1_idx` (`idParticipants`);

--
-- Index pour la table `thematique`
--
ALTER TABLE `thematique`
  ADD PRIMARY KEY (`idThematique`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CourrielUtilisateur_UNIQUE` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `idAdresse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `circuit`
--
ALTER TABLE `circuit`
  MODIFY `idCircuit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
--
-- AUTO_INCREMENT pour la table `etape`
--
ALTER TABLE `etape`
  MODIFY `idEtape` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT pour la table `jour`
--
ALTER TABLE `jour`
  MODIFY `idJour` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `idPaiement` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `idPanier` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `participants`
--
ALTER TABLE `participants`
  MODIFY `idparticipants` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `passeport`
--
ALTER TABLE `passeport`
  MODIFY `idPasspor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `idPromotion` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `idReservation` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `thematique`
--
ALTER TABLE `thematique`
  MODIFY `idThematique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
