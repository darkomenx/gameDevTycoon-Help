select * from main.public;
select * from main.theme;
select * from main.genre;
select * from main.platform;
select * from main.game;

select * from main.public;
delete from main.public where 1=1;
drop table if exists main.public;
create table if not exists main.public (
  id INTEGER PRIMARY KEY,
  `name` VARCHAR,
  `identifier` VARCHAR,
  `logo` VARCHAR
);

insert into main.public values (1, 'Jeunes', 'jeunes', '', 1);
insert into main.public values (2, 'Tous Publics', 'tous-publics', '', 1);
insert into main.public values (3, 'Public averti', 'public averti', '', 1);

select * from main.theme;
delete from main.theme where 1=1;
drop table if exists main.theme;
create table if not exists main.theme (
  id INTEGER PRIMARY KEY,
  `name` VARCHAR,
  `identifier` VARCHAR,
  `logo` VARCHAR
);

insert into main.theme values (1, 'Super Héros', 'super-hero', '', 1);
insert into main.theme values (2, 'Détective', 'detective', '', 1);
insert into main.theme values (3, 'Ninja', 'ninja', '', 1);
insert into main.theme values (4, 'Course', 'course', '', 1);
insert into main.theme values (5, 'Vocabulaire', 'vocabulaire', '', 1);
insert into main.theme values (6, 'Pirates', 'pirates', '', 1);
insert into main.theme values (7, 'Loi', 'loi', '', 1);
insert into main.theme values (8, 'Ecole', 'ecole', '', 1);

select * from main.genre;
delete from main.genre where 1=1;
drop table if exists main.genre;
create table if not exists main.genre (
  id INTEGER PRIMARY KEY,
  `name` VARCHAR,
  `identifier` VARCHAR,
  `logo` VARCHAR
);

insert into main.genre values (1, 'Action', 'action', '', 1);
insert into main.genre values (2, 'RPG', 'rpg', '', 1);
insert into main.genre values (3, 'Stratégie', 'strategie', '', 1);
insert into main.genre values (4, 'Aventure', 'aventure', '', 1);
insert into main.genre values (5, 'Simulation', 'simulation', '', 1);
insert into main.genre values (6, 'Casual', 'casual', '', 1);

select * from main.platform;
delete from main.platform where 1=1;
drop table if exists main.platform;
create table if not exists main.platform (
  id INTEGER PRIMARY KEY,
  `name` VARCHAR,
  `identifier` VARCHAR,
  `logo` VARCHAR
);

insert into main.platform values (1, 'Gameling', 'gameling', '', 1);
insert into main.platform values (2, 'Vena Gear', 'vena-gear', '', 1);
insert into main.platform values (3, 'Super TES', 'super-tes', '', 1);
insert into main.platform values (4, 'Vena Oasis', 'vena-oasis', '', 1);
insert into main.platform values (5, 'PC', 'pc', '', 1);
insert into main.platform values (6, 'Master V', 'master-v', '', 1);
insert into main.platform values (7, 'TES', 'tes', '', 1);

