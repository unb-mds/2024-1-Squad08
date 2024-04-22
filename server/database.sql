--TODO: WRITE THE ACTUAL INITIALIZATION CODE HERE
-- this is pedro's part, ain't gonna mess with it...
-- PLEASE ALTER THIS!!

CREATE DATABASE users;

CREATE TABLE user( --ALTER THIS FOR THE LOVE OF THE LOVING GOD.
    user_id SERIAL PRIMARY KEY,
    username varchar(50),
    pass varchar(50)
);