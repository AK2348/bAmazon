CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id MEDIUMINT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
);

select * from products;

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES ("Play-Doh","Arts&Crafts",11.19,40),
    ("Crayola","Arts&CraftT",11.24,30),
    ("Canon EOS M50","Electronics",699.00,3),
    ("LG OLED55C7P","Electronics",1797.92,5),
    ("Dark Wash Jeans","CLOTHING",99.99,5),
    ("Blue dress","CLOTHING",105.99,6),
    ("Honey Nut Cheerios","Grocery",3.29,24),
    ("Jif Creamy Peanut Butter","Grocery",4.99,65),
    ("Aveeno Stress Relief Body Lotion","Skin Care",14.99,25),
    ("Tea Tree Oil Body Wash","Skin Care",14.20,18);
