DROP TABLE IF EXISTS tblGame;
create table game(
id INT PRIMARY KEY AUTO_INCREMENT,
referee_id INT,
field INT,
start_time DATETIME(2)
);
insert into game (id, referee_id, field, start_time) values (1, 1, 15, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (2, 1, 5, '2021-10-03 16:00');
insert into game (id, referee_id, field, start_time) values (3, 2, 25, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (4, 5, 19, '2021-10-03 15:00');
insert into game (id, referee_id, field, start_time) values (5, 8, 17, '2021-10-03 11:00' );
insert into game (id, referee_id, field, start_time) values (6, 9, 12, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (7, 11, 1, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (8, 10, 6, '2021-10-03 12:00');
insert into game (id, referee_id, field, start_time) values (9, 9, 26, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (10, 9, 13, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (11, 9, 23, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (12, 10, 23, '2021-10-03 16:00');
insert into game (id, referee_id, field, start_time) values (13, 10, 16, '2021-10-03 12:00');
insert into game (id, referee_id, field, start_time) values (14, 8, 19, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (15, 11, 9, '2021-10-03 19:00');
insert into game (id, referee_id, field, start_time) values (16, 4, 2, '2021-10-03 18:00');
insert into game (id, referee_id, field, start_time) values (17, 10, 14, '2021-10-03 13:00');
insert into game (id, referee_id, field, start_time) values (18, 5, 24, '2021-10-03 18:00');
insert into game (id, referee_id, field, start_time) values (19, 6, 5, '2021-10-03 16:00');
insert into game (id, referee_id, field, start_time) values (20, 8, 21, '2021-10-03 14:00');

DROP TABLE IF EXISTS tblReferee;
create table referee (
id INT PRIMARY KEY AUTO_INCREMENT ,
first_name VARCHAR(50),
last_name VARCHAR(50),
age INT,
grade_level INT,
skill INT
);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (1,
'Wendall', 'Grundy', 9, 6, 99);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (2,
'Trisha', 'Stirrup', 14, 3, 58);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (3,
'Marcia', 'Riggs', 49, 1, 70);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (4,
'Federica', 'Biasio', 58, 1, 85);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (5,
'Nathanial', 'Cunde', 56, 3, 43);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (6,
'Charlie', 'Basford', 32, 3, 52);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (7,
'Sara-ann', 'Allwood', 37, 8, 2);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (8,
'Rosene', 'Nancarrow', 34, 2, 3);
insert into referee (id, first_name, last_name, age, grade_level, skill) values (9,
'Julio', 'Duplock', 35, 1, 3);
insert into referee (id, first_name, last_name, age, grade_level, skill) values
(10, 'Heidie', 'Priestland', 41, 5, 79);
insert into referee (id, first_name, last_name, age, grade_level, skill) values
(11, 'Rudiger', 'Sword', 40, 3, 67);

