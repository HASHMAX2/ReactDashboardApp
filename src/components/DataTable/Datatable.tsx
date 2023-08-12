import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import "./datatable.scss";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: Object[];
  slug: string;
};

const handleDelete = (id: number) => {
  console.log(id + "has been deleted");
};

function Datatable(props: Props) {
  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="actions">
          <div className="view">
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="/view.svg"></img>
            </Link>
          </div>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <Link to="/">
              <img src="/delete.svg"></img>
            </Link>
          </div>
        </div>
      );
    },
  };
  return (
    <>
      <div className="datatble">
        <div className="datagrid">
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={props.rows}
              columns={[...props.columns, actionColumn]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 15,
                  },
                },
              }}
              slots={{
                toolbar: GridToolbar,
              }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection
              disableRowSelectionOnClick
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
            />
          </Box>
        </div>
      </div>
    </>
  );
}

export default Datatable;
