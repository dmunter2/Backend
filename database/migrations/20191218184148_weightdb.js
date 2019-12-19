
exports.up = function(knex) {
  return knex.schema

  .createTable('users', users => {
    users.increments('id');

    users.string('username', 128).notNullable().unique();

    users.string('password', 128).notNullable();
  })

  .createTable('lift', lift => {
    lift.increments('id')

    lift.string('exercise_name').notNullable()

    lift.string('muscle_group').notNullable()

    lift.float('weight_number').notNullable()


    lift.float('reps')

    lift.date('date')

    lift.integer('sets')

    lift.string('Goals')


  })









};



exports.down = function(knex) {
  








};







exports.up = function(knex) {
  return knex.schema
  
  
  .createTable('users', users => {
      users.increments('id');
            
      users.string('username', 128).notNullable().unique();

      users.string('password', 128).notNullable();
  })

  .createTable('todo', todo => {
      todo.increments('id');

      todo.string('title', 128).notNullable();

      todo.string('description');

      todo.string('users_id').notNullable().unsigned().references('users.id')

  })

  
  
  
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('todo')
};