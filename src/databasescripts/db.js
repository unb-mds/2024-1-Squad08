/*
    Stolen from w3schools :), adapted by BadCodeL0cvst, whose code is terrible, unlike w3schools' code, which is, most of the time, very helpful.

    Simple ass script to connect the database to the mysql server. Ultrafun.

    Ah yeah, remember to run the databasecontrol script on mysql before trying to connect to mysql. 
        Ain't gonna work if you don't :)
    Also, check if the mysql service is running. Wouldn't make sense to connect then.
    Basic stuff, basic stuff. 
    Just like this piece of script.

    Second: for security reasons, alter these functions if using for production. 
    Don't want any bad actors meddling with your data, yeah?
*/
const Pool = require("mysql").createPool;

var connection = new Pool({
    port: 3306,
    database: "unirepdb_basic",
    host: "localhost",
    user: "appdbfunctions",
    password: "unirep"
});

module.exports = connection;