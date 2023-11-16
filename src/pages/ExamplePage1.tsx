import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { countryQueries } from "api/exampleResource";
import { useQuery } from "@tanstack/react-query";
import { Toolbar } from "components/Toolbar";

export const ExamplePage1 = () => {

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', filterable: true },
    { field: 'capital', headerName: 'Capital', filterable: true },
    { field: 'population', headerName: 'Population', filterable: true, type: 'number' },
    { field: 'currency', headerName: 'Currency', filterable: true },
    { field: 'language', headerName: 'Language', filterable: true },
    { field: 'region', headerName: 'Region', filterable: true },
    { field: 'subregion', headerName: 'Subregion', filterable: true },
    { field: 'flag', headerName: 'Flag', filterable: true },
    { field: 'area', headerName: 'Area', filterable: true, type: 'number' },
    { field: 'gdp', headerName: 'GDP', filterable: true, type: 'number' },
  ];

  const query = useQuery(countryQueries.list({}))

  if (!query.isSuccess) {
    return "Loading..."
  }

  return (
    <div className="w-full h-[80vh] flex gap-x-3">
      <div className="basis-1/4">
        tutaj mają się wyświetlać presety filtrów
      </div>
      <div className="basis-3/4">
      <DataGrid columns={columns} rows={query.data} slots={{ toolbar: Toolbar }} />
      </div>
    </div>
  )
}
