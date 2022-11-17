import express from 'express';
import { addAdmin, loginAdmin } from '../controller/admin-cantroller.js';
import { getUsers, addUser, getUserById, editUser, deleteUser, serachByName } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

//searching router
router.get("/serach/:name",serachByName);


router.post("/admin",addAdmin);
router.post("/login",loginAdmin);

export default router;