-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2023 at 08:06 PM
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
-- Database: `alacto_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `login_id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` int(10) NOT NULL,
  `profile_photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`login_id`, `name`, `email`, `password`, `contact`, `profile_photo`) VALUES
(1, 'administrator', 'admin@gmail.com', 'admin', 123456789, 'abc.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `architech`
--

CREATE TABLE `architech` (
  `architech_id` int(10) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phone_no` varchar(50) NOT NULL,
  `photo_file` varchar(100) DEFAULT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm_password` varchar(255) NOT NULL,
  `city_id` int(10) NOT NULL,
  `state_id` int(20) NOT NULL,
  `about_architech` text NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `aadhar` varchar(30) NOT NULL,
  `aadhar_photo` varchar(100) NOT NULL,
  `landmark` varchar(100) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `latitude` varchar(100) DEFAULT NULL,
  `longitude` varchar(100) DEFAULT NULL,
  `verify` varchar(10) DEFAULT NULL,
  `block` varchar(10) DEFAULT NULL,
  `otp` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `architech`
--

INSERT INTO `architech` (`architech_id`, `first_name`, `last_name`, `gender`, `phone_no`, `photo_file`, `email`, `password`, `confirm_password`, `city_id`, `state_id`, `about_architech`, `address`, `pincode`, `aadhar`, `aadhar_photo`, `landmark`, `qualification`, `latitude`, `longitude`, `verify`, `block`, `otp`) VALUES
(160, 'Swayam', 'Patel', 'Male', '789632541', '16807103227358.jpg', 'darjiy712@gmail.com', '1234', '1234', 96, 104, 'Architects are professionals trained in the art and science of building design. They develop the concepts for structures and turn those concepts into images and plans, which eventually may become homes, office buildings and other facilities. Their work in', 'Gandhinagar', '123456', '123456789632', '16807103222447.png', '12121212', '12 Pass', '1212121212', '21212121', 'Yes', 'No', 0),
(161, 'Sahil', 'Patel', 'Male', '7412589632', '16807109816817.jpeg', 'darjiy712@gmail.com', '1234', '1234', 96, 104, 'Architects are professionals trained in the art and science of building design. They develop the concepts for structures and turn those concepts into images and plans, which eventually may become homes, office buildings and other facilities. Their work in', 'Gandhinagar', '123456', '123456789632', '16807103403654.png', '12121212', '12 Pass', '1212121212', '21212121', 'Yes', 'No', 0),
(162, 'Yash', 'Patel', 'Male', '7412589632', '16807110226727.jpeg', 'yash10543@gmail.com', '1234', '1234', 96, 104, 'Architects are professionals trained in the art and science of building design. They develop the concepts for structures and turn those concepts into images and plans, which eventually may become homes, office buildings and other facilities. Their work in', 'Gandhinagar', '123456', '123456789632', '16807104213959.png', '12121212', '12 Pass', '1212121212', '21212121', 'Yes', 'No', 0),
(163, 'Anil', 'Baraiya', 'Male', '7412589632', '16807110576293.jpeg', 'anil12@gmail.com', '1234', '1234', 96, 104, 'Architects are professionals trained in the art and science of building design. They develop the concepts for structures and turn those concepts into images and plans, which eventually may become homes, office buildings and other facilities. Their work in', 'Gandhinagar', '123456', '123456789632', '16807104375376.png', '12121212', '12 Pass', '1212121212', '21212121', 'Yes', 'No', 0),
(164, 'Parth', 'Gohil', 'Male', '7412589632', '16807111272414.jpeg', 'parth12@gmail.com', '1234', '1234', 96, 104, 'Architects are professionals trained in the art and science of building design. They develop the concepts for structures and turn those concepts into images and plans, which eventually may become homes, office buildings and other facilities. Their work in', 'Gandhinagar', '123456', '123456789632', '16807104584563.png', '12121212', '12 Pass', '1212121212', '21212121', 'Yes', 'No', 0),
(186, 'Dev', 'Bundela', 'Male', '1234567895', '16823464427056.jpg', 'aa@gmail.com', '21', '21', 104, 104, 'An architect is a person who plans, designs and oversees the construction of buildings. To practice architecture means to provide services in connection with the design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose', 'Surat', '395004', '32323232323', '16817407196310.png', '121', '21212', '21212', '212', 'Yes', 'No', 0),
(190, 'Manav ', 'Tailor', 'Male', '1234567895', '16823467186272.jpg', 'qq12@gmail.com', '12', '12', 96, 104, 'An architect is a person who plans, designs and oversees the construction of buildings. To practice architecture means to provide services in connection with the design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose', 'Gandhinagar', '395004', '111111111111', '16823467189732.jpg', '', '12 Pass', '', '', 'Yes', 'No', 0),
(191, 'Pratham', 'Patel', 'Male', '1234569875', '16823478059347.jpg', 'pratham12@gmail.com', '12', '12', 104, 104, 'An architect is a person who plans, designs and oversees the construction of buildings. To practice architecture means to provide services in connection with the design of buildings and the space within the site surrounding the buildings that have human occupancy or use as their principal purpose', 'Surat', '395004', '123659877654', '16823478057811.jpg', '', 'Architect', '', '', 'Yes', 'No', 0);

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `article_id` int(10) NOT NULL,
  `architech_id` int(100) DEFAULT NULL,
  `user_id` int(100) DEFAULT NULL,
  `usertype` varchar(50) DEFAULT 'architect',
  `title` varchar(100) NOT NULL,
  `photo_article` varchar(100) DEFAULT NULL,
  `pdf_article` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `reference` varchar(100) NOT NULL,
  `add_date` date DEFAULT current_timestamp(),
  `approve` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`article_id`, `architech_id`, `user_id`, `usertype`, `title`, `photo_article`, `pdf_article`, `description`, `reference`, `add_date`, `approve`) VALUES
(100, 0, 132, 'Agent', 'Gurgaon-Faridabad Metro to connect Rapid Metro', '16817505184319.jpg', '16817505188317.jpg', 'The government of Haryana has authorised the construction of a metro connection linking Gurgaon and Faridabad. Since the government has already formulated the Detailed Project Report (DPR) for the proposed project, it indicates that the planning phase is ', 'INDIA NEWS', '2023-04-17', 'Yes'),
(101, 161, 133, 'Architech', 'Gurgaon developers advocate for restoring the stilt-plus-four-floors policy', '16817506115375.jpg', '16817506113852.jpg', 'The government of Haryana has authorised the construction of a metro connection linking Gurgaon and Faridabad. Since the government has already formulated the Detailed Project Report (DPR) for the proposed project, it indicates that the planning phase is ', 'INDIA NEWS', '2023-04-17', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categories_id` int(10) NOT NULL,
  `categories_name` varchar(100) NOT NULL,
  `media_file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categories_id`, `categories_name`, `media_file`) VALUES
(36, 'Agricultural', '16794058235073.jpg'),
(37, 'Commercial', '16794058497983.jpg'),
(38, 'Apartments', '16794058861357.jpg'),
(39, 'Urban', '16794059369020.jpg'),
(41, 'Land', '16807100904925.jpeg'),
(42, 'Row House', '16807101338242.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(10) NOT NULL,
  `city_name` varchar(191) NOT NULL,
  `state_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `state_id`) VALUES
(96, 'Gandhinagar', 104),
(97, 'Panaji', 106),
(98, 'Jaipur', 108),
(99, 'Amaravati', 105),
(100, 'Mumbai', 107),
(101, 'Chandigarh', 109),
(102, 'Dehradun', 110),
(103, 'Lucknow', 111),
(104, 'Surat', 104),
(105, 'Ahemdabad', 104),
(106, 'Vadodra', 104);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(10) NOT NULL,
  `user_type` varchar(50) NOT NULL,
  `architech_id` int(10) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  `comments` text NOT NULL,
  `comment_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `user_type`, `architech_id`, `user_id`, `comments`, `comment_date`) VALUES
(106, 'User', 0, 134, 'Nice Articles', '2023-04-17 22:33:24');

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `facilities_id` int(10) NOT NULL,
  `facilities_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facilities`
--

INSERT INTO `facilities` (`facilities_id`, `facilities_name`) VALUES
(49, 'Garden'),
(50, 'Swimming Pull'),
(51, 'Gym'),
(52, 'PlayGround'),
(53, 'Fire Safty'),
(54, 'Power Backup'),
(56, 'Guest Parking'),
(60, 'asdas'),
(61, 'asdas'),
(66, 'Bossaa');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact` int(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `feedback` text NOT NULL,
  `feedback_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `name`, `contact`, `email`, `feedback`, `feedback_date`) VALUES
(19, 'Yash', 0, 'aa@gmail.com', 'mandands', '0000-00-00 00:00:00'),
(20, 'asd', 0, 'aa@gmail.com', 'sasa', '0000-00-00 00:00:00'),
(21, 'asd', 12121, 'aa12@h.com', 'asa', '2023-04-12 14:02:02');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `image_id` int(10) NOT NULL,
  `title` varchar(200) NOT NULL,
  `portfolio_id` int(191) NOT NULL,
  `image_url` varchar(200) NOT NULL,
  `image_type` varchar(10) NOT NULL,
  `photo_file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `title`, `portfolio_id`, `image_url`, `image_type`, `photo_file`) VALUES
(38, 'HEllo', 51, 'www.google.com', 'Image', '16817491395492.jpg'),
(39, 'HEllo', 51, 'www.google.com', 'Image', '16817491462363.jpg'),
(40, '1', 58, '1', 'Image', '16824425019716.jpg'),
(41, '1', 58, '1', 'Image', '16824425083500.jpg'),
(42, '1', 58, '1', 'Image', '16824425143162.jpg'),
(43, '1', 58, '1', 'Image', '16824425215151.jpg'),
(44, '1', 62, '1', 'Image', '16824425928296.jpg'),
(46, '1', 62, '1', 'Image', '16824426075891.jpg'),
(47, '1', 62, '1', 'Image', '16824426134503.jpg'),
(48, '1', 61, '1', 'Image', '16824426975638.jpg'),
(49, '1', 61, '1', 'Image', '16824427044169.jpg'),
(50, '1', 60, '1', 'Image', '16824427672919.jpg'),
(52, '1', 60, '1', 'Image', '16824427797458.jpg'),
(53, '1', 60, '1', 'Image', '16824427919501.jpg'),
(54, '1', 59, '1', 'Image', '16824429278655.jpg'),
(55, '1', 59, '1', 'Image', '16824429332346.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `inquiry`
--

CREATE TABLE `inquiry` (
  `inquiry_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `contact` int(10) NOT NULL,
  `email_inquiry` varchar(20) NOT NULL,
  `inquiry_date` datetime NOT NULL DEFAULT current_timestamp(),
  `architech_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inquiry`
--

INSERT INTO `inquiry` (`inquiry_id`, `user_id`, `subject`, `contact`, `email_inquiry`, `inquiry_date`, `architech_id`) VALUES
(72, 136, 'Please Help', 1234567891, 'ww12@gmail.com', '2023-04-06 08:31:37', 161),
(74, 134, 'avbsdh', 545454, 'gvasghd@gmail.com', '2023-04-11 19:32:15', 161),
(75, 134, 'Hello', 1234567894, 'aa@gmail.com', '2023-04-17 21:58:43', 161),
(76, 134, 'asas', 1234567895, 'aa@gmail.com', '2023-04-18 10:26:08', 161);

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `log_id` int(10) NOT NULL,
  `property_inquiry_id` int(10) NOT NULL,
  `status` varchar(50) NOT NULL,
  `remark` varchar(50) NOT NULL,
  `log_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `media_id` int(191) NOT NULL,
  `property_id` int(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image_url` varchar(191) NOT NULL,
  `file_type` varchar(191) NOT NULL,
  `media_file` varchar(100) NOT NULL,
  `active` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`media_id`, `property_id`, `title`, `image_url`, `file_type`, `media_file`, `active`) VALUES
(32, 88, '1', '', 'Image', '16807158664384.jpg', 'Yes'),
(34, 88, '2', '', 'Image', '16807159077592.jpg', 'Yes'),
(35, 88, '3', '', 'Image', '16807159439552.jpg', 'Yes'),
(36, 89, '1', '', 'Image ', '16807161066583.jpg', 'Yes'),
(37, 89, '2', '', 'Image', '16807161447926.jpg', ''),
(38, 89, '3', '', 'Image', '16807161525604.jpg', ''),
(39, 89, '4', '', 'Image', '16807161601888.jpg', ''),
(40, 90, '1', '', 'Image', '16807162514572.jpg', ''),
(41, 90, '2', '', 'Image', '16807162604068.jpg', ''),
(42, 90, '3', '', 'Image', '16807162681351.jpg', ''),
(43, 91, '1', '', 'Image', '16807163679783.jpg', ''),
(44, 91, '2', '', 'Image', '16807163795690.jpg', ''),
(45, 91, '3', '', 'Image', '16807163934791.jpg', ''),
(46, 91, '4', '', 'Image', '16807164017342.jpg', ''),
(47, 91, '5', '', 'Image', '16807164106514.jpg', ''),
(48, 93, '1', '', 'Image', '16823498214050.jpg', 'Yes'),
(49, 93, '1', '', 'Image', '16823498297789.jpg', 'Yes'),
(50, 93, '1', '', 'Image', '16823498362955.jpg', 'Yes'),
(51, 93, '1', '', 'Image', '16823498434951.jpg', 'Yes'),
(52, 105, '1', '1', 'Image', '16823509681399.webp', 'Yes'),
(53, 105, '1', '1', 'Image', '16823509752427.webp', 'Yes'),
(54, 105, '1', '1', 'Image', '16823509824667.webp', 'Yes'),
(55, 104, '1', '1', 'Image', '16823510479866.jpg', 'Yes'),
(56, 104, '1', '1', 'Image', '16823510547166.jpg', 'Yes'),
(57, 104, '1', '1', 'Image', '16823510611489.jpg', 'Yes'),
(58, 106, '1', '1', 'Image', '16824035468304.jpeg', 'Yes'),
(59, 106, '1', '1', 'Image', '16824035565170.jpeg', 'Yes'),
(60, 106, '1', '1', 'Image', '16824035686221.jpeg', 'Yes'),
(61, 106, '1', '1', 'Image', '16824035769595.jpeg', 'Yes'),
(62, 106, '1', '1', 'Image', '16824035829230.jpeg', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `package_id` int(191) NOT NULL,
  `package_title` varchar(191) NOT NULL,
  `defination` varchar(191) NOT NULL,
  `price` varchar(100) NOT NULL,
  `facilities` varchar(191) NOT NULL,
  `total_property` int(20) NOT NULL,
  `package_date` date NOT NULL,
  `active` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`package_id`, `package_title`, `defination`, `price`, `facilities`, `total_property`, `package_date`, `active`) VALUES
(31, 'Gold', 'GOld', '100', '4', 4, '2002-12-12', 'Yes'),
(32, 'Platinum', 'Platinum', '300', '8', 8, '2002-12-12', 'Yes'),
(33, 'Diamond', 'Diamond', '600', '12', 12, '2002-12-12', 'Yes'),
(34, 'Business', 'Business', '800', '16', 16, '2002-12-12', 'Yes'),
(35, 'Free', 'Free', '0', '0', 1, '2002-12-12', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `packagepurchase`
--

CREATE TABLE `packagepurchase` (
  `packagepurchase_id` int(191) NOT NULL,
  `user_id` int(191) NOT NULL,
  `package_id` int(191) NOT NULL,
  `transaction_no` int(191) NOT NULL,
  `purchase_date` date DEFAULT current_timestamp(),
  `pay` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packagepurchase`
--

INSERT INTO `packagepurchase` (`packagepurchase_id`, `user_id`, `package_id`, `transaction_no`, `purchase_date`, `pay`) VALUES
(26, 132, 31, 1234, '2023-04-05', 'yes'),
(28, 134, 35, 1234, '2023-04-05', 'yes'),
(29, 135, 35, 1234, '2023-04-05', 'yes'),
(30, 136, 35, 1234, '2023-04-05', 'yes'),
(31, 137, 35, 1234, '2023-04-05', 'yes'),
(32, 147, 35, 1234, '2023-04-09', 'yes'),
(33, 148, 35, 1234, '2023-04-09', 'yes'),
(34, 134, 31, 0, '2020-12-02', 'Yes'),
(35, 0, 31, 123, '2022-02-22', 'yes'),
(36, 0, 34, 123, '2022-02-22', 'yes'),
(37, 150, 35, 1234, '2023-04-12', 'yes'),
(38, 149, 35, 1234, '2023-04-12', 'yes'),
(39, 0, 0, 0, '0000-00-00', ''),
(40, 0, 0, 0, '0000-00-00', ''),
(41, 0, 0, 0, '0000-00-00', ''),
(42, 0, 0, 0, '0000-00-00', ''),
(43, 151, 35, 1234, '2023-04-17', 'yes'),
(44, 152, 35, 1234, '2023-04-17', 'yes'),
(45, 153, 35, 1234, '2023-04-17', 'yes'),
(46, 154, 35, 1234, '2023-04-17', 'yes'),
(47, 155, 35, 1234, '2023-04-17', 'yes'),
(48, 156, 35, 1234, '2023-04-17', 'yes'),
(49, 157, 35, 1234, '2023-04-17', 'yes'),
(50, 158, 35, 1234, '2023-04-17', 'yes'),
(51, 159, 35, 1234, '2023-04-17', 'yes'),
(52, 160, 35, 1234, '2023-04-17', 'yes'),
(53, 161, 35, 1234, '2023-04-17', 'yes'),
(54, 162, 35, 1234, '2023-04-17', 'yes'),
(55, 163, 35, 1234, '2023-04-17', 'yes'),
(56, 164, 35, 1234, '2023-04-17', 'yes'),
(57, 165, 35, 1234, '2023-04-17', 'yes'),
(58, 166, 35, 1234, '2023-04-17', 'yes'),
(59, 167, 35, 1234, '2023-04-17', 'yes'),
(60, 168, 35, 1234, '2023-04-17', 'yes'),
(61, 169, 35, 1234, '2023-04-17', 'yes'),
(62, 170, 35, 1234, '2023-04-17', 'yes'),
(63, 171, 35, 1234, '2023-04-17', 'yes'),
(64, 187, 35, 1234, '2023-04-17', 'yes'),
(65, 133, 35, 1212121, '0000-00-00', 'Yes'),
(66, 188, 35, 1234, '2023-04-18', 'yes'),
(67, 188, 32, 123, '2022-02-22', 'yes'),
(68, 189, 32, 1234, '2023-04-24', 'yes'),
(69, 190, 35, 1234, '2023-04-24', 'yes'),
(70, 191, 35, 1234, '2023-04-24', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `plan_id` int(191) NOT NULL,
  `plan_title` varchar(191) NOT NULL,
  `categories_id` int(191) NOT NULL,
  `architech_id` int(191) NOT NULL,
  `photo_file` varchar(191) NOT NULL,
  `visits` int(191) NOT NULL,
  `specification` varchar(255) NOT NULL,
  `price` int(191) NOT NULL,
  `update_price` int(191) NOT NULL,
  `address` varchar(200) NOT NULL,
  `pincode` int(20) NOT NULL,
  `state_id` int(20) NOT NULL,
  `city_id` int(20) NOT NULL,
  `term_conditon` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `add_date` date NOT NULL,
  `plan_file` varchar(100) NOT NULL,
  `active` varchar(191) NOT NULL,
  `approve` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`plan_id`, `plan_title`, `categories_id`, `architech_id`, `photo_file`, `visits`, `specification`, `price`, `update_price`, `address`, `pincode`, `state_id`, `city_id`, `term_conditon`, `description`, `add_date`, `plan_file`, `active`, `approve`) VALUES
(41, 'Uraban', 36, 160, '16807131039241.jpeg', 4, 'Based on the concept of circular economy, this paper plans the agricultural production bases in the suburbs of the city, combines agricultural ecology to construct agricultural functional production bases suitable for current needs, and designs and plans ', 1200, 1300, 'Gnadhinagar', 12121212, 104, 96, 'The Client/ Owner – has specific goals, expectations, and a budget that is in alignment with goals and expectations. The Architect – must guide the Client, propose reasonable, sustainable design solutions, and provide accurate, detailed drawings.', 'he circular economy intends to assemble ecological and social advantages, rethink development by building monetary as well as social capital. It additionally aids in setting ecological issues, for instance, plastic and gas contamination. Some of the advan', '2022-12-20', '16807131039925.jpeg', 'Yes', 'Yes'),
(42, 'Apartments', 38, 161, '16807131921274.jpg', 4, 'Based on the concept of circular economy, this paper plans the agricultural production bases in the suburbs of the city, combines agricultural ecology to construct agricultural functional production bases suitable for current needs, and designs and plans ', 1400, 1300, 'Gnadhinagar', 12121212, 104, 96, 'The Client/ Owner – has specific goals, expectations, and a budget that is in alignment with goals and expectations. The Architect – must guide the Client, propose reasonable, sustainable design solutions, and provide accurate, detailed drawings.', 'he circular economy intends to assemble ecological and social advantages, rethink development by building monetary as well as social capital. It additionally aids in setting ecological issues, for instance, plastic and gas contamination. Some of the advan', '2022-12-20', '16807131926822.jpeg', 'Yes', 'Yes'),
(43, 'Row House', 42, 164, '16807132795674.jpeg', 4, 'Based on the concept of circular economy, this paper plans the agricultural production bases in the suburbs of the city, combines agricultural ecology to construct agricultural functional production bases suitable for current needs, and designs and plans ', 1600, 1700, 'Gnadhinagar', 12121212, 104, 96, 'The Client/ Owner – has specific goals, expectations, and a budget that is in alignment with goals and expectations. The Architect – must guide the Client, propose reasonable, sustainable design solutions, and provide accurate, detailed drawings.', 'he circular economy intends to assemble ecological and social advantages, rethink development by building monetary as well as social capital. It additionally aids in setting ecological issues, for instance, plastic and gas contamination. Some of the advan', '2022-12-20', '16807132798728.jpeg', 'Yes', 'Yes'),
(44, 'Commercial', 37, 163, '16807134898117.jpeg', 5, 'Using the site plan for architecture commercial building design , supporting  commercial building architecture, you can get an overview of the scope of working drawings in architecture.Both the existing and the proposed construction are revealed as buildi', 1700, 1700, 'Gandhinagar', 12345, 104, 96, 'Architectural Plans detail the proposed design for a development. They include context plans, clearly dimensioned floor plans, roof plans, typical unit layouts, elevations as well as building materials and colour schemes for all buildings and amenity faci', 'Architectural Plans detail the proposed design for a development. They include context plans, clearly dimensioned floor plans, roof plans, typical unit layouts, elevations as well as building materials and colour schemes for all buildings and amenity faci', '2023-02-02', '16807134899629.jpg', 'Yes', 'Yes'),
(45, 'Upon initial presentation of the site for the proposed international school, the captivating view along the principal east-west axis to the distant hills influenced the design approach. Locat', 36, 163, '16824447994072.jpg', 2, 'One of the general objectives is to promote orderly urban growth, be respectful of the environment and of the communities settled in the area, taking advantage of the existing infrastructure, and human capacities, so that the project primarily benefits th', 12000, 12000, 'Surat', 395004, 104, 104, 'Architectural Plans detail the proposed design for a development. They include context plans, clearly dimensioned floor plans, roof plans, typical unit layouts, elevations as well as building materials and colour schemes for all buildings and amenity faci', 'The program contemplates an exterior butterfly garden and an interior one in a pre-existing construction that is intervened with contemporary language. The outdoor butterfly garden includes a walkway covered by vines. This dry river creates an environment that changes depending on the years season, an orchard of fruit trees, and pollination islands. ', '2022-12-20', '16824441339031.jpg', 'Yes', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `plansfile`
--

CREATE TABLE `plansfile` (
  `file_id` int(191) NOT NULL,
  `plan_id` int(10) NOT NULL,
  `file_title` varchar(191) NOT NULL,
  `file_url` varchar(191) NOT NULL,
  `free` varchar(191) NOT NULL,
  `active` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plansfile`
--

INSERT INTO `plansfile` (`file_id`, `plan_id`, `file_title`, `file_url`, `free`, `active`) VALUES
(36, 41, 'Urban LandScap', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes'),
(37, 41, 'Urban LandScap', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes'),
(38, 42, 'Apartments', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes'),
(39, 42, 'Apartments', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes'),
(40, 42, 'Apartments', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes'),
(41, 43, 'Row House', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes'),
(42, 44, 'Commercial', 'https://en.wikipedia.org/wiki/Site_plan', 'Yes', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `portfolio_id` int(191) NOT NULL,
  `architech_id` int(20) NOT NULL,
  `categories_id` int(191) NOT NULL,
  `title_portfolio` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `verify_portfolio` varchar(20) NOT NULL,
  `active` varchar(191) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`portfolio_id`, `architech_id`, `categories_id`, `title_portfolio`, `description`, `verify_portfolio`, `active`, `start_date`, `end_date`) VALUES
(51, 161, 37, 'Commercial', 'With over 40 years of experience developing commercial real estate, Hamilton Partners exhibits excellence in all phases: site selection, financing, building design, construction and property ', 'Yes', 'No', '2022-12-12', '2024-12-12'),
(52, 162, 38, 'Apartments', 'When you’re beginning your property investment journey, there’s nothing more important than choosing your first property wisely.\r\n\r\nWhen buying your first property, it’s tempting to purchase ', 'Yes', 'No', '2022-12-12', '2024-12-12'),
(58, 160, 37, 'Bookhouse', 'The Serpentine Bookhouse is located amidst the greenery of trees along the Dasha River Ecological Corridor. To its west, the 13-kilometer scenic pathway of the Ecological Corridor runs continuously, and the north side is close to a childrens park with enjoyable sand pits attracting many family visitors, while the east side is surrounded by dense residential communities. The newly added public building includes a childrens reading room of 300 square meters and a public restroom open to park visitors 24/7, serving local residents and visitors starting in the fall of 2022.', 'Yes', 'No', '2022-12-20', '2023-12-20'),
(59, 163, 39, 'Tea & Coffee – White Lantern ', ' CoCo Cha Taiwan Tea & Coffee – White Lantern is an architectural renovation project, with the current status of a low-budget garden cafe. The main problem here that needs attention, is to put a new design into the old architectural appearance, for the two to harmonize with each other, as well as minimize the cost of renovation in the hot time of the Covid pandemic.', 'Yes', 'No', '2022-12-20', '2023-12-20'),
(60, 164, 42, 'CM House ', 'The house is located on an urban site in the city of Pelotas, southern Brasil, with a surface area of 420m². The project consists of a linear and compact composition, inside lot’s boundary, carefully placed on the land favoring the solar orientation, close to the southeastern boundary. The volume is marked by a white rectangular prism that rests on top of a concrete volume and is projected in a cantilever, at the front, and at the back.', 'Yes', 'No', '2022-12-20', '2023-12-20'),
(61, 186, 37, 'Nienke Apartments', 'The full timber modules are stacked in different ways, offering both single-module apartments and multilevel homes. Half of the 61 prefabricated timber apartments within Juf Nienke are intended for teachers and other residents who work in the essential services within Amsterdam, such as education, healthcare, and police forces. The other 31 apartments are private-sector rentals intended for families.', 'Yes', 'No', '2022-12-20', '2023-12-20'),
(62, 160, 37, 'Eichler House', ' Architect-artist Gustave Carlson — whose eponymous residential architecture and design practice works on custom renovations, new construction, and sustainable design across architectural styles — adapted an unusually pedigreed  the collective name for the distinctive single-family residences commissioned by the 20th-century real estate developer Joseph Eichler, to the current homeownersvision, while paying homage to its groundbreaking origins.', 'Yes', 'No', '2022-12-20', '2023-12-20');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(191) NOT NULL,
  `architech_id` int(191) NOT NULL,
  `project_title` varchar(191) NOT NULL,
  `facility` varchar(191) NOT NULL,
  `description` text NOT NULL,
  `photo_file_project` varchar(191) NOT NULL,
  `pdf_file` varchar(191) NOT NULL,
  `address` varchar(191) NOT NULL,
  `state_id` int(20) NOT NULL,
  `city_id` int(20) NOT NULL,
  `landmark` varchar(191) NOT NULL,
  `pincode` int(191) NOT NULL,
  `latitude` varchar(191) NOT NULL,
  `longitude` varchar(191) NOT NULL,
  `booked` varchar(191) NOT NULL,
  `enrollment` int(191) NOT NULL,
  `total_building` int(191) NOT NULL,
  `area` int(191) NOT NULL,
  `additonal_info` varchar(191) NOT NULL,
  `contect_number` int(191) NOT NULL,
  `email` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `architech_id`, `project_title`, `facility`, `description`, `photo_file_project`, `pdf_file`, `address`, `state_id`, `city_id`, `landmark`, `pincode`, `latitude`, `longitude`, `booked`, `enrollment`, `total_building`, `area`, `additonal_info`, `contect_number`, `email`) VALUES
(60, 160, ' An /outdoor shopping mall and luxury fashion arcade in Mumbai', 'Mall', 'Upon initial presentation of the site for the proposed international school, the captivating view along the principal east-west axis to the distant hills influenced the design approach. Located in rural Karnataka, spanning 4 acres and situated off the National Highway NH75, the site features a tree-lined landscape sloping 30 feet towards the west. Working with the sloping terrain, the design was thoughtfully crafted as a series of interconnected levels. The central spine, which is open to the sky and runs linearly, is flanked by classrooms and offers framed views of the hills from both the reception area and classroom corridors. Save this picture!', '16807143652934.jpg', '16807143658889.jpg', 'Gandhinagar', 104, 96, '12121212', 123456, '1212121212', '21212121', 'No', 2147483647, 5, 50000, '5', 1234567895, 'darjiy712@gmail.com'),
(61, 161, 'City Approach Penthouses Expanding the use of an historical building in a Conservation Area', 'Appartment', 'Upon initial presentation of the site for the proposed international school, the captivating view along the principal east-west axis to the distant hills influenced the design approach. Located in rural Karnataka, spanning 4 acres and situated off the National Highway NH75, the site features a tree-lined landscape sloping 30 feet towards the west. Working with the sloping terrain, the design was thoughtfully crafted as a series of interconnected levels. The central spine, which is open to the sky and runs linearly, is flanked by classrooms and offers framed views of the hills from both the reception area and classroom corridors. Save this picture!', '16807145126777.jpg', '16807145123138.jpg', 'Gandhinagar', 104, 96, '12121212', 123456, '1212121212', '21212121', 'No', 2147483647, 5, 50000, '5', 1234567895, 'darjiy712@gmail.com'),
(62, 161, 'City Approach Penthouses Expanding the use of an historical building in a Conservation Area', 'Apartment', 'A project in the Moorfields Conservation Area to create a roof addition on an Edwardian building, we sought to complement the existing building and broader street scene in our response. Conce', '16807147088763.jpg', '16807147084837.jpg', 'Gandhinagar', 104, 96, '12121212', 123456, '1212121212', '21212121', 'No', 2147483647, 5, 50000, '5', 1234567895, 'yash10543@gmail.com'),
(63, 160, 'Vidyakula International School', 'School', 'Upon initial presentation of the site for the proposed international school, the captivating view along the principal east-west axis to the distant  hills influenced the design approach. Located in rural Karnataka, spanning 4 acres and situated off the National Highway NH75, the site features a tree-lined landscape sloping 30 feet towards the west. Working with the sloping terrain, the design was thoughtfully crafted as a series of interconnected levels. The central spine, which is open to the sky and runs linearly, is flanked by classrooms and offers framed views of the hills from both the reception area and classroom corridors.\r\n\r\nSave this picture!', '16824432956344.jpg', '16824432957420.jpg', 'Bengaluru, Karnataka, India', 104, 104, 'Bengaluru', 395004, 'Bengaluru', 'Bengaluru', 'Yes', 2147483647, 5, 3950, 'NO', 1234567895, 'swayampatel71@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `property_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_id` int(20) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `property_title` varchar(191) NOT NULL,
  `description_property` text NOT NULL,
  `bedroom` int(11) NOT NULL,
  `hall` int(11) NOT NULL,
  `kitchen` int(11) NOT NULL,
  `master` int(11) NOT NULL,
  `property` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `address_property` varchar(191) NOT NULL,
  `state_id` int(20) NOT NULL,
  `city_id` int(20) NOT NULL,
  `landmark_property` int(11) NOT NULL,
  `pincode_property` int(11) NOT NULL,
  `latitude_property` int(11) NOT NULL,
  `longitude_property` int(11) NOT NULL,
  `parking_property` varchar(100) NOT NULL,
  `area_property` int(11) NOT NULL,
  `furnished` varchar(11) NOT NULL,
  `property_photo` varchar(100) NOT NULL,
  `pdf_property` varchar(100) DEFAULT NULL,
  `floors` int(11) NOT NULL,
  `numbers` int(11) NOT NULL,
  `eexit` varchar(20) NOT NULL,
  `cctv` varchar(20) NOT NULL,
  `wifi` varchar(20) NOT NULL,
  `air` varchar(20) NOT NULL,
  `security` varchar(20) NOT NULL,
  `terrace` varchar(20) NOT NULL,
  `lift` varchar(20) NOT NULL,
  `balcony` varchar(20) NOT NULL,
  `build_date` date NOT NULL,
  `available` varchar(11) NOT NULL,
  `approve` varchar(11) NOT NULL,
  `active` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`property_id`, `user_id`, `project_id`, `categories_id`, `property_title`, `description_property`, `bedroom`, `hall`, `kitchen`, `master`, `property`, `price`, `address_property`, `state_id`, `city_id`, `landmark_property`, `pincode_property`, `latitude_property`, `longitude_property`, `parking_property`, `area_property`, `furnished`, `property_photo`, `pdf_property`, `floors`, `numbers`, `eexit`, `cctv`, `wifi`, `air`, `security`, `terrace`, `lift`, `balcony`, `build_date`, `available`, `approve`, `active`) VALUES
(88, 132, 0, 36, 'Sneh Villa', 'bout Sneh Villa\r\n\r\nPositioned at well connected locality Vesu Canal Road, Sneh Villa is an aesthetically built project of Surat. The property comprises of 22 units which are enclosed within a', 2, 1, 1, 2, 'Sell', 1500000, 'Gandhinagar', 105, 99, 12121, 12121, 1212, 1212, 'FreeParking', 3251, 'Semi', '16807150448068.jpg', '16807150449320.jpg', 11, 2, 'EmergencyExit', '', '', '', '', 'Terrace', '', '', '2021-12-20', 'Yes', 'Yes', 'Yes'),
(89, 133, 0, 36, 'Avantis Ofira Posh', ' \r\nExperience luxury and comfort at its finest with this exquisite 5BHK flat for sale in Avantis Ofira Posh, Bharthana, Surat, offering the coveted freehold ownership rights. So, why wait Hur', 2, 1, 1, 2, 'Sell', 1500000, 'Gandhinagar', 104, 96, 12121, 12121, 1212, 1212, 'FreeParking', 3251, 'Semi', '16807152503124.jpg', '16807152501206.jpg', 11, 2, 'EmergencyExit', 'CCTV', '', 'Aircondition', 'SecurityGuard', 'Terrace', 'ElevatorLift', 'Balcony', '2021-12-20', 'Yes', 'Yes', 'Yes'),
(90, 134, 0, 42, ' Imperial Blossom The Valley Of Gardens', ' \r\nExperience luxury and comfort at its finest with this exquisite 5BHK flat for sale in Avantis Ofira Posh, Bharthana, Surat, offering the coveted freehold ownership rights. So, why wait Hur', 2, 1, 1, 2, 'Sell', 1500000, 'Gandhinagar', 104, 96, 12121, 12121, 1212, 1212, 'FreeParking', 3251, 'Semi', '16807153588295.jpg', '16807153587112.jpg', 11, 2, 'EmergencyExit', 'CCTV', '', 'Aircondition', 'SecurityGuard', 'Terrace', 'ElevatorLift', 'Balcony', '2023-04-11', 'Yes', 'Yes', 'Yes'),
(91, 134, 0, 38, 'Vaishnodevi Kingston', 'About Vaishnodevi Kingston\r\n\r\nThe magnificent Vaishnodevi Kingston that is smartly located in Pal, Surat is a well-planned project. Get good quality yet affordable options in Vaishnodevi King', 2, 1, 1, 2, 'Sell', 1500000, 'Gandhinagar', 104, 96, 12121, 1212, 1212, 1212, 'FreeParking', 3251, 'Semi', '16807155719905.jpg', '16807155712656.jpg', 11, 2, 'EmergencyExit', 'CCTV', '', 'Aircondition', 'SecurityGuard', 'Terrace', 'ElevatorLift', 'Balcony', '2021-12-20', 'Yes', 'Yes', 'Yes'),
(93, 192, 0, 42, 'Nandanvan III', 'Althan is a prominent residential locality in the South-western part of Surat city, along the Kankra Creek. It is dominated by mid-segment to premium residential multi-storied apartments, row', 2, 1, 1, 2, 'Sell', 1500000, 'Althan Bhimrad Road, Near Raghuvir Symphony, Althan Canal Rd, Surat,', 104, 104, 0, 0, 1, 1, 'FreeParking', 2833, 'Yes', '16823493889860.jpg', '16823499377172.jpg', 9, 2, 'EmergencyExit', 'CCTV', '', '', '', 'Terrace', '', '', '2021-12-20', 'Yes', 'Yes', 'Yes'),
(104, 193, 0, 37, 'Rajhans Synfonia', 'About Rajhans Synfonia\r\n\r\nSituated in Vesu, the Rajhans Synfonia is planned to offer a modern lifestyle to all the residents. Get good quality yet affordable options in Rajhans Synfonia in the price range of Rs. 75. 0 Lac - 78. 0 Lac. This project has a total of 624 units.\r\n\r\nA professionally conceptualised Residential property, this state-of-the art project is visually appealing. All the units in the property are Ready To Move. Designed to cater to the needs of different individuals, the property offers different unit types as Flat. The spacious and well-ventilated property units vary in size from 2 BHK Flat (1360. 0 Sq. Ft. - 1360. 0 Sq. Ft. ). There are a total of 12 towers in this well-designed site, each with its own number of benefits. 01 January 2021 is the date of possession.\r\n\r\nTP 75, FP42, Vesu Abhva, Vesu Main Road, Vesu, Surat, Gujarat is the full address of the site. The pin code of this masterpiece project is 395003. Rajhans Synfonia offers a contemporary lifestyle to its residents and is the perfect place to own your dream home.', 3, 1, 1, 2, 'Sell', 1500000, 'TP 75, FP42, Vesu Abhva, Vesu Main Road, Vesu, Surat, Gujarat', 104, 104, 0, 0, 1, 1, 'FreeParking', 1300, 'Yes', '16823502588452.JPG', '16823502584514.jpg', 12, 3, 'EmergencyExit', '', '', '', '', 'Terrace', '', '', '2021-12-20', 'Yes', 'Yes', 'Yes'),
(105, 193, 0, 39, 'Silicon Luxuria', 'About Rajhans Synfonia\r\n\r\nSituated in Vesu, the Rajhans Synfonia is planned to offer a modern lifestyle to all the residents. Get good quality yet affordable options in Rajhans Synfonia in th', 3, 1, 1, 2, 'Sell', 1500000, 'TP 75, FP42, Vesu Abhva, Vesu Main Road, Vesu, Surat, Gujarat', 104, 104, 0, 0, 1, 1, 'FreeParking', 1300, 'Yes', '16823508144077.webp', '16823509314467.webp', 12, 3, 'EmergencyExit', '', '', '', '', 'Terrace', '', '', '2021-12-20', 'Yes', 'Yes', 'Yes'),
(106, 195, 0, 37, 'Om Park', 'All the information displayed is as posted by the User and displayed on the website for informational purposes only. RealEstateIndia makes no representations and warranties of any kind, whether expressed or implied, for the Services and in relation to the accuracy or quality of any information transmitted or obtained at RealEstateIndia.com. You are hereby strongly advised to verify all information including visiting the relevant RERA website before taking any decision based on the contents displayed on the website', 3, 1, 1, 2, 'Sell', 1500000, 'Pal adajan\r\n\r\nNear Tgb hotel', 104, 104, 0, 0, 1, 1, 'FreeParking', 1950, 'Yes', '16824034558257.jpeg', '16824034557755.jpeg', 9, 2, 'EmergencyExit', 'CCTV', '', 'Aircondition', 'SecurityGuard', 'Terrace', 'ElevatorLift', 'Balcony', '2022-12-20', 'Yes', 'Yes', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `property_facility`
--

CREATE TABLE `property_facility` (
  `property_facility_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `facilities_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_facility`
--

INSERT INTO `property_facility` (`property_facility_id`, `property_id`, `facilities_id`) VALUES
(20, 88, 49),
(21, 88, 51),
(22, 88, 54),
(23, 89, 56),
(25, 89, 54),
(26, 89, 53),
(27, 89, 50),
(28, 90, 56),
(29, 90, 50),
(30, 90, 52),
(31, 90, 49),
(32, 91, 56),
(33, 91, 50),
(34, 91, 53),
(35, 91, 52),
(36, 91, 51);

-- --------------------------------------------------------

--
-- Table structure for table `property_inquiry`
--

CREATE TABLE `property_inquiry` (
  `property_inquiry_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `property_id` int(10) NOT NULL,
  `inquiry_text` varchar(100) NOT NULL,
  `contact` int(10) NOT NULL,
  `inquiry_email` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `inquiry_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property_inquiry`
--

INSERT INTO `property_inquiry` (`property_inquiry_id`, `user_id`, `property_id`, `inquiry_text`, `contact`, `inquiry_email`, `status`, `inquiry_date`) VALUES
(59, 134, 88, 'aaa', 111, 'aa@gmail.com', '', '2023-04-17 12:29:02'),
(60, 135, 88, 'aaaa', 1111111, 'aa@gmail.com', '', '2023-04-17 12:30:11'),
(61, 134, 88, 'gfgfg', 2147483647, '12@gmail.com', '', '2023-04-18 10:27:06');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purchase_id` int(191) NOT NULL,
  `plan_id` int(191) NOT NULL,
  `user_id` int(20) NOT NULL,
  `status` varchar(191) NOT NULL,
  `payment_mode` varchar(191) NOT NULL,
  `transaction_no` int(191) NOT NULL,
  `purchase_date` date NOT NULL,
  `pay` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`purchase_id`, `plan_id`, `user_id`, `status`, `payment_mode`, `transaction_no`, `purchase_date`, `pay`) VALUES
(60, 43, 136, 'complete', 'online', 123, '2022-02-22', 'yes'),
(61, 41, 132, 'complete', 'online', 123, '2022-02-22', 'yes'),
(64, 41, 134, 'complete', 'online', 123, '2022-02-22', 'yes'),
(65, 41, 188, 'complete', 'online', 123, '2022-02-22', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(191) NOT NULL,
  `state_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(104, 'Gujarat'),
(105, 'Andhra Pradesh	'),
(106, 'Goa'),
(107, 'Maharashtra'),
(108, 'Rajasthan'),
(109, 'Punjab'),
(110, 'Uttarakhand'),
(111, 'Uttar Pradesh');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(191) NOT NULL,
  `firstname` varchar(191) NOT NULL,
  `lastname` varchar(191) NOT NULL,
  `contact` bigint(10) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `email_user` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `confirm_password` varchar(191) NOT NULL,
  `state_id` int(20) NOT NULL,
  `city_id` int(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `pincode` varchar(50) NOT NULL,
  `photo_file` varchar(191) DEFAULT NULL,
  `type` varchar(191) NOT NULL,
  `about` varchar(191) NOT NULL,
  `aadhar_no` bigint(20) NOT NULL,
  `aadhar_photo` varchar(1910) DEFAULT NULL,
  `verify` varchar(191) NOT NULL,
  `otp` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `firstname`, `lastname`, `contact`, `gender`, `email_user`, `password`, `confirm_password`, `state_id`, `city_id`, `address`, `pincode`, `photo_file`, `type`, `about`, `aadhar_no`, `aadhar_photo`, `verify`, `otp`) VALUES
(132, 'Dixant ', 'Kanthariya', 7412369856, 'Male', 'dixantpvt09@gmail.com', '12121', '12121', 110, 102, 'Gandhinagar', '1212', '16807113897988.jpeg', 'Agent', 'An agent, in legal terminology, is a person who has been legally empowered to act on behalf of another person or an entity. An agent may be employed to represent a client in negotiations and ', 12121212, '16807113899995.png', 'Yes', '7657'),
(133, 'Yagnik', 'Savaliya', 1234567895, 'Male', 'yagnik12@gmail.com', '12121', '212121', 104, 96, 'Gandhinagar', '121212', '16807192996174.jpeg', 'Agent', 'An agent, in legal terminology, is a person who has been legally empowered to act on behalf of another person or an entity. An agent may be employed to represent a client in negotiations and ', 121212121212121212, '16807115861305.png', 'Yes', '1653'),
(134, 'Dev', 'Bundela', 1234567895, 'Male', 'dev12@gmail.com', '12121', '212121', 104, 96, 'Gandhinagar', '121212', '16807117087802.jpeg', 'User', 'An agent, in legal terminology, is a person who has been legally empowered to act on behalf of another person or an entity. An agent may be employed to represent a client in negotiations and ', 121212121212121212, '16807117085567.png', 'Yes', '4214'),
(136, 'Meet', 'Shah', 1234567895, 'Male', 'meet12@gmail.com', '12121', '212121', 104, 96, 'Gandhinagar', '121212', '16807121058521.jpeg', 'User', 'An agent, in legal terminology, is a person who has been legally empowered to act on behalf of another person or an entity. An agent may be employed to represent a client in negotiations and ', 121212121212121212, '16807121057642.png', 'Yes', '3044'),
(192, 'Rahul', 'Patel', 9865471235, 'Male', 'rahul12@gmail.com', '12', '12', 104, 104, 'Surat', '395004', '16823481744630.jpeg', 'Agent', 'agent helps his or her clients purchase, rent, or sell properties. They advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process o', 555555555555, '16823481745638.jpeg', 'Yes', NULL),
(193, 'Raj ', 'Gajjar', 9865471235, 'Male', 'raj12@gmail.com', '12', '12', 104, 104, 'Surat', '395004', '16823482466397.jpg', 'Agent', 'agent helps his or her clients purchase, rent, or sell properties. They advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process o', 555555555555, '16823482461815.jpeg', 'Yes', NULL),
(194, 'Sunay', 'Bhavsar', 9865471235, 'Male', 'raj12@gmail.com', '12', '12', 104, 104, 'Surat', '395004', '16823484012320.jpg', 'Agent', 'agent helps his or her clients purchase, rent, or sell properties. They advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process o', 555555555555, '16823484012423.jpeg', 'Yes', NULL),
(195, 'Lokesh', 'Raj', 9865471235, 'Male', 'raj12@gmail.com', '12', '12', 104, 104, 'Surat', '395004', '16823485839258.jpg', 'Agent', 'agent helps his or her clients purchase, rent, or sell properties. They advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process o', 555555555555, '16823485837603.jpeg', 'Yes', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `architech`
--
ALTER TABLE `architech`
  ADD PRIMARY KEY (`architech_id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `state_id` (`state_id`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`),
  ADD KEY `architech_id` (`architech_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `architech_id_2` (`architech_id`),
  ADD KEY `user_id_2` (`user_id`),
  ADD KEY `user_id_3` (`user_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categories_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `state_id` (`state_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`facilities_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `portfolio_id` (`portfolio_id`);

--
-- Indexes for table `inquiry`
--
ALTER TABLE `inquiry`
  ADD PRIMARY KEY (`inquiry_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `architech_id` (`architech_id`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `property_inquiry_id` (`property_inquiry_id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`media_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`package_id`);

--
-- Indexes for table `packagepurchase`
--
ALTER TABLE `packagepurchase`
  ADD PRIMARY KEY (`packagepurchase_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `plan_id` (`package_id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`plan_id`),
  ADD KEY `categories_id` (`categories_id`),
  ADD KEY `architech_id` (`architech_id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `plansfile`
--
ALTER TABLE `plansfile`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`portfolio_id`),
  ADD KEY `architech_id` (`architech_id`),
  ADD KEY `categories_id` (`categories_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `architech_id` (`architech_id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `categories_id` (`categories_id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indexes for table `property_facility`
--
ALTER TABLE `property_facility`
  ADD PRIMARY KEY (`property_facility_id`),
  ADD KEY `property_id` (`property_id`),
  ADD KEY `facilities_id` (`facilities_id`);

--
-- Indexes for table `property_inquiry`
--
ALTER TABLE `property_inquiry`
  ADD PRIMARY KEY (`property_inquiry_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `plan_id` (`plan_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `city_id` (`city_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `login_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `architech`
--
ALTER TABLE `architech`
  MODIFY `architech_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categories_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `facilities`
--
ALTER TABLE `facilities`
  MODIFY `facilities_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `inquiry`
--
ALTER TABLE `inquiry`
  MODIFY `inquiry_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `log_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `media_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `package_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `packagepurchase`
--
ALTER TABLE `packagepurchase`
  MODIFY `packagepurchase_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `plan_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `plansfile`
--
ALTER TABLE `plansfile`
  MODIFY `file_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `property_facility`
--
ALTER TABLE `property_facility`
  MODIFY `property_facility_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `property_inquiry`
--
ALTER TABLE `property_inquiry`
  MODIFY `property_inquiry_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `purchase_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(191) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=196;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `architech`
--
ALTER TABLE `architech`
  ADD CONSTRAINT `architech_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `state` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`portfolio_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `log`
--
ALTER TABLE `log`
  ADD CONSTRAINT `log_ibfk_1` FOREIGN KEY (`property_inquiry_id`) REFERENCES `property_inquiry` (`property_inquiry_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `media_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `property` (`property_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `plans`
--
ALTER TABLE `plans`
  ADD CONSTRAINT `plans_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`categories_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `plans_ibfk_2` FOREIGN KEY (`architech_id`) REFERENCES `architech` (`architech_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `plans_ibfk_3` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_ibfk_2` FOREIGN KEY (`architech_id`) REFERENCES `architech` (`architech_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
