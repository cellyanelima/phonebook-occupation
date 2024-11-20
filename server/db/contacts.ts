import connection from './connection.ts'
import { Contact } from '../../models/Contact.ts'

export async function getAllContacts(db = connection): Promise<Contact[]> {
  const contacts = await db('contacts').select('*')
  return contacts as Contact[]
}
