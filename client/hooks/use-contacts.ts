import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { ContactWithOccupation } from '../../models/Contact.ts'

export default function useContacts() {
  return useQuery<ContactWithOccupation[]>({
    queryKey: ['contact'],
    queryFn: async () => {
      const res = await request.get('/api/v1/contacts')
      if (res.ok) {
        return res.body as ContactWithOccupation[]
      }
      throw new Error(res.text)
    },
  })
}
