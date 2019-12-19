const router = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Userdb = require('../users/users-model')





router.post('/register', (req,res) => {
    
    if(!req.body.username || !req.body.password){
        res.status(500).json({message: "Please enter a username and password"})
    } else {
        let user = req.body
        const hash = bcrypt.hashSync(user.password ,10)
        user.password = hash



        
        Userdb.add(user)
         .then(user => {
             res.status(200).json({message: `Welcome ${user.username} to the Weightlifting Journal!`})
         })
         .catch(err => {
             res.status(400).json(err)
         })
    }
    
})


router.post('/login', (req,res) => {
    let {username, password} = req.body
    
    Userdb.findBy({username})
     .first()
     .then(user => {
         
     })
    
})
