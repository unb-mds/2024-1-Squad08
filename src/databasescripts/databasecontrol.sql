/*
    Written by BCL0c, whose control access will be the most unsecure piece of software ever written.

    This assumes the usage of the other scripts to setup the database. 
    Pretty plz, act accordingly.
    And, of course, in case code usage in some other project, change the passwords and stuff. 

    Very simple script, just enough to provide a login to mysql that is not the system. 
    Don't want the app using system up and down, could cause major malfunctions.

*/


use unirepdb_basic;

create role if not exists 'dev', 'app';

grant all on unirepdb_basic.* to 'dev';
grant select, insert, update, delete on unirepdb_basic.* to 'app';

create user if not exists 'appdbfunctions' 
    identified by 'unirep'
    default role 'app';

