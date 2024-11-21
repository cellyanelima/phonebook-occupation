import connection from './connection.ts'
import { Contact, ContactWithOccupation } from '../../models/Contact.ts'

export async function getAllContactsWithOccupation(
  db = connection,
): Promise<ContactWithOccupation[]> {
  const contacts = await db('contacts')
    .join('occupations', 'contacts.occupation_id', 'occupations.id')
    .select(
      'contacts.id',
      'occupations.name as occupationName',
      'contacts.name as contactName',
      'contacts.phone',
      'contacts.email',
    )
  return contacts as ContactWithOccupation[]
}

export async function getContactById(
  id: number,
  db = connection,
): Promise<Contact> {
  //console.log(db('events').where({ id }).select('*').first().toString())
  const contact = await db('contacts')
    .where({ id })
    .select('id', 'occupation_Id as occupationId', 'name', 'phone', 'email')
    .first()
  return contact as Contact
}

export async function updateContact(
  updatedContact: Contact,
  db = connection,
): Promise<void> {
  const { id, occupationId, name, phone, email } = updatedContact

  await db('contacts').where({ id }).update({
    occupation_Id: occupationId,
    name,
    phone,
    email,
  })
}

export async function byId(id: number, db = connection) {
  const data = await db('contacts')
    .join('occupations', 'contacts.occupation_id', 'occupations.id')
    .select('contacts.id', 'occupations.name as occupationName')
    .where('contacts.id', id)
    .first()
  return data as ContactWithOccupation
}
