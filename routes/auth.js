const express = require('express')
const User = require('../Models/User')
const router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

const Jwt_SECRET = "PANKAJ CHAUDHARY";
