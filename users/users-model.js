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
    return db('users').select('id', 'username', 'password')
}

function findBy(filter) {
    return db('users').where(filter)
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}



function findById(id) {
    return db('users')
        .where({ id })
        .first();
}


function update(id, changes) {
  return db('schemes')
    .where({ id })
    .update(changes, '*');
}



function insert(user) {
    return db('users')
        .insert(task)
        .then(ids => {
            return getById(ids[0]);
        });
}

// wont have an option to remove users, only an option to remove any workouts

function remove(id) {
    return db('user')
        .where('id', id)
        .del();
}