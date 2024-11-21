import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getContacts, getOccupations } from '../apis/api.ts'

// export function useFruits() {
//   const query = useQuery({ queryKey: ['fruits'], queryFn: getFruits })
//   return {
//     ...query,
//     // Extra queries go here e.g. addFruit: useAddFruit()
//   }
// }

// export function useContacts() {
//   // This is a reactQuery call to our puppies data in the server.
//   return useQuery({
//     // The queryKey allows ReactQuery to keep track of the right data
//     queryKey: ['contacts'],
//     // The queryFn is an API call to our server to get all puppies
//     queryFn: async () => {
//       const res = await request.get('/api/v1/puppies')
//       // We then return all our puppies data as an array of multiple Puppy (i.e., our TypeScript interface)
//       // You could also return this as Puppy[] which means the same thing
//       return res.body.puppies as Array<Puppy>
//     },
//   })
// }

export function useFruitsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
