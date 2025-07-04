const express = require ('express');
const router = express.Router();
const {body} = require("express-validator");
const usercontroller = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be atleast of 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 character long')
],
    usercontroller.registerUser
)


module.exports = router;


