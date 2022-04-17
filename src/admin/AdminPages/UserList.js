import React, { forwardRef, useEffect, useState } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { AddBox } from "@material-ui/icons";
// CSS
import "../../../src/style/AdminContant.css";

// Material Table
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  VisibilityIcon: forwardRef((props, ref) => (
    <VisibilityIcon {...props} ref={ref} />
  )),
};

export default function UserList() {
  // Users Data
  const [users, setUsers] = useState([]);
  // Users Updated data
  const [usersRecipeLength, setUsersRecipeLength] = useState([]);
  // Recipe Data
  const [recipe, setRecipe] = useState([]);
  //  declare useState for show loader or Material Table
  const [showLoderTable, setShowLoderTable] = useState(false);

  // GET Users INFO to NODE BY Using User API

  let arr = []
  let dummydata 
  const fetchData = () => {
    fetch("http://localhost:4500/recipe/list")
    .then((response) => response.json())
    .then((data) => {
      dummydata=data
      setRecipe(data);
    });
console.log("dummydata********",dummydata);
    fetch("http://localhost:4500/list")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const elementuser = data[i];
          let UserName = elementuser.FName + " " + elementuser.LName;
          let userlist = dummydata.filter((item) => UserName == item.ChefName);
          arr.push({...elementuser,userRecipeList:userlist.length })
        }
        setUsers(arr);
        if (data.length > 0) {
          setShowLoderTable(true);
        }
      });
      
    };
  useEffect(() => {
    fetchData();
  }, []);

  // Delete Function
  const DeleteUser = (UID) => {
    fetch(`http://localhost:4500/delete/${UID}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((resp) => {
        fetchData();
      });
    });
  };
  // Delete User DATA
  const handleRemoveUser = (UID) => {
    setShowLoderTable(false);
    DeleteUser(UID);
  };

  // Define Users Table Fields
  const fieldLabel = [
    { title: "UID", field: "UID" },
    { title: "FirstName", field: "FName" },
    { title: "LastName", field: "LName" },
    { title: "Email", field: "Email" },
    { title: "Mobile", field: "Mobile" },
    { title: "Gender", field: "Gender" },
    { title: "City", field: "City" },
    { title: "State", field: "State" },
    { title: "NoOFRecipes", field: "userRecipeList" },
  ];

  // Main Function return
  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-3">
              <div className="col-9"></div>
            </div>
          </div>
          {!showLoderTable === true ? (
            // loader
            //  <CircularProgress className="loader" />
            <div className="spinner-align">
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div style={{ paddingTop: "7%", paddingBottom: "2%" }}>
              <MuiThemeProvider>
                {/* Material Table */}
                <MaterialTable
                  icons={tableIcons}
                  title="User Data"
                  columns={fieldLabel}
                  data={users}
                  options={{
                    filtering: true,
                    paging: true,
                    paginationType: "stepped",
                    pageSize: 10,
                    actionsColumnIndex: -1,
                    pageSizeOptions: [10, 20, 30],
                  }}
                  actions={[
                    {
                      icon: DeleteOutline,
                      tooltip: "Delete",
                      onClick: (event, rowData) => {
                        handleRemoveUser(rowData.UID);
                      },
                    },
                  ]}
                />
              </MuiThemeProvider>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
