const { Router } = require('express');
const router = Router();

const { getUsers, createUser, updateUser, deleteUser, getUsersPromedioEdad, getStatus} = require('../controllers/index.controller');

router.get('/usuarios', getUsers);
router.post('/usuario', createUser);
router.put('/usuario/:id', updateUser)
router.delete('/usuario/:id', deleteUser);
router.get('/usuarios/promedio-edad', getUsersPromedioEdad);
router.get('/status',getStatus)

module.exports = router;