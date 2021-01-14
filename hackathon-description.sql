-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: HACKATHON
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'snacks'),(2,'drinks'),(3,'candies'),(4,'goodies');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier` (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
INSERT INTO `panier` VALUES (1);
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produits`
--

DROP TABLE IF EXISTS `produits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produits` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(245) DEFAULT NULL,
  `slug` varchar(245) DEFAULT NULL,
  `photo` varchar(245) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `categories_id` int DEFAULT NULL,
  `gradient` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produits_categories1_idx` (`categories_id`),
  CONSTRAINT `fk_produits_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produits`
--

LOCK TABLES `produits` WRITE;
/*!40000 ALTER TABLE `produits` DISABLE KEYS */;
INSERT INTO `produits` VALUES (2,'Amazake',NULL,'uploads/Amazake-transparent.png','Amazake is a traditional drink made from fermented rice, slightly alcoholic (less than 1%). Sweet, Amazake has a naturally milky appearance.',2.5,2,'linear-gradient(45deg, #940A0E, #BF585B)'),(3,'DyDo Blend Coffee Latte - Demon Slayer',NULL,'uploads/Cafe-transparent.png','DyDo Blend Coffee Original celebrates its 45th anniversary with a magnificent collaboration with Demon Slayer, 8 different models available! Drink it hot or cold! Cans are chosen randomly.',3.5,2,'linear-gradient(45deg, #A78C23, #CAB874)'),(4,'Potato Maru Demon Slayer (Salt)',NULL,'uploads/DSlayer-transparent.png','Exciting collaboration! “Demon Slayer” x Potato Maru! Satisfy yours chips cravings with these crispy potato snacks! Salt flavor. There are 4 types of original packages.',1.5,1,'linear-gradient(45deg, #D45800, #C28961)'),(5,'Tokoyaki Tei',NULL,'uploads/snacks-transparent.png','Tokoyaki Tei, puffed corn balls that taste exactly like our favorite takoyaki. This is as close as you can get to eating the real thing! You can taste the sauce, the mayonnaise, and the octopus, in the same round shape! Try some, and you’ll swear it’s the real taste of takoyaki!',1.5,1,'linear-gradient(45deg, #FBC900, #E1CF88)'),(6,'Tyrant Habanero Spicy Rings',NULL,'uploads/SpicySnacks-transparents.png','Tohato spicy rings. One of the hottest chips around! Since 2003, these flaming rings of death have been burning their way around Japan! Don’t be deceived by the first bite, the after bites back! Have a taste. We dare you. ;) Spice indicator: 5/5.',2.1,1,'linear-gradient(45deg, #D45800, #C28961)'),(7,'Green Tea Can',NULL,'uploads/TheVert-transparent.png','Japanese Green Tea Can. Oi Ocha rearrange the culture of Japanese “Green Tea” to suit the lifestyles of the people in the world, contributing to a healthy and joyful everyday life with flavor and fun.',2.6,2,'linear-gradient(45deg, #65D230, #94C274)'),(8,'Puchitto Grape',NULL,'uploads/PuchittoRaisin-transparent.png','Puchitti Grappe soft candy is fun to eat and tastes great too! You can pick one grape off the brunch or eat the brunch whole! Great grape taste that makes you say, “Yum!” :)',2.3,3,'linear-gradient(45deg, #300459, #775696)'),(9,'Mugen no mi',NULL,'uploads/Galactic-transparent.png','Small candies, 3 flavors: soda(blue), grape(pink) and cola(yellow). Try mixing to get a new flavor!',3.5,3,'linear-gradient(45deg, #031440, #2A468F)'),(10,'Happy Nikukyu',NULL,'uploads/panda-transparent.png','Adorable panda paw shaped gummies with a solt gummy texture. Mix berries flavour.',4.5,3,'linear-gradient(45deg, #D7012A, #EF9BA5)');
/*!40000 ALTER TABLE `produits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produits_has_panier`
--

DROP TABLE IF EXISTS `produits_has_panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produits_has_panier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produits_id` int NOT NULL,
  `panier_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`,`produits_id`,`panier_id`),
  KEY `fk_produits_has_panier_panier1_idx` (`panier_id`),
  KEY `fk_produits_has_panier_produits_idx` (`produits_id`),
  CONSTRAINT `fk_produits_has_panier_panier1` FOREIGN KEY (`panier_id`) REFERENCES `panier` (`id`),
  CONSTRAINT `fk_produits_has_panier_produits` FOREIGN KEY (`produits_id`) REFERENCES `produits` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produits_has_panier`
--

LOCK TABLES `produits_has_panier` WRITE;
/*!40000 ALTER TABLE `produits_has_panier` DISABLE KEYS */;
INSERT INTO `produits_has_panier` VALUES (2,7,1,3),(3,3,1,4),(4,2,1,4);
/*!40000 ALTER TABLE `produits_has_panier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14 15:38:30
