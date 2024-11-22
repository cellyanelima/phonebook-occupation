/*

export function useOccupations() {
  
  return useQuery({

    queryKey: ['occupations'],
    queryFn: async () => {
      const res = await request.get('/api/v1/occupations')
      return res.body.occupations as Array<Occupation>
    },
  })
}*/