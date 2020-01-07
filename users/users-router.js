const Userdb = require('./users-model')
const router = require('express').Router()
const restricted = require('../auth/auth-middleware')



router.get('/',restricted, (req,res) => {
    Userdb.find()
     .then(user => {
         res.status(200).json(user)
     })
     .catch(err => {
         res.status(400).json(err)
     })
})


router.delete('/remove', restricted, (req,res) => {
    const user_id = req.decodedJwt.userid

    Userdb.remove(user_id)
     .then(user => {
         res.status(200).json(user)
     })
     .catch(err => {
         res.status(500).json(err)
     })
})



module.exports = router;


