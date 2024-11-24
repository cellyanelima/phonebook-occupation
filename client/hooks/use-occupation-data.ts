import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Occupation } from '../../models/Occupation.ts'

export default function useOccupationData(id: number) {
  return useQuery({
    queryKey: ['occupation', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/occupations/${id}`)
      return res.body as Occupation
    },
  })
}
