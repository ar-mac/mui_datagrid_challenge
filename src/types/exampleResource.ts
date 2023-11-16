export type ExampleResourceAPIResponse = {
  [id: string]: ExampleResource
}

export type ExampleResource = {
  id: string
}

export type ResourceListAPIParams = {
  sort: string,
  filter: {
    [name: string]: string | number
  }
}
