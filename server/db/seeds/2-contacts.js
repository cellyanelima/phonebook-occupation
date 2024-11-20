export async function seed(knex) {
  // Inserts seed entries
  await knex('contacts').insert([
    {
      id: 1,
      occupation_id: 1,
      name: 'cellyane',
      phone: '111-111-1111',
      email: 'celly@gmail.com',
    },
    {
      id: 2,
      occupation_id: 2,
      name: 'peter',
      phone: '222-222-2222',
      email: 'peter@gmail.com',
    },
    {
      id: 3,
      occupation_id: 3,
      name: 'david',
      phone: '333-333-3333',
      email: 'david@gmail.com',
    },
    {
      id: 4,
      occupation_id: 3,
      name: 'michael',
      phone: '444-444-4444',
      email: 'michael@gmail.com',
    },
  ])
}
