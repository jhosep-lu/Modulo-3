const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'fge.,mp;',
    database: 'practica',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    //console.log(response.rows) ;
    //res.send('users');
    res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
   const { nombre, edad, email } = req.body;
    const response = await pool.query('INSERT INTO usuarios (nombre, edad, email) VALUES ($1, $2, $3)', [nombre, edad, email]);
    res.json({
        message: 'Usuario agregado correctamente',
        body: {
            user: {nombre, edad, email}
        }
    }) 
};


const getUsersPromedioEdad = async (req, res) => {
    const response = await pool.query('SELECT ROUND(AVG(edad)::numeric, 1) FROM usuarios');
    res.status(200).json({ edadPromedio: response.rows[0].round });
};

const systemInfo = {
    nameSystem: 'Api-Users',
    version: '1.0.0',
    developer: 'Jose Luis Mamani Reyes',
    email: 'jhosep.vi.lu@gmail.com',
    celular: '63745863'
};

const getStatus = (req, res) =>{
    res.status(200).json({systemInfo});
}

module.exports = {
    getUsers,
    createUser,
    getUsersPromedioEdad,
    getStatus
}