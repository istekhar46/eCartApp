import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';







//! auth Controller ===============>>>>>>>>>>>>>>>>>>>>>>>>>>

// @Desc    Auth user/set token
// @route   POST /api/users/auth
// @access  public

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(res, user._id),
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid credintial')
    }
})



// @Desc    register User..
// @route   POST /api/users
// @access  public

const registerUser = asyncHandler(async (req, res) => {

    // destructure data from the req body...
    const { name, email, password } = req.body;
      // Check if the email exists in both User and Doctor schemas
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
          res.status(400);
          throw new Error('User already exists');
      }

    let  user = new User({
            name,
            email,
            password, //?this password is hashed in user model with schema method called pre()
           
        })
    

    await user.save();

    if (user) {
        const {password, ...rest} = user._doc;
        generateToken(res, user._id)
        res.status(201).json({ ...rest });
    } else {
        res.status(400)
        throw new Error('invalid user data');
    }
})



// @Desc    Logout User..
// @route   POST /api/users/logout
// @access  public

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({ message: "User logged out" })
})


//! user Controllers =============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// @Desc    Get User profile..
// @route   POST /api/users/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id).select('-password')
    res.status(200).json({ user });
})

// @Desc    Update User profile..
// @route   PUT /api/users/profile
// @access  private

const updateUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).select('-password')

    if (user) {

        res.status(200).json({ user })

    } else {
        res.status(404)
        throw new Error("User not found")
    }
})
const deleteUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id)

    if (user) {

        res.status(200).json(user._id)

    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find({}).select('-password')
    if (users) {
        res.status(200).json({ users });
    }
    else {
        res.status(404)
        throw new Error({ success: false, message: "No users found" });
    }
})



export {
    authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getAllUsers, deleteUserProfile
}