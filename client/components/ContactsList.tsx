import { Link } from 'react-router-dom'
import useContacts from '../hooks/use-contacts'
import { deleteContact } from '../../server/db/contacts'

//import LoadingIndicator from './LoadingIndicator.tsx'

export default function ContactsList() {
  const { data, isLoading, error } = useContacts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  console.log(data)
  if (!data || data.length === 0) {
    return <div>No contacts found.</div>
  }

  const handleDeleteContact = async (id: number) => {
    await deleteContact(id)
    // You may want to refresh the contacts list after deletion
    window.location.reload()
  }
  
  return (
    <>
      <h2>Contacts:</h2>
      <ul className="cards">
        {data.map((contact) => (
          <li key={contact.id} className="card">
            
            <div className="occupation">
              <span className="title">{contact.contactName}</span>
              <p className="data">{contact.phone}</p>- {contact.email} -
              {contact.occupationName}
              <Link to={`/contact/ edit location/edit`}></Link>
              <button onClick={() => handleDeleteContact(contact.id)}>Delete Contact</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
