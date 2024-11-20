export async function seed(knex) {
  await knex('contacts').del()
  await knex('occupations').del()
}
