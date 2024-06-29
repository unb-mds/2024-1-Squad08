/*
written by BadCodeL0cvst, whose database is a terrible mess which should never be sent to production.

note1: on REPUBLICA table
	see that emaildono? it refers to the owner of the real state up for rent. 
    Keep it in mind when creating the api's, if you try to register a tenant in this table it 
	will MFU the entire database logic. Beware :)

note2: About user deletion
	If the user gets deleted, so will his personal number used to setup the account. Beware that!
	The DataBase should restrict the user deletion if he got a rent setup or if he got a republic 
    set up to be rented out. 


*/

CREATE TABLE USUARIO (
    emailusuario VARCHAR(256),
    nome VARCHAR(256) NOT NULL,
    senha VARCHAR(256) NOT NULL,
    idImUsuario BIGINT,
    CONSTRAINT USUARIO_UK UNIQUE (nome),
    CONSTRAINT USUARIO_PK PRIMARY KEY (emailusuario),
    CONSTRAINT USUARIO_IMAGEM_FK FOREIGN KEY (idImUsuario) REFERENCES IMAGEMUSUARIO(idImUsuario) ON DELETE RESTRICT
) ENGINE = InnoDB;

CREATE TABLE TELEFONEUSUARIO(
	telefone VARCHAR(32),
    emailusuario VARCHAR(256),
    CONSTRAINT TELEFONEUSUARIO_UK UNIQUE (telefone),
    CONSTRAINT TELEFONEUSUARIO_USUARIO_FK FOREIGN KEY (emailusuario) REFERENCES USUARIO(emailusuario) ON DELETE CASCADE ON UPDATE CASCADE -- this means if the user gets deleted, his personal info also goes caput.   
)ENGINE = InnoDB;

CREATE TABLE REPUBLICA (
    idRepublica BIGINT PRIMARY KEY,
    nome VARCHAR(256),
    cep VARCHAR(256),
    complemento VARCHAR(256),
    numero INT,
    emaildono VARCHAR(256),
    CONSTRAINT REPUBLICA_USUARIO_FK FOREIGN KEY (emaildono) REFERENCES USUARIO (emailusuario) ON DELETE CASCADE ON UPDATE CASCADE 
)ENGINE = InnoDB;

CREATE TABLE ALUGUEL (
    idAluguel BIGINT AUTO_INCREMENT,
    emailusuario VARCHAR(256),
    idRepublica BIGINT,
    CONSTRAINT ALUGUEL_PK PRIMARY KEY (idAluguel),
    CONSTRAINT ALUGUEL_USUARIO_FK FOREIGN KEY (emailusuario) REFERENCES USUARIO(emailusuario) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT ALUGUEL_REPUBLICA_FK FOREIGN KEY (idRepublica) REFERENCES REPUBLICA(idRepublica) ON DELETE RESTRICT
)ENGINE = InnoDB AUTO_INCREMENT = 1;

CREATE TABLE IMAGEMREPUBLICA (
    idImRepublica BIGINT PRIMARY KEY,
    caminhoImRepublica VARCHAR(256),
    idRepublica BIGINT,
    CONSTRAINT IMAGEMREPUBLICA_REPUBLICA_FK FOREIGN KEY (idRepublica) REFERENCES REPUBLICA(idRepublica) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE = InnoDB;

CREATE TABLE IMAGEMUSUARIO (
    idImUsuario BIGINT AUTO_INCREMENT,
    caminhoImUsuario VARCHAR(256),
    CONSTRAINT IMAGEMUSUARIO_PK PRIMARY KEY (idImUsuario),
    CONSTRAINT IMAGEMUSUARIO_UK UNIQUE (caminhoImUsuario)
)ENGINE = InnoDB AUTO_INCREMENT = 1;