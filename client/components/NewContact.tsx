import { useNavigate } from 'react-router-dom'
import EditContactForm from './EditContactForm.tsx'
import { ContactData } from '../../models/Contact.ts'
import { useCreateContact } from '../hooks/api.ts'
import MainNav from './MainNav.tsx'

export default function NewContact() {
  const createContact = useCreateContact()
  const navigate = useNavigate()

  const handleSubmit = async (data: ContactData) => {
    try {
      await createContact.mutateAsync(data)
      navigate('/contacts')
    } catch (error) {
      console.error('Error creating contact:', error)
    }
  }

  return (
    <>
      <MainNav />
      <h2>New Contact</h2>
      <EditContactForm
        submitLabel="Create Contact"
        name=""
        occupationId={0}
        phone=""
        email=""
        onSubmit={handleSubmit}
      />
    </>
  )
}
