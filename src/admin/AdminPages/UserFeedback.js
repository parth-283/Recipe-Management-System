import React from "react";
import { useState, useEffect, forwardRef } from "react";
import { CardBody, Row, Col, Modal, ModalFooter } from "reactstrap";
import { Button } from "bootstrap";
import { Card } from "@material-ui/core";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
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
import BlockIcon from "@material-ui/icons/Block";
import { AddBox } from "@material-ui/icons";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const fieldLabel = [
  { title: "UID", field: "UID" },
  { title: "Name", field: "Name" },
  { title: "Phone", field: "Phone" },
  { title: "Email", field: "Email" },
  { title: "Message", field: "Message" },
];
const headCells = [
  {
    id: "UID",
    numeric: true,
    disablePadding: true,
    label: "UID",
  },
  {
    id: "Name",
    numeric: true,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "Phone",
    numeric: true,
    disablePadding: true,
    label: "Phone",
  },
  {
    id: "Email",
    numeric: true,
    disablePadding: true,
    label: "Email",
  },
  {
    id: "Message",
    numeric: true,
    disablePadding: true,
    label: "Message",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Users
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const UserFeedback = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState("");

  const [reloadListing, setReloadListing] = useState(0);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const fetchData = () => {
    fetch("http://localhost:4500/feedback/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("dataa", data);
        setUsers(data);
        console.log("dataaa", data);
      });
  };

  const handleRemoveUser = (UID) => {
    // const recordData =users.filter((item) => item.UID !== UID)
    // setUsers(recordData)

    console.log("UID...", UID);
    fetch(`http://localhost:4500/feedback/delete/${UID}`, {
      method: "DELETE",
      // header:{"accept" :"application/json",
      //         "Content-Type":"application/json"}
    }).then((res) => {
      res.json().then((resp) => {
        console.warn(resp);
        console.log("resp...", resp);

        fetchData();
      });
    });
  };

  const handleBlockDetails = (UID) => {
    console.log("block user");
    console.log("IDDD", UID);
    const blockData = users.filter((item) => item.UID === UID);

    console.log("blockData", blockData);
    setUsers(blockData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Users", users);

  return (
    <>
      <div className="App">
        <Box sx={{ width: "100%", marginLeft: "250px", marginTop: "20px" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <div
              className="container m-5 p-5"
              style={{ width: "1900px !important" }}
            >
              {/* <MetaData page="User Selected Data"></MetaData> */}
              <Row style={{ width: "120%" }}>
                <Col xl="12">
                  <Card>
                    <CardBody>
                      {/* <div className='div p-2 m-2 d-flex justify-content-end'>
                  <button
                    className='btn btn-outline-dark'
                    // onchange={e => setOpenModel(true)}
                  >
                    Add Person
                  </button>
                </div> */}
                      <MuiThemeProvider /* theme={theme} */>
                        <MaterialTable
                          // key={reloadListing}
                          icons={tableIcons}
                          title="Person Data"
                          columns={fieldLabel}
                          // tableRef={tableRef}
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
                              icon: BlockIcon,
                              tooltip: "Block",
                              onClick: (event, rowData) => {
                                handleBlockDetails(rowData.UID);
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
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Modal
                // isOpen={openModel}
                style={{ opacity: 1, maxWidth: "883px" }}
                dialogClassName="my-dialog"
              >
                <div class="modal-content">
                  <div class="modal-header flex-column">
                    <div class="icon-box">
                      <h3>User Selection Data</h3>
                      <br />
                      <div>{/* <ReactJson src={jsonObj} /> */}</div>
                    </div>
                  </div>

                  <ModalFooter class="modal-footer justify-content-center">
                    <Button
                      type="button"
                      color="secondary"
                      data-dismiss="modal"
                      // onClick={e => setOpenModel(false)}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </div>
              </Modal>
            </div>
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      </div>
    </>
  );
};

export default UserFeedback;
