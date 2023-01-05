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

export default function UserFeedback() {
  // Feedback Data
  const [feedbackData, setFeedbackData] = useState([]);
  //  declare useState for show loader or Material Table
  const [showLoderTable, setShowLoderTable] = useState(false);

  // GET Feedback INFO to NODE BY Using Feedback API
  useEffect(() => {
    fetch("http://localhost:4500/feedback/list")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data);
        if (data.length > 0) {
          setShowLoderTable(true);
        }
      });
  }, []);

  // Define Users Table Fields
  const fieldLabel = [
    { title: "UID", field: "UID" },
    { title: "Name", field: "Name" },
    { title: "Phone", field: "Phone" },
    { title: "Email", field: "Email" },
    { title: "Message", field: "Message" },
  ];

  // Main Function return
  return (
    <>
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
            <div className="spinner-align" >
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div style={{paddingTop: "7%" ,paddingBottom: "2%" }}>
            <MuiThemeProvider>
              {/* Material Table */}
              <MaterialTable
                icons={tableIcons}
                title="FeedBack Data"
                columns={fieldLabel}
                data={feedbackData}
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
        </div>
          )}
        </div>
      </div>
    </>
  );
}
