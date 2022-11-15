import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser, serachByName } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

//searching router
router.get("/serach/:name",serachByName)

export default router;