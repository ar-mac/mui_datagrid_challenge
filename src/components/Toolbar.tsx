import { Button } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";

export const Toolbar = () => {
  return <div className="flex gap-x-10"><Button>Save view</Button><GridToolbar/></div>
}
