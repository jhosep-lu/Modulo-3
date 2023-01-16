# Modulo-3
API REST de Usuarios

Este API REST permite a los usuarios realizar operaciones Crear, Leer, en una base de datos de usuarios mediante peticiones HTTP.

Requisitos

•	Node.js
•	Una base de datos :  Postgresql
•	Postman o una herramienta similar para realizar peticiones HTTP

Instalación

1.	Clona el repositorio: https://github.com/jhosep-lu/Modulo-3.git
2.	Instala las dependencias: npm install
3.	Configura base de datos en el archivo: Modulo 3\database\database.sql
4.	Instalar nodemon:  npm install nodemon
5.	Inicia el servidor: npm run dev

Endpoints

•	GET /usuarios: Obtiene una lista de todos los usuarios en la base de datos.

•	GET /status:: Obtiene la  información del api-rest

•	POST /usuario: Crea un nuevo usuario en la base de datos.

•	GET/usuarios/promedio-edad: Obtiene el promedio de las edades de todos los usuarios

