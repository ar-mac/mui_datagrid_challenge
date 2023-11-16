import { ExampleComponent } from 'components'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

export const ExamplePage1 = () => {

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150, filterable: true },
    { field: 'col2', headerName: 'Column 2', width: 150, filterable: true },
  ];

  return (
    <div className="w-full h-[80vh] flex gap-x-3">
      <div className="basis-1/4">
        tutaj mają się wyświetlać presety filtrów
      </div>
      <div className="basis-3/4">
      <DataGrid columns={columns} rows={[]} slots={{ toolbar: GridToolbar }} />
      </div>
    </div>
  )
}
