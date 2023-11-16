import {
  ExampleResourceAPIResponse
} from 'types/exampleResource'
import { createSelector } from 'reselect'

export const getResource = (data: ExampleResourceAPIResponse) => data

export const getResourceById = createSelector(
  getResource,
  (_: ExampleResourceAPIResponse, id: string) => id,
  (resource, id) => resource[id]
)
