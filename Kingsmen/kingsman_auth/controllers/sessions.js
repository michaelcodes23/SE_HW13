//Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

//Create a new user
router.get('/new', (req,res) =>{
    res.render('sessions/new.ejs')
    // req.session.anyProperty = "any value"
})

// router.get('/retrieve', (req, res) =>{
//     if (req.session.anyProperty === "password"){
//         console.log('it matches')
//     } else {
//         console.log('not a match')
//     }
//     res.redirect('/')
// })

router.post('/', (req,res)=>{
    console.log(req.body);
    User.find({"username": req.body.username}, (error, foundUser)=>{
        console.log(foundUser)
        
        if (req.body.password === foundUser[0].password){
            foundUser[0].Login = "on"
            res.redirect('/room')
        }
        else{
            console.log('not a match')
        }
        console.log(foundUser[0]);
    })
})

//export
module.exports = router;