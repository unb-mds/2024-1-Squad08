/*
Written by BCL0c, whose inserts will most likely fail.

This is the population script for the database. It inserts a lot of stuff so we can 
test it out and work on subsequent changes. 

*/

INSERT INTO IMAGEMUSUARIO(caminhoImUsuario) VALUES ('./public/images/users/pfp1.png'),
												   ('./public/images/users/pfp2.png'),
												   ('./public/images/users/pfp3.png'),
												   ('./public/images/users/pfp4.png'),
												   ('./public/images/users/pfp5.png');
                                 
INSERT INTO USUARIO(emailusuario, nomeusuario, senha, idImUsuario) VALUES ('joaoninguem@gmail.com', 'joaoninguem', '12345678', 1),
																	      ('bigjohnson@gmail.com', 'bigjohnson', '12345678', 2),
																	      ('smalljohnson@gmail.com', 'Small Johnson', '12345678', null), -- when user image is null, the program SHOULD default to some other image
																	      ('john.braga@gmail.com', 'John Braga', '12345678', 1),
																	      ('incendiomachine@gmail.com', 'John Meedia', '12345678', 1);
                           
INSERT INTO TELEFONEUSUARIO(telefone, emailusuario) VALUES ('61983021391', 'joaoninguem@gmail.com'),
								   ('73281089412', 'joaoninguem@gmail.com'),
                                   ('55237104123', 'smalljohnson@gmail.com'),
                                   ('61738210332', 'john.braga@gmail.com'),
                                   ('61472910142', 'incendiomachine@gmail.com');
                                   
INSERT INTO REPUBLICA(nome, cep, complemento, numero, emaildono) VALUES ('rep1', '72430109', 'Quadra 1, Conjunto I', 407, 'bigjohnson@gmail.com'), -- Setor Norte Q 1 Quadra 1 Conjunto I Lotes 407/409/411 - Gama, Brasília - DF, 72430-109
																		 ('rep2', '72445000', 'QI 1', 620, 'bigjohnson@gmail.com'), -- Setor Leste Industrial, Lotes 620 a 680, QI 1 - Gama, Brasília - DF, 72445-000
																		 ('rep3', '72445030', 'QI 03', 220, 'bigjohnson@gmail.com'), -- QI 03, Lote 220, Sce St. Leste Industrial - Gama, Brasília - DF, 72445-030
																		 ('rep4', '72460100', 'at. Dia a Dia', 1, 'incendiomachine@gmail.com'), -- St. Leste - Gama, Brasília - DF, 72460-100
																		 ('rep5', '72405610', 'Quadra 1', 1, 'incendiomachine@gmail.com'); -- St. Central CL 1 Quadra 01 Lote, SCE Ae Leste, 1 - Pte. Alta Norte (Gama), Brasília - DF, 72405-610
                             
INSERT INTO ALUGUEL(emailusuario, idRepublica) VALUES ('smalljohnson@gmail.com', 1),
													   ('john.braga@gmail.com', 2),
													   ('john.braga@gmail.com', 3),
													   ('joaoninguem@gmail.com', 4),
													   ('smalljohnson@gmail.com', 5);
                           
INSERT INTO IMAGEMREPUBLICA(caminhoImRepublica, idRepublica) VALUES ('./public/images/republics/im1.png', 1),
																    ('./public/images/republics/im2.png', 2),
																    ('./public/images/republics/im3.png', 2),
																    ('./public/images/republics/im4.png', 4),
																    ('./public/images/republics/im5.png', 5);