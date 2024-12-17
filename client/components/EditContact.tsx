import { useNavigate, useParams } from 'react-router-dom'
import { ContactData } from '../../models/Contact.ts'
import { useEditContact, useContactData } from '../hooks/api.ts'
import EditContactForm from './EditContactForm.tsx'
import LoadingIndicator from './LoadingIndicator.tsx'
import MainNav from './MainNav.tsx'
import useDeleteContact from '../hooks/use-delete-contact.ts'

export default function EditContact() {
  const params = useParams()
  const id = Number(params.id)
  const contact = useContactData(id)
  const editContact = useEditContact(id)
  const deleteContact = useDeleteContact(id)
  const navigate = useNavigate()

  const handleSubmit = async (data: ContactData) => {
    try {
      await editContact.mutateAsync({ id, ...data })
      console.log('Contact updated successfully')
      navigate('/contacts/')
    } catch (error) {
      console.error('Error updating contact:', error)
    }
  }

  const handleDelete = async (evt: React.FormEvent) => {
    evt.preventDefault()
    deleteContact.mutate()
    navigate(`/contacts/`)
  }

  if (contact.isLoading) {
    return <LoadingIndicator />
  }

  if (contact.isError || !contact.data) {
    return <p>Failed to load contact data. Please try again later.</p>
  }

  return (
    <>
      <MainNav />
      <h2>
        Edit Contact: <span className="data">{contact.data.name}</span>
      </h2>
      <EditContactForm
        {...contact.data}
        submitLabel="Update Contact"
        onSubmit={handleSubmit}
      />
      <form onSubmit={handleDelete} className="button">
        <button className="button">Delete contact</button>
      </form>
    </>
  )
}
