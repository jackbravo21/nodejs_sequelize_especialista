-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Nov-2021 às 02:03
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `teste_sequelize`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` double DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `preco`, `descricao`, `createdAt`, `updatedAt`) VALUES
(1, 'Mamão', 5.8, 'Mamão da raça papaia', '2021-11-29 03:58:01', '2021-11-29 03:58:01'),
(2, 'Limão', 2.03, 'Limonada', '2021-11-29 03:58:19', '2021-11-29 03:58:19'),
(3, 'Banana Prata', 5.5, 'Banana comum de tamanho grande', '2021-11-29 03:58:35', '2021-11-29 03:58:35'),
(4, 'Banana Nanica', 6.3, 'Bananinha', '2021-11-29 03:58:49', '2021-11-29 03:58:49'),
(5, 'Banana Caturra', 5.89, 'Banana Gigantona', '2021-11-29 03:58:57', '2021-11-29 03:58:57'),
(6, 'Pêra', 3.3, 'Doce', '2021-11-29 03:59:08', '2021-11-29 03:59:08'),
(7, 'Laranja do céu', 3.9, 'Doce', '2021-11-29 03:59:23', '2021-11-29 03:59:23'),
(8, 'Laranja de umbigo', 4.2, 'Laranja grande azeda', '2021-11-29 03:59:39', '2021-11-29 03:59:39'),
(9, 'Coco verde', 6.4, 'Coco verde não descascado', '2021-11-29 03:59:46', '2021-11-29 03:59:46'),
(10, 'Coco Marrom', 7.15, 'Coco descascado', '2021-11-29 03:59:50', '2021-11-29 03:59:50'),
(11, 'Pimenta Dedo de Moça', 2.2, 'Pimenta Forte que parece um dedo', '2021-11-29 04:00:48', '2021-11-29 04:00:48'),
(12, 'Ovo Marrom', 10, 'Ovo de galinha caipira', '2021-11-29 04:01:18', '2021-11-29 04:01:18'),
(13, 'Ovo Branco', 8, 'Ovo de granja', '2021-11-29 04:01:46', '2021-11-29 04:01:46');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
