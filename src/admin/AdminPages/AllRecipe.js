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
import { Modal } from "react-bootstrap";

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

export default function AllRecipe() {
  // Feedback Data
  const [recipe, setRecipe] = useState([]);
  //  declare useState for show loader or Material Table
  const [showLoderTable, setShowLoderTable] = useState(false);
  // modal show state
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  // GET Feedback INFO to NODE BY Using Feedback API
  const fetchData = () => {
    fetch("http://localhost:4500/recipe/list")
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        if (data.length > 0) {
          setShowLoderTable(true);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // SHOW all fields by recipe
  const handleShowDetails1 = (rowData) => {
    console.log("view ID", rowData);
    setShow1(true);
  };
    // SHOW all fields by recipe
    const handleShowDetails2 = (rowData) => {
      console.log("view ID", rowData);
      setShow2(true);
    };

  // DELETE RECIPE
  const delterecipe = (UID) => {
    console.log("Delete", UID);

     fetch
      (`http://localhost:4500/recipe/delete/${UID}`,{
        method:"DELETE",})
      .then(res => {  res.json().then((resp) => {
        console.warn(resp)
        console.log("resp...",resp);
    fetchData();
        })
      })
  };
  const handleRemoveUser = (UID) => {
    setShowLoderTable(false);
    delterecipe(UID);
  };

  // Define Users Table Fields
  const fieldLabel1 = [
    { title: "UID", field: "UID" },
    {
      title: "image",
      field: "imageurl",
      render: (item) => (
        <img src={item.imageurl} alt="" border="3" height="100" width="100" />
      ),
    },
    { title: "Name", field: "Name" },
    { title: "Category", field: "Category" },
    { title: "Nutrition", field: "Nutrition" },
    { title: "ChefName", field: "ChefName" },
    { title: "AddDate", field: "AddDate" },
    
  ];
  const fieldLabel2 = [
    { title: "UID", field: "UID" },
    { title: "Prep", field: "Prep" },
    { title: "CookMins", field: "CookMins" },
    { title: "AdditionalMins", field: "AdditionalMins" },
    { title: "Servings", field: "Servings" },
    { title: "Yield", field: "Yield" },
    { title: "preserving", field: "preserving" },
    { title: "preservingMeasure", field: "preservingMeasure" },
    { title: "preservin", field: "preservin" },
  ];
  const fieldLabel3 = [
    { title: "UID", field: "UID" },
{ title: "ShortDes", field: "ShortDes", cellStyle: { width: 100 }, headerStyle: { width: 100 } },
    { title: "ingredients", field: "ingredients",cellStyle:{width:100}, headerStyle:{width:100} },
    { title: "description", field: "description",cellStyle:{width:50}, headerStyle:{width:50} },
    { title: "directions", field: "directions",cellStyle:{width:100}, headerStyle:{width:100}},
    { title: "ChefNote", field: "ChefNote",cellStyle:{width:100}, headerStyle:{width:100} },
    { title: "Video", field: "Video" },
    { title: "SocialMedia", field: "SocialMedia" },
  ];


  // Main Function return
  return (
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
              <MaterialTable
                icons={tableIcons}
                title="Recipe Data"
                columns={fieldLabel1}
                data={recipe}
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
                    icon: VisibilityIcon,
                    tooltip: "View",
                    onClick: (event, rowData) => {
                      handleShowDetails1(rowData);
                    },
                  },
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

            {/* Modal1 */}
            <div className="">
              <Modal
                size="xl"
                show={show1}
                onHide={() => setShow1(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                style={{ marginLeft: "9%", paddingTop: "5%" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Recipe Data
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MuiThemeProvider>
                    <MaterialTable
                      icons={tableIcons}
                      title="Recipe Data"
                      columns={fieldLabel2}
                      data={recipe}
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
                          icon: VisibilityIcon,
                          tooltip: "View",
                          onClick: (event, rowData) => {
                            handleShowDetails2(rowData);
                          },
                        },
                      ]}
                    />
                  </MuiThemeProvider>
                </Modal.Body>
              </Modal>
            </div>

             {/* Modal2 */}
             <div className="">
              <Modal
                size="xl"
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                style={{ marginLeft: "9%", paddingTop: "5%" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Recipe Data
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MuiThemeProvider>
                    <MaterialTable
                      icons={tableIcons}
                      title="Recipe Data"
                      columns={fieldLabel3}
                      data={recipe}
                      options={{
                        filtering: true,
                        paging: true,
                        paginationType: "stepped",
                        pageSize: 10,
                        actionsColumnIndex: -1,
                        pageSizeOptions: [10, 20, 30],
                      }}
                   
                    />
                  </MuiThemeProvider>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
