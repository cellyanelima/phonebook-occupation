import { Link } from 'react-router-dom'

export default function ContactsNav() {
  return (
    <nav>
      <Link to={'/contacts/new'}>Add Contact</Link>
    </nav>
  )
}
