export async function seed(knex) {
  // Inserts seed entries
  await knex('occupations').insert([
    { id: 1, name: 'Teacher' },
    { id: 2, name: 'Driver' },
    { id: 3, name: 'Doctor' },
  ])
}
