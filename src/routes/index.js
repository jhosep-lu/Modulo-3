const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUsersPromedioEdad, getStatus} = require('../controllers/index.controller');

router.get('/usuarios', getUsers);
router.post('/usuario', createUser);
router.get('/usuarios/promedio-edad', getUsersPromedioEdad);
router.get('/status',getStatus)

module.exports = router;