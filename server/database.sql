create table todo(
todo_id SERIAL PRIMARY KEY,
description VARCHAR(255)
);

create table Emp(
	id SERIAL PRIMARY KEY,
	age Numeric(2,0),
	department VARCHAR(255),
	name VARCHAR(255)
);