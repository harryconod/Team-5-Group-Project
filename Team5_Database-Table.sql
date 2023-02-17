create database isra_organics;
use isra_organics;

create table create_account(
user_name varchar(40),
email_id varchar(50),
user_password varchar(60),
primary key (email_id)
);

create table customer(
customer_id int(11),
customer_name varchar(40),
contact_details varchar(60),
primary key (customer_id)
);


use isra_organics;
create table category(
category_id int(11),
category_name varchar(40),
category_type varchar(40),
primary key (category_id)
);


create table products(
product_id int auto_increment,
product_name varchar(50),
product_model varchar(50),
product_price varchar(50),
category_id int,
primary key (product_id),
constraint fk_categoryproducts foreign key (category_id)
references category(category_id)
);


create table seller(
seller_id int auto_increment,
seller_name varchar(50),
seller_Contact_details varchar(100),
product_id int,
primary key (seller_id),
constraint fk_productsseller foreign key (product_id)
references products(product_id)
);



create table shoppingorder(
order_id int auto_increment,
order_date varchar(100),
customer_id int,
primary key (order_id),
constraint fk_customershoppingorder foreign key (customer_id)
references customer(customer_id)
);



create table delivery(
delivery_id int auto_increment,
order_id int,
customer_id int,
product_id int,
primary key (delivery_id),
constraint fk_shoppingorderdelivery foreign key (order_id)
references shoppingorder(order_id),
constraint fk_customerorder foreign key (customer_id)
references customer (customer_id),
constraint fk_productsdelivery foreign key (product_id)
references products (product_id)
);


create table payments(
payment_id int auto_increment,
customer_id int,
primary key (payment_id),
constraint fk_customerpayments foreign key (customer_id)
references customer (customer_id)
);



create table transactions(
transaction_id int auto_increment,
customer_id int,
order_id int,
product_id int,
payment_id int,
date datetime,
primary key (transaction_id),
constraint fk_customertransaction foreign key (customer_id)
references customer(customer_id),
constraint fk_shoppingordertransaction foreign key (order_id)
references shoppingorder (order_id),
constraint fk_productstransaction foreign key (product_id)
references products(product_id),
constraint fk_paymentstransactions foreign key (payment_id)
references payments(payment_id)
);

show tables;
commit;