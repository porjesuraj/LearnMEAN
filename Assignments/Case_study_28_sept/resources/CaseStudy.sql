create table Admin (Id int primary key auto_increment,FirstName varchar(20) not null, LastName varchar(20) not null,Address varchar(20) not null,Contact varchar(15) not null, Email varchar(20) not null unique, Password varchar(100) not null);

create table Faculty (Id int primary key auto_increment,FirstName varchar(20) not null, LastName varchar(20) not null,Address varchar(20) not null,Contact varchar(15) not null, Email varchar(20) not null unique, Password varchar(100) not null, Age int not null, Experience int not null);

create table Classroom (Id int primary key auto_increment,Name varchar(20) not null,DateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,size int not null, FacultyId int,foreign key(FacultyId) references Faculty(Id));

create table Student (Id int primary key auto_increment,FirstName varchar(20) not null, LastName varchar(20) not null,Address varchar(20) not null,Contact varchar(15) not null, Email varchar(20) not null, Password varchar(100) not null unique, ClassroomId int,foreign key (ClassroomId) references Classroom(Id));


insert into Faculty values(default,"John","Lohia","US","+56123343","John@gmail.com","John",40,10);

insert into Faculty values(default,"Smith","Lai","UK","+53473243","Smith@gmail.com","Smith",46,10);

insert into Faculty values(default,"Tom","Lai","USA","+67473243","Tom@gmail.com","Tom",60,25);

insert into Classroom values(default,"class1","2019/12/12 12:12:12",50,1);

insert into Classroom values(default,"class2","2019/12/12 12:12:12",50,2);

insert into Classroom values(default,"class3","2019/12/12 12:12:12",50,3);

insert into Student values(default,"Raj","Rai","Pune","+912345678","raj@gmail.com","raj",3);

insert into Student values(default,"Jonny","jonny","PAK","+4321545678","jonny@gmail.com","jonny",3);

insert into Student values(default,"Jerry","jerry","UK","+4121545678","jerry@gmail.com","jerry",2);

insert into Student values(default,"Dany","Rai","AUS","+761545678","dany@gmail.com","dany",1);

insert into Student values(default,"Alexa","Rai","AUS","+791545678","alexa@gmail.com","Alexa",1);


