export type ExampleResourceAPIResponse = Country[]

export type Country = {
  id: number,
  name: string,
  capital: string,
  population: number,
  currency: string,
  language: string,
  region: string,
  subregion: string,
  flag: string,
  area: number,
  gdp: number
}

export type CountryApiParams = {
  sort?: string,
  filter?: {
    [name: string]: string | number
  }
}
