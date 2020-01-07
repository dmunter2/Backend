const router = require('express').Router()
const Exdb = require('../exercises/exercises-model')

const restricted = require('../auth/auth-middleware')


router.get('/', (req,res) => {
    Exdb.find()
     .then(exercise => {
         res.status(200).json(exercise)
     })
     .catch(err => {
         res.status(400).json(err)
     })
})


router.get('/allworkouts', restricted, (req,res) => {
    const userID = req.decodedJwt.userid
    Exdb.findById(userID)
    .then(exercises => {
        res.status(200).json(exercises)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})



router.post('/exercise', restricted , (req,res) => {
    const userID = {...req.body, user_id: req.decodedJwt.userid}
    Exdb.add(userID)
     .then(exercise => {
         res.status(200).json(exercise)
     })
     .catch(err => {
         res.status(400).json(err, {message: "Please fill out all exercise requirements in the form"})
     })
})





router.put('/update',restricted, (req,res) => {
    const id = req.decodedJwt.userid
    const changes = req.body
    const title = req.body.exercise_name


    Exdb.findTitle(title)
        .then(exercise => {
            if(exercise) {
                Exdb.update(id, changes)
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




router.delete('/delete', restricted, (req,res) => {
    const exercise_name = req.body.exercise_name;
    
    Exdb.remove(exercise_name)
        .then(title => {
            res.status(200).json(title)
        })

        .catch(err => {
            res.status(500).json({ Message: "Catch error 500" })
        })
})













module.exports = router;
