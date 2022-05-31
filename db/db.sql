create database if not exists marketPlaceUtbOne;

use marketPlaceUtbOne;

create table  Users(
      id int(10) not null auto_increment,
      nombre varchar(45) default null,
      apellido varchar(45) default null,
      email varchar(45) default null,
      PhoneNumber int(20) default null,
      isAdmin boolean default false,
      primary key (id)
);
create table Products(
       Product_id int(5) Not  null auto_increment,
       descripcion varchar(1000) default null,
       precio int(20),
       primary key (Product_id)
);
create table Servicios(
       NumeroRegistro int(10) not null auto_increment,
       Descripcion varchar(500) default null,
       Worker_id int(10) not null,
       primary key (NumeroRegistro)
       
);

describe Users;
describe Products;
describe Servicios;

insert into Users values
    (1,'jhon','Robayo','bobafeet@',302309,true,false),(2,'Vict','ROM','Zuam@',305396,false,true);
select * from Users;

insert into Products values
      (1,'Discos de pesas de 10kg',80000);
select * from Products;

insert into Servicios values
        (1,1),(2,1);
        
alter table Users /*Añadimos el atributo de si es cliente*/
       add isClient boolean default false;

update Users set isClient = true where id=2;
/* Cambiamos el esta del usuario a cliente*/
select * from Users;