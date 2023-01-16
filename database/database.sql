CREATE DATABASE practica;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    edad INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO usuarios (nombre, edad, email) VALUES 
    ('Juan Perez', 25, 'jp@email.com'), 
    ('Alejandra Cruz', 30, 'alejandrac@email.com'), 
    ('Paul Gonzalez', 35, 'pgonzalez@email.com');

select * from usuarios;
