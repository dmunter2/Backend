
exports.up = function(knex) {
  return knex.schema

  .createTable('users', users => {
    users.increments();

    
    users
     .string('username', 128)
     .notNullable()
     .unique();

    users
     .string('password', 128)
     .notNullable();




  })



    .createTable('exercises', exercises => {


    exercises.increments('')

    exercises
     .string('exercise_name')
     .notNullable()

    exercises
     .string('muscle_group')
     .notNullable()

    exercises
     .float('weight_number')
     .notNullable()

    exercises
     .float('reps')

    exercises
     .date('date')

    exercises
     .integer('sets')

    exercises
     .string('Goals')

    exercises
     .integer('user_id')
     .unsigned()
     .references('id')
     .inTable('users')
     .onDelete('CASCADE')
     .onUpdate('CASCADE')



  })









};



exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('exercises');









};



