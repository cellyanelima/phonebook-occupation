import { Link } from 'react-router-dom'
import useContacts from '../hooks/use-contacts.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ContactsNav from './ContactsNav.tsx'

export default function ContactsList() {
  const { data, isLoading, error } = useContacts()

  if (isLoading) return <LoadingIndicator />
  if (error) return <div>Error: {error.message}</div>

  if (!data || data.length === 0) {
    return <div>No contacts found.</div>
  }

  return (
    <>
      <ContactsNav />
      <h2>Contacts</h2>
      <ul className="cards">
        {data.map((contact) => (
          <li key={contact.id} className="card">
            <div className="contact">
              <p className="data">
                <strong>Name:</strong> {contact.contactName}
              </p>
              <p className="data">
                <strong>Mobile:</strong> {contact.phone}
              </p>
              <p className="data">
                <strong>Email:</strong> {contact.email}
              </p>
              <p className="data">
                <strong>Occupation:</strong> {contact.occupationName}
              </p>
              <Link to={`/contacts/${contact.id}/edit`}>
                <strong>Edit</strong>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
