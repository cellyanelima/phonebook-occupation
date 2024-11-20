export async function seed(knex) {
  // Inserts seed entries
  await knex('occupations').insert([
    { id: 1, name: 'teacher' },
    { id: 2, name: 'driver' },
    { id: 3, name: 'doctor' },
  ])
}
