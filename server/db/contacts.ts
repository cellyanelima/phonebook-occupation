import connection from './connection.ts'
import {
  Contact,
  ContactWithOccupation,
  ContactData,
} from '../../models/Contact.ts'

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

export async function addNewContact(
  contact: ContactData,
  db = connection,
): Promise<number> {
  const { occupationId, name, phone, email } = contact
  const newContact = {
    occupation_Id: occupationId,
    name,
    phone,
    email,
  }
  return await db('contacts').insert(newContact)
}

export async function deleteContact(
  id: number,
  db = connection,
): Promise<void> {
  await db('contacts').where({ id }).del()
}
