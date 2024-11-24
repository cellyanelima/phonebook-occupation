import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import type { Occupation } from '../../models/Occupation.ts'

export default function useOccupations() {
  return useQuery({
    queryKey: ['occupation'],
    queryFn: async () => {
      const res = await request.get('/api/v1/occupations')
      if (res.ok) {
        return res.body as Occupation[]
      }
      throw new Error(res.text)
    },
  })
}
