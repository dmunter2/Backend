const db = require('../database/db-config')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    insert,
    remove,
    findTitle,


};


function find() {
    return db('exercises').select('exercise_name', 'muscle_group', 'weight_number', 'reps', 'date', 'sets', 'goals', 'user_id')
}



function findBy(filter) {
    return db('exercises').where(filter)
}


async function add(exercise) {
    const [id] = await db('exercises').insert(exercise);

    return findById(id);
}

function findById(id) {
    return db('exercises')
        .where({ id })
        .first();
}


function update(user_id, changes) {
    return db('exercises')
        .where({ user_id })
        .update(changes, '*');
}



function insert(user) {
    return db('exercises')
        .insert(task)
        .then(ids => {
            return getById(ids[0]);
        });
}

// wont have an option to remove users, only an option to remove any workouts

// function remove(id) {
//     return db('exercises')
//         .where('id', id)
//         .del();
// }

function findTitle(exercise_name) {
    return db('exercises')
        .where('exercise_name', exercise_name)
}

function remove(exercise_name) {
    return db('exercises')
        .where('exercise_name', exercise_name)
        .del()
        // .then(() => { return findBy(id) })
}



// function find() {
//     return db('todo').select('id', 'title', 'description', 'users_id')
// }

// function findList(id) {
//     return db('todo').select('title', 'description', "users_id").where({ id })
// }

// function findBy(id) {
//     return db('todo').select('title', 'description').where({ users_id: id })
// }


// function update(id, todo) {
//     return db('todo')
//         .where('id', Number(id))
//         .update(todo);
// }

// function findTitle(title) {
//     return db('todo')
//         .where('title', title)
// }

// async function add(item) {
//     const [id] = await db('todo').insert(item);
//     return findById(id);
// }

// function findById(id) {
//     return db('todo')
//         .where({ id })
//         .first();
// }

// function remove(title, id) {
//     return db('todo')
//         .where('title', title)
//         .del()
//         .then(() => { return findBy(id) })
// }