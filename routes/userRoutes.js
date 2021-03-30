const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/add-user', userController.addUser);
router.get('/user', userController.getUserByEmail);
router.put('/edit-user', userController.editUser);
router.delete('/delete-user', userController.deleteUser);

module.exports = router;
