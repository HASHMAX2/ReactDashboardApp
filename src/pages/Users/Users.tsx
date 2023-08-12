import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import "./users.scss";
import { userRows } from "../../data";
import Datatable from "../../components/DataTable/Datatable";
import { Link } from "react-router-dom";

function Users() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 90,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="mbhjb"></img>;
        // return <div>{params.row.img}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      type: "boolean",
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <Datatable slug="users" columns={columns} rows={userRows}></Datatable>
    </div>
  );
}

export default Users;
