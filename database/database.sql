-- Tabela Usuário
CREATE TABLE Usuario 
( 
  id_usuario INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,  
  email VARCHAR(255) NOT NULL,  
  contato VARCHAR(15) NOT NULL,  
  senha VARCHAR(255) NOT NULL,  
  genero VARCHAR(10) NOT NULL,
  data_nascimento DATE,  
  cpf VARCHAR(14) NOT NULL,  
  nome VARCHAR(255) NOT NULL,  
  UNIQUE (email), 
  UNIQUE (contato),
  UNIQUE (cpf)
); 

-- Tabela Quarto
CREATE TABLE Quarto 
( 
  id_quarto INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,  
  preco INT,  
  descricao VARCHAR(255),  
  local VARCHAR(255),  
  genero VARCHAR(10),  
  id_anunciante INT,
  FOREIGN KEY (id_anunciante) REFERENCES Usuario (id_usuario) 
); 

-- Tabela Reserva
CREATE TABLE Reserva 
( 
  id_reserva INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  data_checkin DATE,  
  data_checkout DATE,  
  id_quarto INT,  
  id_reservante INT,  
  data_reserva DATE,
  FOREIGN KEY (id_quarto) REFERENCES Quarto (id_quarto),
  FOREIGN KEY (id_reservante) REFERENCES Usuario (id_usuario)
);
