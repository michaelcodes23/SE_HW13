// DEPENDENCIES
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

//ROUTES

//Create a New User
router.get('/new', (req,res)=>{
    res.render('users/new.ejs')
})
//Post - New User
router.post('/',(req,res)=>{
//    res.send('testing')
    User.create(req.body,(error, createdLog) =>{
        res.redirect('/');
    })
})
// EXPORT
module.exports = router;