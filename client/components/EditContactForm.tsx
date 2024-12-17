import { useState } from 'react'
import { ContactData } from '../../models/Contact.ts'
import useOccupations from '../hooks/use-occupations.ts'
import LoadingIndicator from './LoadingIndicator.tsx'

interface Props extends ContactData {
  submitLabel: string
  onSubmit: (data: ContactData) => void
}

export default function EditContactForm({
  submitLabel,
  onSubmit,
  ...initialData
}: Props) {
  const occupations = useOccupations()
  const [formData, setFormData] = useState<ContactData>(initialData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'occupationId' ? Number(value) : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  if (occupations.isPending) {
    return <LoadingIndicator />
  }

  if (occupations.isError || !occupations.data) {
    return 'Failed to load occupations data'
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Contact name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="label">
          Phone:
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Mobile number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="occupationId" className="label">
          Occupation:
        </label>
        <select
          id="occupationId"
          name="occupationId"
          value={formData.occupationId}
          onChange={handleChange}
          required
        >
          <option key={0} value={0}>
            -- select occupation --
          </option>
          {occupations.data.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button className="button" type="submit">
        {submitLabel}
      </button>
    </form>
  )
}
