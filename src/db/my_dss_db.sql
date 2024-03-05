DROP database my_dss_db;

create database my_dss_db;

use my_dss_db;

create table users(
user_id int not null auto_increment,
user_first_name varchar(70) not null,
user_last_name varchar(100) not null,
user_email varchar(75) not null,
user_role int not null,					##fk
registration_date date not null,
user_status int NOT NULL,
primary key (user_id)
);

create table user_roles(
role_id int not null auto_increment,
role_name varchar (20) not null,
role_description varchar (255),
primary key (role_id)
);

create table user_password(
password_id int not null auto_increment,
user_id int not null,					#fk
password varchar(255) not null,
hash_key_pass varchar (255)not null,
creation_date date not null,
password_status int not null,
primary key (password_id)
);

##Adding FK users
alter table users add foreign key (user_role) references user_roles(role_id);

##adding Fk user_password
alter table user_password add foreign key (user_id) references users(user_id);

create table supplies(
supply_id int not null auto_increment,
supply_name varchar(100) not null,
trade_mark_id int not null, 			 ## fk
mesurament_unit_id int not null,		 ## fk
supply_presentation_id int not null,	 ## fk
unit_price double not null,
iva double not null,
comments  text,
primary key (supply_id)
);

CREATE TABLE products(
product_id int NOT NULL auto_increment,
product_name varchar(155) NOT NULL,
mesurament_unit_id int not null,		 ## fk
product_presentation_id int not null,	 ## fk
unit_price double NOT NULL,
iva double NOT NULL,
product_description text
PRIMARY KEY (product_id)
);

create table trade_mark(
trade_mark_id int not null auto_increment,
trade_mark_name varchar(100)not null,
trade_mark_description text,
primary key (trade_mark_id)
);

create table mesurament_unit(
mesurament_unit_id int not null auto_increment,
mesurament_unit_name varchar(100)not null,
unit_abbreviation varchar(10),
primary key (mesurament_unit_id)
);

create table presentation(
presentation_id int not null auto_increment,
presentation_name varchar(100) not null,
presentation_description text,
primary key (product_presentation_id)
);

##ADDING FK SUPPLIES  
alter table supplies add foreign key (trade_mark_id) references trade_mark (trade_mark_id);
alter table supplies add foreign key (mesurament_unit_id) references mesurament_unit (mesurament_unit_id);
alter table supplies add foreign key (supply_presentation_id) references presentation (presentation_id);

##ADDING FK PRODUCTS
alter table products add foreign key (mesurament_unit_id) references mesurament_unit (mesurament_unit_id);
alter table supplies add foreign key (product_presentation_id) references presentation (presentation_id);

CREATE TABLE costumers(
costumer_id int NOT NULL auto_increment,
costumer_name varchar(75) NOT null,
costumer_last_name varchar(150) not NULL,
costumer_direction text NOT NULL,
costumer_phone varchar(20) not null,
costumer_email varchar(60),
costumer_registration_date date,
PRIMARY KEY (costumer_id)
);

CREATE TABLE orders(
order_id int NOT NULL auto_increment,
order_number varchar(10) NOT NULL,
client_id int NOT NULL,					#fk
product_id int NOT NULL,				#fk
payment_id int not null,				#fk
quantity varchar(15),
sub_total double NOT NULL,
description text,
order_date date, not null
primary key(order_id)
);

create table payment_method(
method_id int not null auto_increment,
method_name varchar(30)not null,
description text,
primary key(method_id);
);

##ADDING FK TO ORDERS
alter table orders add foreign key (client_id) references costumers (costumer_id);
alter table orders add foreign key (product_id) references products (product_id);
alter table orders add foreign key (payment_id) references payment_method (method_id);
