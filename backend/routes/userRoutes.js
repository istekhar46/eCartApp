import express from 'express'
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getAllUsers, deleteUserProfile } from '../controller/userController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router()


router.route('/').post(registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);



export default router;