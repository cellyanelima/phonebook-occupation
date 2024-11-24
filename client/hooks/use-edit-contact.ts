import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Contact } from '../../models/Contact.ts'

export default function useEditContact(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: Contact) => {
      await request.patch(`/api/v1/contacts/${id}`).send(values)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['contact', id] })
      queryClient.invalidateQueries({ queryKey: ['contact'] })
    },
  })
}
