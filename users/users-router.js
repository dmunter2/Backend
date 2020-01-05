const Userdb = require('./users-model')
const router = require('express').Router()




router.get('/', (req,res) => {
    Userdb.find()
     .then(user => {
         res.status(200).json(user)
     })
     .catch(err => {
         res.status(400).json(err)
     })
})


router.delete('/remove/:id', (req,res) => {
    const {user_id} = req.params

    Userdb.remove(user_id)
     .then(user => {
         res.status(200).json(user)
     })
     .catch(err => {
         res.status(500).json(err)
     })
})



module.exports = router;


