import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Occupation } from '../../models/Occupation.ts'

export default function useEditOccupation(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: Occupation) => {
      await request.patch(`/api/v1/occupations/${id}`).send(values)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['occupation', id] })
      queryClient.invalidateQueries({ queryKey: ['occupation'] })
    },
  })
}
