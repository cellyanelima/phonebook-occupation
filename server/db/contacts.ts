import connection from './connection.ts'
import { Contact, ContactWithOccupation } from '../../models/Contact.ts'

export async function getAllContacts(
  id: number,
): Promise<ContactWithOccupation[]> {
  const contacts = await connection('contacts')
    .join('occupations', 'contacts.occupation_id', 'occupations.id')
    .select('contacts.*', 'occupations.name as occupationName')
    .where('contacts.id', id)
  return contacts as ContactWithOccupation[]
}

export async function getContactById(id: number): Promise<Contact> {
  //console.log(connection('events').where({ id }).select('*').first().toString())
  const contact = await connection('contacts')
    .where({ id })
    .select('id', 'occupation_Id as occupationId', 'name', 'phone', 'email')
    .first()
  return contact as Contact
}

export async function updateContact(updatedContact: Contact): Promise<void> {
  const { id, occupationId, name, phone, email } = updatedContact

  await connection('contacts').where({ id }).update({
    occupation_Id: occupationId,
    name,
    phone,
    email,
  })
}
