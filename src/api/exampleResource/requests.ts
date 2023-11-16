import {
  CountryApiParams, ExampleResourceAPIResponse,
} from 'types/countries'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import axios from 'axios'
import { Preset } from "../../types/preset";

export const countryQueries = createQueryKeys('countries', {
  list: (params: CountryApiParams) => ({
    queryKey: [params],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/countries', {
        params,
      })

      return response.data as ExampleResourceAPIResponse
    },
  }),
})

export const presetMutations = {
  create: () => ({
    mutationKey: ['presetCreate'],
    mutationFn: async (data: Preset) =>
      axios.post(`/api/resource`, data),
  }),
}
