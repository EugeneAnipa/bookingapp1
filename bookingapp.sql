-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 24, 2024 at 11:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookingapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogins`
--

CREATE TABLE `adminlogins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminlogins`
--

INSERT INTO `adminlogins` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'robert2024', '$2b$10$6tf0EAEwqmQulS7L3ewGZuYbpQOIomi5vGONw3DqVTO3BqKFcL5fq', '2024-09-07 19:19:08', '2024-09-07 19:19:08');

-- --------------------------------------------------------

--
-- Table structure for table `bookingInfos`
--

CREATE TABLE `bookingInfos` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `appointmentType` varchar(255) DEFAULT NULL,
  `appointmentAddress` varchar(255) DEFAULT NULL,
  `appointmentDate` date DEFAULT NULL,
  `appointmentTime` time DEFAULT NULL,
  `timeAndDateBooked` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookingInfos`
--

INSERT INTO `bookingInfos` (`id`, `fullName`, `email`, `phoneNumber`, `appointmentType`, `appointmentAddress`, `appointmentDate`, `appointmentTime`, `timeAndDateBooked`, `createdAt`, `updatedAt`) VALUES
(4, 'test ws', 'sssss@w.com', '122334111', 'YourPlace', 'wwww fff', '2023-12-12', '00:12:00', '\"2024-09-10T03:15:48.217Z\"', '2024-09-10 03:15:48', '2024-09-10 03:15:48'),
(5, 'dd ddd', 'ddq@q.com', '2929393', 'YourPlace', 'djddj', '2023-12-12', '12:12:00', '\"2024-09-10T03:19:57.548Z\"', '2024-09-10 03:19:57', '2024-09-10 03:19:57'),
(6, 'djdd djd', 'sj@d.com', '13333333', 'YourPlace', 'wjdd', '2024-12-12', '12:12:00', '\"2024-09-10T03:21:13.871Z\"', '2024-09-10 03:21:13', '2024-09-10 03:21:13'),
(7, 'dddd', 'qqww@l.com', '1233333', 'YourPlace', '9qqqqq', '2024-12-12', '12:13:00', '\"2024-09-10T03:25:30.841Z\"', '2024-09-10 03:25:30', '2024-09-10 03:25:30');

-- --------------------------------------------------------

--
-- Table structure for table `notiNums`
--

CREATE TABLE `notiNums` (
  `id` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notiNums`
--

INSERT INTO `notiNums` (`id`, `number`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2024-09-14 19:45:21', '2024-09-14 19:45:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogins`
--
ALTER TABLE `adminlogins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookingInfos`
--
ALTER TABLE `bookingInfos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notiNums`
--
ALTER TABLE `notiNums`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminlogins`
--
ALTER TABLE `adminlogins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bookingInfos`
--
ALTER TABLE `bookingInfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `notiNums`
--
ALTER TABLE `notiNums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
