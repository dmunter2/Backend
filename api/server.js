const express = require('express')
const Userdb = require('../users/users-model')
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')
const exerciseRouter = require('../exercises/exercises-router')
const bcrypt = require('bcryptjs')


const server = express()


server.use(express.json())


server.use('/api/auth', authRouter)
server.use('/api', usersRouter)
server.use('/api/user', exerciseRouter)




server.get('/', (req,res) => {
    res.send('You are in!')
})




module.exports = server;




// {
//     "exercise_name": "test",
//         "muscle_group": "test1",
//             "weight_number": 100,
//                 "reps": 10,
//                     "sets": 4,
//                         "Goals": "test2",
//                             "date": "123"
//     "user_id": "dmunter"
// }