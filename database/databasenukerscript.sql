/*
Written by BCL0c, whose deletion script will nuke the database so its data will never be retrieved again.
ever.

This script literally nukes the db. Useful for erasing the older one so we may write the new one. 
Use with assurance and moderation. 
*/

use unirepdb_infobasic;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IMAGEMREPUBLICA;
DROP TABLE ALUGUEL;
DROP TABLE REPUBLICA;
DROP TABLE TELEFONEUSUARIO;
DROP TABLE USUARIO;
DROP TABLE IMAGEMUSUARIO;

SET FOREIGN_KEY_CHECKS = 1;







