CREATE DATABASE "test"
    WITH OWNER 'postgres'
    ENCODING 'UTF8'
    LC_COLLATE = 'zh_TW.UTF-8'
    LC_CTYPE = 'zh_TW.UTF-8'
    TEMPLATE template0;

\connect test

CREATE TABLE "memberx" (
    ID INT PRIMARY KEY     NOT NULL,
    NAME           TEXT    NOT NULL,
    PASSWORD       TEXT    NOT NULL,
    createAt       timestamp NOT NULL,
    updateAt       timestamp NOT NULL
);



INSERT INTO memberx ("id", "name", "password", "createat", "updateat") VALUES ('1','test1', 'abcd1234', '2015/01/01', '2015/01/01');
INSERT INTO memberx ("id", "name", "password", "createat", "updateat") VALUES ('2','test2', '1234abcd', '2015/01/01', '2015/01/01');
INSERT INTO memberx ("id", "name", "password", "createat", "updateat") VALUES ('3','test3', '9999AAAA', '2015/01/01', '2015/01/01');
