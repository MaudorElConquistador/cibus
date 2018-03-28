CREATE DATABASE CIBUS DEFAULT CHARACTER SET utf8;
USE CIBUS;
CREATE TABLE Title(
    id_tit MEDIUMINT AUTO_INCREMENT,
    tit_tit VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_tit)
);
CREATE TABLE Description(
    id_des MEDIUMINT AUTO_INCREMENT,
    des_des VARCHAR(300) NOT NULL,
    PRIMARY KEY (id_des)
);
CREATE TABLE RaspberryMACs(
    id_mac MEDIUMINT AUTO_INCREMENT,
    mac_mac CHAR(17) NOT NULL,
    PRIMARY KEY (id_mac)
);
CREATE TABLE UserAccount(
    id_usa MEDIUMINT AUTO_INCREMENT,
    nme_usa VARCHAR(30) NOT NULL,
    psw_usa VARCHAR(500) NOT NULL,
    mac_usa MEDIUMINT,
    PRIMARY KEY (id_usa),
    FOREIGN KEY (mac_usa) REFERENCES RaspberryMACs(id_mac)
);
CREATE TABLE Ingredients(
    id_ing MEDIUMINT AUTO_INCREMENT,
    ing_ing VARCHAR(75) NOT NULL,
    usr_ing MEDIUMINT,
    PRIMARY KEY (id_ing),
    FOREIGN KEY (usr_ing) REFERENCES UserAccount(id_usa)
);
CREATE TABLE UserSchedule(
    id_uss MEDIUMINT,
    hr1_uss SMALLINT,
    hr2_uss SMALLINT,
    hr3_uss SMALLINT,
    hr4_uss SMALLINT,
    hr5_uss SMALLINT,
    FOREIGN KEY (id_uss) REFERENCES UserAccount(id_usa)
);
CREATE TABLE RecipeProcess(
    id_pdr MEDIUMINT,
    rec_pdr BLOB NOT NULL,
    PRIMARY KEY (id_pdr)
);
CREATE TABLE Recipes(
    tit_rec MEDIUMINT NOT NULL,
    ing_rec MEDIUMINT NOT NULL,
    des_rec MEDIUMINT NOT NULL,
    rec_rec MEDIUMINT NOT NULL,
    FOREIGN KEY (tit_rec) REFERENCES Title(id_tit),
    FOREIGN KEY (ing_rec) REFERENCES Ingredients(id_ing),
    FOREIGN KEY (des_rec) REFERENCES Description(id_des),
    FOREIGN KEY (rec_rec) REFERENCES RecipeProcess(id_pdr)
);

--tomates, papas, cebolla, limón, bistec, pechuga, aguacate, huevo, leche, crema, queso, jamón, salsa, pollo
INSERT INTO Title VALUES (
    "título"
);
INSERT INTO Ingredients(ing_ing) VALUES(
    "Jamón",
    "Queso Panela",
    "Queso Oaxaca",
    "Salchichas",
    "Leche",
    "Huevo",
    "Aguacate",
    "Jitomate",
    "Papas",
    "Frijoles",
    "Calabaza",
    "Crema",
    "Atun",
    "Mantequilla",
    "tomates",
    "limon",
    "Bistec",
);
INSERT INTO Description VALUES (
    "descripción"
);
INSERT INTO RaspberryMACs VALUES (
    "00-14-22-01-23-45"
);
