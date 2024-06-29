/*
written by BadCodeL0cvst, whose database is a terrible mess which should never be sent to production.

note1: on REPUBLICA table
	see that emaildono? it refers to the owner of the real state up for rent. 
    Keep it in mind when creating the api's, if you try to register a tenant in this table it 
	will MFU the entire database logic. Beware :)


*/

CREATE TABLE USUARIO (
    emailusuario VARCHAR(256),
    nome VARCHAR(256) NOT NULL,
    senha VARCHAR(256) NOT NULL,
    idImUsuario BIGINT,
    CONSTRAINT USUARIO_PK PRIMARY KEY (emailusuario),
    CONSTRAINT USUARIO_IMAGEM_FK FOREIGN KEY (idImUsuario) REFERENCES IMAGEMUSUARIO(idImUsuario) ON DELETE RESTRICT
) ENGINE = InnoDB;

CREATE TABLE TELEFONEUSUARIO(
	telefone VARCHAR(32),
    emailusuario VARCHAR(256),
    CONSTRAINT TELEFONEUSUARIO_UK UNIQUE (telefone),
    CONSTRAINT TELEFONEUSUARIO_USUARIO_FK FOREIGN KEY (emailusuario) REFERENCES USUARIO(emailusuario) ON DELETE CASCADE ON UPDATE CASCADE    
)ENGINE = InnoDB;

CREATE TABLE REPUBLICA (
    idRepublica BIGINT PRIMARY KEY,
    nome VARCHAR(256),
    cep VARCHAR(256),
    complemento VARCHAR(256),
    numero INT,
    emaildono VARCHAR(256),
    CONSTRAINT REPUBLICA_USUARIO_FK FOREIGN KEY (emaildono) REFERENCES USUARIO (emailusuario) ON DELETE RESTRICT
)ENGINE = InnoDB;

CREATE TABLE ALUGUEL (
    idAluguel BIGINT PRIMARY KEY,
    FK_USUARIO_emailusuario VARCHAR(256),
    FK_REPUBLICA_idRepublica BIGINT,
    CONSTRAINT FK_ALUGUEL_2 FOREIGN KEY (FK_USUARIO_emailusuario) REFERENCES USUARIO (emailusuario) ON DELETE RESTRICT,
    CONSTRAINT FK_ALUGUEL_3 FOREIGN KEY (FK_REPUBLICA_idRepublica) REFERENCES REPUBLICA (idRepublica) ON DELETE RESTRICT
)ENGINE = InnoDB;

CREATE TABLE IMAGEMREPUBLICA (
    idImRepublica BIGINT PRIMARY KEY,
    caminhoImRepublica VARCHAR(256),
    FK_REPUBLICA_idRepublica BIGINT,
    CONSTRAINT FK_IMAGEMREPUBLICA_2 FOREIGN KEY (FK_REPUBLICA_idRepublica) REFERENCES REPUBLICA (idRepublica) ON DELETE RESTRICT
)ENGINE = InnoDB;

CREATE TABLE IMAGEMUSUARIO (
    idImUsuario BIGINT PRIMARY KEY,
    caminhoImUsuario VARCHAR(256)
)ENGINE = InnoDB;