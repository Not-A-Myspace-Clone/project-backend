CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(100) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `links` varchar(2000) DEFAULT NULL,
  `location` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
)

