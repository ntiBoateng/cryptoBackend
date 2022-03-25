const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Portfolio = require('../Models/Portfolio')
const { body, validationResult } = require('express-validator');
