const router = require('express').Router()
const Exdb = require('../exercises/exercises-model')



router.get('/', (req,res) => {
    Exdb.find()
     .then(exercise => {
         res.status(200).json(exercise)
     })
     .catch(err => {
         res.status(400).json(err)
     })
})


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


router.put('/update/:user_id', (req,res) => {
    const id = req.params.user_id
    const changes = req.body

    Exdb.findById(id)
        .then(exercise => {
            if(exercise) {
                Exdb.update(changes,id)
                 .then(updatedExcercise => {
                     res.json(updatedExcercise);
                 });
            } else {
                res.status(404).json({message: "Could not find given Exercise with given ID"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "failed to update exercise"})
        })
})

module.exports = router;
