import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Contact } from '../../models/Contact.ts'

export default function useContactData(id: number) {
  return useQuery({
    queryKey: ['contact', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/contacts/${id}`)
      return res.body as Contact
    },
  })
}
