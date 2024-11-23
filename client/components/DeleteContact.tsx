import { deleteContact as deleteContactFromDb } from '../../server/db/contacts'

export async function handleDeleteContact(id: number) {
  await deleteContactFromDb(id)
  return (
    <button onClick={() => handleDeleteContact(id)}>Delete</button>
  )
}