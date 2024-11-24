import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { ContactData } from '../../models/Contact.js'

export default function useCreateContact() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: ContactData) => {
      await request.post('/api/v1/contacts').send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] })
    },
  })
}
