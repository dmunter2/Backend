const db = require('../database/db-config')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    insert,
    remove

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

function remove(id) {
    return db('exercises')
        .where('id', id)
        .del();
}