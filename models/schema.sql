CREATE SCHEMA project2_db ;
USE project2_db;

CREATE TABLE user (
  iduser INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  PRIMARY KEY (iduser));
  
CREATE TABLE categorie (
  idcategorie INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  color VARCHAR(45) NOT NULL,
  PRIMARY KEY (idcategorie));
  
CREATE TABLE event (
  idevent INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_categorie INT NOT NULL,
  name VARCHAR(45) NOT NULL,
  notification TINYINT NULL DEFAULT 0,
  date DATE NOT NULL,
  time TIME NOT NULL,
  description VARCHAR(100) NULL,
  PRIMARY KEY (idevent),
  INDEX fk_iduser_idx (id_user ASC) VISIBLE,
  INDEX fkid_categorie_idx (id_categorie ASC) VISIBLE,
  CONSTRAINT fk_iduser
    FOREIGN KEY (id_user)
    REFERENCES user (iduser)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT fkid_categorie
    FOREIGN KEY (id_categorie)
    REFERENCES categorie (idcategorie)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);
