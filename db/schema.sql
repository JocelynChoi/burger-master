DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burgername varchar(255) NOT NULL,
devoured boolean default true,
PRIMARY KEY (id)
);



 select * from burgers;
