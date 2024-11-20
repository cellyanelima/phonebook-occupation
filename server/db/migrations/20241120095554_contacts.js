/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments('id').primary()
    table.integer('occupation_id').references('occupations.id')
    table.string('name')
    table.string('phone')
    table.string('email')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('contacts')
}
