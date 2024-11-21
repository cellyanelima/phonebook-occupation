import {useQuery} from '@tanstack/react-query'
import request from 'superagent'
import { Contact } from '../../models/Contact'
import { Occupation } from '../../models/Occupation'



export function useContacts() {
  
  return useQuery({

    queryKey: ['contacts'],
    queryFn: async () => {
      const res = await request.get('/api/v1/contacts')
      return res.body.contacts as Array<Contact>
    },
  })
}

export function useOccupations() {
  
  return useQuery({

    queryKey: ['occupations'],
    queryFn: async () => {
      const res = await request.get('/api/v1/occupations')
      return res.body.occupations as Array<Occupation>
    },
  })
}