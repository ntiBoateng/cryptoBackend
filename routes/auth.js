const express = require('express')
const User = require('../Models/User')
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

const Jwt_SECRET = "PANKAJ CHAUDHARY";

//Route 1: Create a user using :POST "/api/auth".Doesnt require Auth
router.post('/createuser', [
    body('name','invalid name').isLength({ min: 3 }),
    body('email','invalid email').isEmail(),
    body('password','too short').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({error:'Already Registered | Login to Continue'})
        }

        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hashSync(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user: {
                id:user.id
            }
        }

        const authtoken = jwt.sign(data, Jwt_SECRET);
        // console.log(auth-token)


        res.json({ authtoken })
    }

    catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})


router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
}) 
