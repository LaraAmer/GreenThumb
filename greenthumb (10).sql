-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2024 at 08:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greenthumb`
--

-- --------------------------------------------------------

--
-- Table structure for table `crops`
--

CREATE TABLE `crops` (
  `crop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `garden_id` int(11) NOT NULL,
  `plot_id` int(11) NOT NULL,
  `crop_name` varchar(100) NOT NULL,
  `planting_date` date DEFAULT NULL,
  `harvest_date` date DEFAULT NULL,
  `Date_of_last_fertilization` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crops`
--

INSERT INTO `crops` (`crop_id`, `user_id`, `garden_id`, `plot_id`, `crop_name`, `planting_date`, `harvest_date`, `Date_of_last_fertilization`) VALUES
(11, 1, 1, 1, 'new crop 1', '2024-03-01', '2024-03-01', '2024-03-01'),
(121, 1, 1, 1, 'new crop 11', '2024-03-01', '2024-03-01', '2024-03-01');

-- --------------------------------------------------------

--
-- Table structure for table `gardens`
--

CREATE TABLE `gardens` (
  `garden_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL,
  `sunlight` enum('full_sun','partial_shade','full_shade') DEFAULT NULL,
  `soil_type` enum('clay','sandy','loamy','silty','peaty','chalky') DEFAULT NULL,
  `available_plots` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gardens`
--

INSERT INTO `gardens` (`garden_id`, `name`, `location`, `sunlight`, `soil_type`, `available_plots`) VALUES
(1, 'Green Valley', 'California', 'full_sun', 'loamy', 10),
(2, 'Sunny Acres', 'nablus', 'partial_shade', 'sandy', 8),
(3, 'Shady Grove', 'Florida', 'full_shade', 'clay', 12),
(26, 'new_garden', 'hhhh', 'full_sun', 'clay', 3),
(27, 'new_garden 2', 'mm', 'full_sun', 'clay', 2);

-- --------------------------------------------------------

--
-- Table structure for table `knowledgebase`
--

CREATE TABLE `knowledgebase` (
  `guide_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int(11) NOT NULL,
  `youtube_tutorial` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knowledgebase`
--

INSERT INTO `knowledgebase` (`guide_id`, `title`, `content`, `author_id`, `youtube_tutorial`) VALUES
(1, 'How to Grow Tomatoes', 'Tomatoes need lots of sunlight...', 1, 'https://youtube.com/example1'),
(2, 'Best Practices for Carrots', 'Carrots grow best in sandy soil...', 4, 'https://youtube.com/example2');

-- --------------------------------------------------------

--
-- Table structure for table `localpartners`
--

CREATE TABLE `localpartners` (
  `partner_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `website_url` varchar(255) DEFAULT NULL,
  `contact_email` varchar(100) DEFAULT NULL,
  `owner_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `localpartners`
--

INSERT INTO `localpartners` (`partner_id`, `name`, `description`, `website_url`, `contact_email`, `owner_id`) VALUES
(1, 'Local Seed Supplier', 'Provides high-quality seeds', 'http://localseeds.com', 'contact@localseeds.com', 3),
(2, 'Organic Fertilizers Inc.', 'Supplies organic fertilizers', 'http://organicfertilizers.com', 'info@organicfertilizers.com', 3),
(3, 'marwa', 'aa', 'aaa.com', 'bat@gmail.com', 3),
(221, 'batoo21lsa', 'a12sa', 'aa12asa.com', 'bat12as@gmail.com', 3),
(1112, 'batoolsa', 'asa', 'aaasa.com', 'batas@gmail.com', 3),
(2121, 'batoo21lsa', 'a12sa', 'aa12asa.com', 'bat12as@gmail.com', 3),
(11122, 'batoo21lsa', 'a12sa', 'aa12asa.com', 'bat12as@gmail.com', 3);

-- --------------------------------------------------------

--
-- Table structure for table `plots`
--

CREATE TABLE `plots` (
  `plot_id` int(11) NOT NULL,
  `garden_id` int(11) NOT NULL,
  `plot_number` int(50) NOT NULL,
  `is_available` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plots`
--

INSERT INTO `plots` (`plot_id`, `garden_id`, `plot_number`, `is_available`) VALUES
(0, 2, 30, 1),
(1, 1, 1, 1),
(2, 1, 2, 0),
(3, 2, 1, 1),
(4, 2, 2, 1),
(5, 3, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `resource_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `resource_type` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `quantity` int(11) DEFAULT 1,
  `user_id` int(11) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `fee` enum('money','service') DEFAULT 'service',
  `money` int(11) DEFAULT NULL,
  `service` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resources`
--

INSERT INTO `resources` (`resource_id`, `owner_id`, `resource_type`, `description`, `quantity`, `user_id`, `is_available`, `fee`, `money`, `service`) VALUES
(1, 3, 'Fertilizer', 'Organic fertilizer for crops', 50, NULL, 1, 'money', 20, NULL),
(2, 3, 'Tools', 'Gardening tools set', 10, NULL, 1, 'service', NULL, 'tool rental'),
(44, 1, 'tool55225', 'Shovel', 4, 1, 1, 'money', 10, ''),
(414, 1, 'tool', 'Shovel', 53, 1, 1, 'money', 10, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('user','volunteer','owner') DEFAULT 'user',
  `phone_number` decimal(11,0) DEFAULT NULL,
  `logIn` int(1) NOT NULL DEFAULT 0,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `role`, `phone_number`, `logIn`, `token`) VALUES
(1, 'batool juma', 'batooljumaa@gmail.com', 'batool juma', 'user', 97059931926, 0, ''),
(2, 'lara amer', 'laraamer@gmail.com', 'lara amer', 'volunteer', 97059931925, 0, ''),
(3, 'bayan jedei', 'bayanjedei@gmail.com', 'bayan jedei', 'owner', 97059931924, 0, ''),
(4, 'marwa banifadel', 'marwabanifadel@gmail.com', 'marwa banifadel', 'user', 97059931923, 0, ''),
(5, 'v', 'volin@example.com', 'v', 'volunteer', 97059931922, 0, ''),
(6, 'o', 'owner@example.com', 'o', 'owner', 97059931921, 0, ''),
(7, 'u', 'user@example.com', 'u', 'user', 97059931920, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer_work`
--

CREATE TABLE `volunteer_work` (
  `Volunteer_work_id` int(11) NOT NULL,
  `Volunteer_work_name` varchar(100) DEFAULT NULL,
  `Volunteer_id` int(11) NOT NULL,
  `garden_id` int(11) NOT NULL,
  `event_description` text DEFAULT NULL,
  `event_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `volunteer_work`
--

INSERT INTO `volunteer_work` (`Volunteer_work_id`, `Volunteer_work_name`, `Volunteer_id`, `garden_id`, `event_description`, `event_date`) VALUES
(1, 'Weeding Day', 2, 1, 'Removing weeds from plots', '2024-06-20'),
(2, 'Tree Planting123', 5, 1, '', '2024-04-30'),
(6, 'Tree Planting', 2, 1, '', '2024-04-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`crop_id`),
  ADD KEY `fk_crops_user_id` (`user_id`),
  ADD KEY `garden_id` (`garden_id`),
  ADD KEY `plot_id` (`plot_id`);

--
-- Indexes for table `gardens`
--
ALTER TABLE `gardens`
  ADD PRIMARY KEY (`garden_id`);

--
-- Indexes for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  ADD PRIMARY KEY (`guide_id`),
  ADD KEY `fk_knowledgebase_author_id` (`author_id`);

--
-- Indexes for table `localpartners`
--
ALTER TABLE `localpartners`
  ADD PRIMARY KEY (`partner_id`),
  ADD KEY `fk_localpartners_owner_id` (`owner_id`);

--
-- Indexes for table `plots`
--
ALTER TABLE `plots`
  ADD PRIMARY KEY (`plot_id`),
  ADD KEY `garden_id` (`garden_id`);

--
-- Indexes for table `resources`
--
ALTER TABLE `resources`
  ADD PRIMARY KEY (`resource_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `volunteer_work`
--
ALTER TABLE `volunteer_work`
  ADD PRIMARY KEY (`Volunteer_work_id`),
  ADD KEY `Volunteer_id` (`Volunteer_id`),
  ADD KEY `garden_id` (`garden_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `crops`
--
ALTER TABLE `crops`
  ADD CONSTRAINT `crops_ibfk_1` FOREIGN KEY (`garden_id`) REFERENCES `gardens` (`garden_id`),
  ADD CONSTRAINT `crops_ibfk_2` FOREIGN KEY (`plot_id`) REFERENCES `plots` (`plot_id`),
  ADD CONSTRAINT `fk_crops_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  ADD CONSTRAINT `fk_knowledgebase_author_id` FOREIGN KEY (`author_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `localpartners`
--
ALTER TABLE `localpartners`
  ADD CONSTRAINT `fk_localpartners_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `plots`
--
ALTER TABLE `plots`
  ADD CONSTRAINT `plots_ibfk_1` FOREIGN KEY (`garden_id`) REFERENCES `gardens` (`garden_id`);

--
-- Constraints for table `resources`
--
ALTER TABLE `resources`
  ADD CONSTRAINT `resources_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `volunteer_work`
--
ALTER TABLE `volunteer_work`
  ADD CONSTRAINT `volunteer_work_ibfk_1` FOREIGN KEY (`Volunteer_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `volunteer_work_ibfk_2` FOREIGN KEY (`garden_id`) REFERENCES `gardens` (`garden_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
