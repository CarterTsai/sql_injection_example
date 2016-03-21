CREATE DATABASE "test"
    WITH OWNER 'postgres'
    ENCODING 'UTF8'
    LC_COLLATE = 'zh_TW.UTF-8'
    LC_CTYPE = 'zh_TW.UTF-8'
    TEMPLATE template0;

\connect test

CREATE TABLE "member" (
    ID INT PRIMARY KEY     NOT NULL,
    NAME           TEXT    NOT NULL,
    PASSWORD       TEXT    NOT NULL
);
