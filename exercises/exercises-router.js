const router = require('express').Router()
const Exdb = require('../exercises/exercises-model')




router.get('/:id', (req,res) => {
    const user_id = req.params.id
    Exdb.findBy({user_id})
    .then(exercises => {
        res.status(200).json(exercises)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/exercise', (req,res) => {
    const exercise = req.body
    Exdb.add(exercise)
     .then(exercise => {
         res.status(200).json(exercise)
     })
     .catch(err => {
         res.status(400).json(err, {message: "Please fill out all exercise requirements in the form"})
     })
})





// router.put()

// router.delete('/remove', (req,res) => {
//     const 
// })


module.exports = router;
