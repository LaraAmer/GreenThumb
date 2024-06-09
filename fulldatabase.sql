-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2024 at 07:23 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
(41, 1, 1, 1, 'Tomato', '2024-03-01', '2024-06-01', '2024-05-01'),
(42, 2, 2, 2, 'Cucumber', '2024-03-15', '2024-06-15', '2024-05-15'),
(43, 3, 3, 3, 'Lettuce', '2024-04-01', '2024-07-01', '2024-06-01'),
(44, 4, 4, 4, 'Carrot', '2024-04-10', '2024-07-10', '2024-06-10'),
(45, 5, 5, 5, 'Peas', '2024-04-20', '2024-07-20', '2024-06-20'),
(46, 6, 6, 6, 'Potato', '2024-05-01', '2024-08-01', '2024-07-01'),
(47, 7, 7, 7, 'Corn', '2024-05-15', '2024-08-15', '2024-07-15'),
(48, 8, 8, 8, 'Beans', '2024-06-01', '2024-09-01', '2024-08-01'),
(49, 9, 9, 9, 'Broccoli', '2024-06-15', '2024-09-15', '2024-08-15'),
(50, 10, 10, 10, 'Spinach', '2024-07-01', '2024-10-01', '2024-09-01');

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
(1, 'Rose Garden', '123 Main St', 'full_sun', 'loamy', 10),
(2, 'Vegetable Garden', '456 Oak St', 'partial_shade', 'sandy', 20),
(3, 'Herb Garden', '789 Pine St', 'full_shade', 'clay', 5),
(4, 'Fruit Garden', '101 Maple St', 'full_sun', 'peaty', 15),
(5, 'Flower Garden', '202 Birch St', 'partial_shade', 'silty', 8),
(6, 'Community Garden', '303 Cedar St', 'full_shade', 'chalky', 12),
(7, 'Botanical Garden', '404 Elm St', 'full_sun', 'loamy', 25),
(8, 'Urban Garden', '505 Spruce St', 'partial_shade', 'sandy', 18),
(9, 'School Garden', '606 Ash St', 'full_shade', 'clay', 7),
(10, 'Backyard Garden', '707 Poplar St', 'full_sun', 'peaty', 10),
(11, 'Rose Garden', '123 Main St', 'full_sun', 'loamy', 10),
(12, 'Vegetable Garden', '456 Oak St', 'partial_shade', 'sandy', 20),
(13, 'Herb Garden', '789 Pine St', 'full_shade', 'clay', 5),
(14, 'Fruit Garden', '101 Maple St', 'full_sun', 'peaty', 15),
(15, 'Flower Garden', '202 Birch St', 'partial_shade', 'silty', 8),
(16, 'Community Garden', '303 Cedar St', 'full_shade', 'chalky', 12),
(17, 'Botanical Garden', '404 Elm St', 'full_sun', 'loamy', 25),
(18, 'Urban Garden', '505 Spruce St', 'partial_shade', 'sandy', 18),
(19, 'School Garden', '606 Ash St', 'full_shade', 'clay', 7),
(20, 'Backyard Garden', '707 Poplar St', 'full_sun', 'peaty', 10),
(21, 'Rose Garden', '123 Main St', 'full_sun', 'loamy', 10),
(22, 'Vegetable Garden', '456 Oak St', 'partial_shade', 'sandy', 20),
(23, 'Herb Garden', '789 Pine St', 'full_shade', 'clay', 5),
(24, 'Fruit Garden', '101 Maple St', 'full_sun', 'peaty', 15),
(25, 'Flower Garden', '202 Birch St', 'partial_shade', 'silty', 8),
(26, 'Community Garden', '303 Cedar St', 'full_shade', 'chalky', 12),
(27, 'Botanical Garden', '404 Elm St', 'full_sun', 'loamy', 25),
(28, 'Urban Garden', '505 Spruce St', 'partial_shade', 'sandy', 18),
(29, 'School Garden', '606 Ash St', 'full_shade', 'clay', 7),
(30, 'Backyard Garden', '707 Poplar St', 'full_sun', 'peaty', 10);

-- --------------------------------------------------------

--
-- Table structure for table `knowledgebase`
--

CREATE TABLE `knowledgebase` (
  `guide_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `knowledgebase`
--

INSERT INTO `knowledgebase` (`guide_id`, `title`, `content`, `author_id`) VALUES
(21, 'Growing Tomatoes', 'Guide on how to grow tomatoes.', 1),
(22, 'Cucumber Care', 'Tips for caring for cucumbers.', 2),
(23, 'Lettuce Basics', 'How to plant and harvest lettuce.', 3),
(24, 'Carrot Cultivation', 'Steps to cultivate carrots.', 4),
(25, 'Pea Planting', 'Guide to planting peas.', 5),
(26, 'Potato Growth', 'Everything about growing potatoes.', 6),
(27, 'Corn Guide', 'Comprehensive corn growing guide.', 7),
(28, 'Bean Care', 'How to care for beans.', 8),
(29, 'Broccoli Tips', 'Tips for growing broccoli.', 9),
(30, 'Spinach Planting', 'Planting and harvesting spinach.', 10);

-- --------------------------------------------------------

--
-- Table structure for table `localpartners`
--

CREATE TABLE `localpartners` (
  `partner_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `website_url` varchar(255) DEFAULT NULL,
  `contact_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `localpartners`
--

INSERT INTO `localpartners` (`partner_id`, `name`, `description`, `website_url`, `contact_email`) VALUES
(1, 'Garden Supplies Co.', 'Supplier of gardening tools.', 'http://gardensupplies.com', 'info@gardensupplies.com'),
(2, 'Green Thumb Nursery', 'Local plant nursery.', 'http://greenthumbnursery.com', 'contact@greenthumbnursery.com'),
(3, 'Organic Soil Inc.', 'Provider of organic soil.', 'http://organicsoil.com', 'support@organicsoil.com'),
(4, 'Compost World', 'Compost supplier.', 'http://compostworld.com', 'sales@compostworld.com'),
(5, 'Plant Partners', 'Partnership for plant care.', 'http://plantpartners.com', 'info@plantpartners.com'),
(6, 'Pest Control Co.', 'Pest control services.', 'http://pestcontrol.com', 'help@pestcontrol.com'),
(7, 'Watering Solutions', 'Irrigation systems provider.', 'http://wateringsolutions.com', 'service@wateringsolutions.com'),
(8, 'Garden Design Co.', 'Garden design services.', 'http://gardendesign.com', 'design@gardendesign.com'),
(9, 'Urban Farming Inc.', 'Support for urban farms.', 'http://urbanfarming.com', 'urban@urbanfarming.com'),
(10, 'Community Garden Group', 'Community garden support.', 'http://communitygarden.com', 'community@communitygarden.com'),
(11, 'Garden Supplies Co.', 'Supplier of gardening tools.', 'http://gardensupplies.com', 'info@gardensupplies.com'),
(12, 'Green Thumb Nursery', 'Local plant nursery.', 'http://greenthumbnursery.com', 'contact@greenthumbnursery.com'),
(13, 'Organic Soil Inc.', 'Provider of organic soil.', 'http://organicsoil.com', 'support@organicsoil.com'),
(14, 'Compost World', 'Compost supplier.', 'http://compostworld.com', 'sales@compostworld.com'),
(15, 'Plant Partners', 'Partnership for plant care.', 'http://plantpartners.com', 'info@plantpartners.com'),
(16, 'Pest Control Co.', 'Pest control services.', 'http://pestcontrol.com', 'help@pestcontrol.com'),
(17, 'Watering Solutions', 'Irrigation systems provider.', 'http://wateringsolutions.com', 'service@wateringsolutions.com'),
(18, 'Garden Design Co.', 'Garden design services.', 'http://gardendesign.com', 'design@gardendesign.com'),
(19, 'Urban Farming Inc.', 'Support for urban farms.', 'http://urbanfarming.com', 'urban@urbanfarming.com'),
(20, 'Community Garden Group', 'Community garden support.', 'http://communitygarden.com', 'community@communitygarden.com');

-- --------------------------------------------------------

--
-- Table structure for table `pestdata`
--

CREATE TABLE `pestdata` (
  `pest_id` int(11) NOT NULL,
  `pest_name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `control_methods` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pestdata`
--

INSERT INTO `pestdata` (`pest_id`, `pest_name`, `description`, `control_methods`) VALUES
(1, 'Aphids', 'Small sap-sucking insects.', 'Use insecticidal soap.'),
(2, 'Caterpillars', 'Larvae of butterflies and moths.', 'Handpick and use BT spray.'),
(3, 'Slugs', 'Soft-bodied mollusks.', 'Use slug pellets and beer traps.'),
(4, 'Whiteflies', 'Small white insects.', 'Use yellow sticky traps.'),
(5, 'Spider Mites', 'Tiny red or yellow arachnids.', 'Use miticides and water spray.'),
(6, 'Japanese Beetles', 'Metallic green beetles.', 'Handpick and use neem oil.'),
(7, 'Squash Bugs', 'Brownish-black insects.', 'Remove eggs and use insecticide.'),
(8, 'Thrips', 'Small slender insects.', 'Use blue sticky traps and insecticidal soap.'),
(9, 'Cabbage Worms', 'Larvae of white butterflies.', 'Handpick and use BT spray.'),
(10, 'Cutworms', 'Caterpillars that cut plants.', 'Use collars and insecticide.'),
(11, 'Aphids', 'Small sap-sucking insects.', 'Use insecticidal soap.'),
(12, 'Caterpillars', 'Larvae of butterflies and moths.', 'Handpick and use BT spray.'),
(13, 'Slugs', 'Soft-bodied mollusks.', 'Use slug pellets and beer traps.'),
(14, 'Whiteflies', 'Small white insects.', 'Use yellow sticky traps.'),
(15, 'Spider Mites', 'Tiny red or yellow arachnids.', 'Use miticides and water spray.'),
(16, 'Japanese Beetles', 'Metallic green beetles.', 'Handpick and use neem oil.'),
(17, 'Squash Bugs', 'Brownish-black insects.', 'Remove eggs and use insecticide.'),
(18, 'Thrips', 'Small slender insects.', 'Use blue sticky traps and insecticidal soap.'),
(19, 'Cabbage Worms', 'Larvae of white butterflies.', 'Handpick and use BT spray.'),
(20, 'Cutworms', 'Caterpillars that cut plants.', 'Use collars and insecticide.');

-- --------------------------------------------------------

--
-- Table structure for table `plots`
--

CREATE TABLE `plots` (
  `plot_id` int(11) NOT NULL,
  `garden_id` int(11) NOT NULL,
  `plot_number` varchar(50) NOT NULL,
  `is_available` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plots`
--

INSERT INTO `plots` (`plot_id`, `garden_id`, `plot_number`, `is_available`) VALUES
(1, 1, 'A1', 1),
(2, 2, 'A2', 1),
(3, 3, 'B1', 1),
(4, 4, 'B2', 1),
(5, 5, 'C1', 1),
(6, 6, 'C2', 1),
(7, 7, 'D1', 1),
(8, 8, 'D2', 1),
(9, 9, 'E1', 1),
(10, 10, 'E2', 1),
(11, 1, 'A1', 1),
(12, 2, 'A2', 1),
(13, 3, 'B1', 1),
(14, 4, 'B2', 1),
(15, 5, 'C1', 1),
(16, 6, 'C2', 1),
(17, 7, 'D1', 1),
(18, 8, 'D2', 1),
(19, 9, 'E1', 1),
(20, 10, 'E2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `resource_id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `resource_type` enum('tool','seed','compost','produce') NOT NULL,
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
(21, 1, 'tool', 'Shovel', 5, 1, 1, 'money', 10, NULL),
(22, 2, 'seed', 'Tomato seeds', 100, 2, 1, 'service', NULL, 'planting'),
(23, 3, 'compost', 'Organic compost', 50, 3, 1, 'money', 5, NULL),
(24, 4, 'produce', 'Fresh lettuce', 20, 4, 1, 'service', NULL, 'harvesting'),
(25, 5, 'tool', 'Hoe', 10, 5, 1, 'money', 8, NULL),
(26, 6, 'seed', 'Cucumber seeds', 120, 6, 1, 'service', NULL, 'weeding'),
(27, 7, 'compost', 'Vermicompost', 60, 7, 1, 'money', 7, NULL),
(28, 8, 'produce', 'Fresh carrots', 15, 8, 1, 'service', NULL, 'watering'),
(29, 9, 'tool', 'Rake', 7, 9, 1, 'money', 12, NULL),
(30, 10, 'seed', 'Pea seeds', 110, 10, 1, 'service', NULL, 'fertilizing');

-- --------------------------------------------------------

--
-- Table structure for table `soildata`
--

CREATE TABLE `soildata` (
  `soil_id` int(11) NOT NULL,
  `location` varchar(100) NOT NULL,
  `soil_type` enum('clay','sandy','loamy','silty','peaty','chalky') DEFAULT NULL,
  `ph_level` float DEFAULT NULL,
  `nutrient_content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `soildata`
--

INSERT INTO `soildata` (`soil_id`, `location`, `soil_type`, `ph_level`, `nutrient_content`) VALUES
(1, '123 Main St', 'loamy', 6.5, 'High in organic matter'),
(2, '456 Oak St', 'sandy', 5.5, 'Low in nitrogen'),
(3, '789 Pine St', 'clay', 7, 'Rich in potassium'),
(4, '101 Maple St', 'peaty', 5.8, 'High in organic matter'),
(5, '202 Birch St', 'silty', 6.8, 'Balanced nutrients'),
(6, '303 Cedar St', 'chalky', 7.5, 'High in calcium'),
(7, '404 Elm St', 'loamy', 6.2, 'Rich in nitrogen'),
(8, '505 Spruce St', 'sandy', 5.9, 'Low in phosphorus'),
(9, '606 Ash St', 'clay', 7.1, 'Rich in magnesium');

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
  `phone_number` decimal(11,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `role`, `phone_number`) VALUES
(1, 'johndoe', 'john@example.com', 'hash1', 'user', '1234567890'),
(2, 'janedoe', 'jane@example.com', 'hash2', 'volunteer', '2147483647'),
(3, 'bobjones', 'bob@example.com', 'hash3', 'owner', '2147483647'),
(4, 'alicejohnson', 'alice@example.com', 'hash4', 'user', '2147483647'),
(5, 'charliebrown', 'charlie@example.com', 'hash5', 'volunteer', '2147483647'),
(6, 'dianesmith', 'diane@example.com', 'hash6', 'owner', '2147483647'),
(7, 'eveblack', 'eve@example.com', 'hash7', 'user', '2147483647'),
(8, 'frankwhite', 'frank@example.com', 'hash8', 'volunteer', '2147483647'),
(9, 'graceturner', 'grace@example.com', 'hash9', 'owner', '2147483647'),
(10, 'harrypotter', 'harry@example.com', 'hash10', 'user', '1230987654');

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
(1, 'Spring Planting', 2, 1, 'Planting new seeds for the spring season.', '2024-04-10'),
(2, 'Garden Cleanup', 4, 2, 'Cleaning up the garden and preparing plots for new plants.', '2024-04-15'),
(3, 'Compost Workshop', 6, 3, 'Teaching how to create and use compost effectively.', '2024-04-20'),
(4, 'Irrigation Setup', 8, 4, 'Setting up an efficient irrigation system.', '2024-04-25'),
(5, 'Tree Planting', 10, 5, 'Planting trees around the garden perimeter.', '2024-04-30'),
(6, 'Weeding Session', 2, 6, 'Removing weeds from all garden plots.', '2024-05-05'),
(7, 'Harvest Festival', 4, 7, 'Organizing a festival to celebrate the first harvest.', '2024-05-10'),
(8, 'Garden Tour', 6, 8, 'Guided tour of the garden for new members.', '2024-05-15'),
(9, 'Tool Maintenance', 8, 9, 'Maintaining and repairing gardening tools.', '2024-05-20'),
(10, 'Soil Testing', 10, 10, 'Testing soil quality and providing improvement tips.', '2024-05-25');

-- --------------------------------------------------------

--
-- Table structure for table `weatherdata`
--

CREATE TABLE `weatherdata` (
  `weather_id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `temperature` float DEFAULT NULL,
  `humidity` float DEFAULT NULL,
  `precipitation` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weatherdata`
--

INSERT INTO `weatherdata` (`weather_id`, `location`, `date`, `temperature`, `humidity`, `precipitation`) VALUES
(1, 'New York', '2024-05-01', 20.5, 65.2, 12),
(2, 'Los Angeles', '2024-05-01', 22, 58.1, 0),
(3, 'Chicago', '2024-05-01', 18.3, 70, 8.5),
(4, 'Houston', '2024-05-01', 25.1, 75.3, 15),
(5, 'Phoenix', '2024-05-01', 28.4, 40, 0),
(6, 'Philadelphia', '2024-05-01', 19.7, 60.5, 10),
(7, 'San Antonio', '2024-05-01', 27.5, 55.8, 0),
(8, 'San Diego', '2024-05-01', 21.2, 62.3, 0),
(9, 'Dallas', '2024-05-01', 26, 68.2, 5),
(10, 'San Jose', '2024-05-01', 23.3, 52.6, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`crop_id`),
  ADD KEY `user_id` (`user_id`),
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
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `localpartners`
--
ALTER TABLE `localpartners`
  ADD PRIMARY KEY (`partner_id`);

--
-- Indexes for table `pestdata`
--
ALTER TABLE `pestdata`
  ADD PRIMARY KEY (`pest_id`);

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
-- Indexes for table `soildata`
--
ALTER TABLE `soildata`
  ADD PRIMARY KEY (`soil_id`);

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
-- Indexes for table `weatherdata`
--
ALTER TABLE `weatherdata`
  ADD PRIMARY KEY (`weather_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crops`
--
ALTER TABLE `crops`
  MODIFY `crop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `gardens`
--
ALTER TABLE `gardens`
  MODIFY `garden_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  MODIFY `guide_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `localpartners`
--
ALTER TABLE `localpartners`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pestdata`
--
ALTER TABLE `pestdata`
  MODIFY `pest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `plots`
--
ALTER TABLE `plots`
  MODIFY `plot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `resources`
--
ALTER TABLE `resources`
  MODIFY `resource_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `soildata`
--
ALTER TABLE `soildata`
  MODIFY `soil_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `volunteer_work`
--
ALTER TABLE `volunteer_work`
  MODIFY `Volunteer_work_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `weatherdata`
--
ALTER TABLE `weatherdata`
  MODIFY `weather_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `crops`
--
ALTER TABLE `crops`
  ADD CONSTRAINT `crops_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `crops_ibfk_2` FOREIGN KEY (`garden_id`) REFERENCES `gardens` (`garden_id`),
  ADD CONSTRAINT `crops_ibfk_3` FOREIGN KEY (`plot_id`) REFERENCES `plots` (`plot_id`);

--
-- Constraints for table `knowledgebase`
--
ALTER TABLE `knowledgebase`
  ADD CONSTRAINT `knowledgebase_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`user_id`);

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
