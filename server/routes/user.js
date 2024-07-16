const express = require('express');
const { 
    getUser,
    getUserFriends,
    addRemoveFriends
 } = require('../controllers/user');
const {verifyToken } = require('../middleware/auth')

const router = express.Router();

//read:
router.get('/:id', verifyToken, getUser);
router.get('/id/freinds', verifyToken, getUserFriends);

//update:
router.patch('/:id/:friendId', verifyToken, addRemoveFriends)

module.exports = router;