// DEPENDENCIES
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

//ROUTES

//Create a New User
router.get('/new', (req,res)=>{
    res.render('users/new.ejs')
})

// EXPORT
module.exports = router;