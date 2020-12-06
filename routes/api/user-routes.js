const router = require('express').Router();
const { getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend } = require('../../controllers/user-controller');
const { remove } = require('../../models/User');


router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    .delete(removeFriend);


module.exports = router;