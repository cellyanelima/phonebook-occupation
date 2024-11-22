import { Link } from 'react-router-dom'
import useContacts from '../hooks/use-contacts'

//import LoadingIndicator from './LoadingIndicator.tsx'

export default function ContactsList() {
  const { data, isLoading, error } = useContacts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  console.log(data)
  if (!data || data.length === 0) {
    return <div>No contacts found.</div>
  }
  
  return (
    <>
      <h2>Contacts:</h2>
      <ul className="cards">
        {data.map((contact) => (
          <li key={contact.id} className="card">
            
            <div className="occupation">
              <span className="title">Name: {contact.contactName}</span>
              <p className="data">Mobile: {contact.phone}</p> Email: {contact.email} 
              <p>Occupation: {contact.occupationName}</p>
              <Link to={`/contact/ edit location/edit`}></Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
