/*
    Stolen from w3schools :), adapted by BadCodeL0cvst, whose code is terrible, unlike w3schools' code, which is, most of the time, very helpful.

    Simple ass script to connect the database to the mysql server. Ultrafun.

    Ah yeah, remember to run the databasecontrol script on mysql before trying to connect to mysql. 
        Ain't gonna work if you don't :)
    Also, check if the mysql service is running. Wouldn't make sense to connect then.
    Basic stuff, basic stuff. 
    Just like this piece of script.
*/
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "appdbfunctions",
    password: "unirep"
})

connection.connect(function (err) { 
    if (err) throw err;
    console.log("Connected!");
})