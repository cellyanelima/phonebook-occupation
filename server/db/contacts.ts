import connection from './connection.ts'
import { Contact } from '../../models/Contact.ts'

export async function getAllContacts(db = connection): Promise<Contact[]> {
  const contacts = await db('contacts').select('*')
  return contacts as Contact[]
}

export async function byId(id:number, db = connection) {
  const data = await db('contacts').join('occupations', 'contacts.occupation_id', 'occupations.id' )
  .select(
    'contacts.*',
    'occupations.name as occupationName',
  )
  .where('contacts.id', id)
  return data 
  
}