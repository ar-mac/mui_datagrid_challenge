import {
  ExampleResource,
  ExampleResourceAPIResponse, ResourceListAPIParams,
} from 'types/exampleResource'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import axios from 'axios'

export const exampleQueries = createQueryKeys('resource', {
  list: (params: ResourceListAPIParams) => ({
    queryKey: [params],
    queryFn: async () => {
      const response = await axios.get('/api/resource', {
        params,
      })

      return response.data as ExampleResourceAPIResponse
    },
  }),
})

export const resourceMutations = {
  delete: () => ({
    mutationKey: ['resourceDelete'],
    mutationFn: async (id: string) =>
      axios.delete(`/api/onboarding/v2/rosters/delete_roster/${id}`),
  }),
  create: () => ({
    mutationKey: ['resourceCreate'],
    mutationFn: async (data: ExampleResource) =>
      axios.post(`/api/resource`, data),
  }),
}
