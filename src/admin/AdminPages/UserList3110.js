// import React, { useEffect, useState } from 'react'
// import { CardBody, Row, Col, Modal, ModalFooter } from 'reactstrap'
// import { Card } from '@material-ui/core'
// // import AddBox from "@material-ui/icons/AddBox";
// import ArrowDownward from '@material-ui/icons/ArrowDownward'
// import Check from '@material-ui/icons/Check'
// import ChevronLeft from '@material-ui/icons/ChevronLeft'
// import ChevronRight from '@material-ui/icons/ChevronRight'
// import DeleteOutline from '@material-ui/icons/DeleteOutline'
// import Clear from '@material-ui/icons/Clear'
// import Edit from '@material-ui/icons/Edit'
// import FilterList from '@material-ui/icons/FilterList'
// import FirstPage from '@material-ui/icons/FirstPage'
// import LastPage from '@material-ui/icons/LastPage'
// import Remove from '@material-ui/icons/Remove'
// import SaveAlt from '@material-ui/icons/SaveAlt'
// import Search from '@material-ui/icons/Search'
// import ViewColumn from '@material-ui/icons/ViewColumn'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import MaterialTable from 'material-table'
// import { forwardRef } from 'react'
// import { MuiThemeProvider } from '@material-ui/core'
// import { AddBox } from '@material-ui/icons'
// import { Button } from 'bootstrap'
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => (
//     <ChevronRight {...props} ref={ref} />
//   )),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => (
//     <ChevronLeft {...props} ref={ref} />
//   )),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
//   VisibilityIcon: forwardRef((props, ref) => (
//     <VisibilityIcon {...props} ref={ref} />
//   ))
// }

// export default function userList3110 () {
//   useEffect(() => {
//     fetchData()
//   }, [])
//   const [userData, setUserData] = useState([])
//   const [reloadListing, setReloadListing] = useState(0)
//   const [openModel, setOpenModel] = useState(false)
//   const fieldLabel = [
//     { title: 'First Name', field: 'firstName' },
//     { title: 'Last Name', field: 'lastName' },
//     { title: 'Age', field: 'age' }
//   ]
//   const fetchData = () => {
//     axios.get('http://localhost:3031/userData').then(res => {
//       setUserData(res.data)
//     })
//   }
//   const handleRemoveUser = id => {
//     const userRecord = userData.filter(item => item.id !== id)
//     setUserData(userRecord)
//     axios
//       .delete(`http://localhost:3031/userData/${id}`)
//       .then(res => {
//         if (res && res.status === 200) {
//           toast.success('User Delete Successfully.')
//           fetchData()
//           setReloadListing(reloadListing + 1)
//         }
//       })
//       .catch(error => {
//         console.log('error', error)
//         toast.error('User Delete Successfully.')
//       })
//   }

//   return (
//     <>
//       <div className='container m-5 p-5' style={{ background: '#e6e6e6' }}>
//         {/* <MetaData page="User Selected Data"></MetaData> */}
//         <Row>
//           <Col sm='12'>
//             <Card>
//               <CardBody>
//                 <div className='div p-2 m-2 d-flex justify-content-end'>
//                   <button
//                     className='btn btn-outline-dark'
//                     onchange={e => setOpenModel(true)}
//                   >
//                     Add Person
//                   </button>
//                 </div>
//                 <MuiThemeProvider /* theme={theme} */>
//                   <MaterialTable
//                     key={reloadListing}
//                     icons={tableIcons}
//                     title='Person Data'
//                     columns={fieldLabel}
//                     // tableRef={tableRef}
//                     data={userData}
//                     options={{
//                       filtering: true,
//                       paging: true,
//                       paginationType: 'stepped',
//                       pageSize: 10,
//                       actionsColumnIndex: -1,
//                       pageSizeOptions: [10,20,30]
//                     }}
//                     actions={[
//                       {
//                         icon: VisibilityIcon,
//                         tooltip: 'View',
//                         onClick: (event, rowData) => {
//                             // handleShowDetails(rowData.id)
//                         }
//                       },
//                       {
//                         icon: DeleteOutline,
//                         tooltip: 'Delete',
//                         onClick: (event, rowData) => {
//                           handleRemoveUser(rowData.id)
//                         }
//                       }
//                     ]}
//                   />
//                 </MuiThemeProvider>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//         <Modal
//           isOpen={openModel}
//           style={{ opacity: 1, maxWidth: '883px' }}
//           dialogClassName='my-dialog'
//         >
//           <div class='modal-content'>
//             <div class='modal-header flex-column'>
//               <div class='icon-box'>
//                 <h3>User Selection Data</h3>
//                 <br />
//                 <div>{/* <ReactJson src={jsonObj} /> */}</div>
//               </div>
//             </div>

//             <ModalFooter class='modal-footer justify-content-center'>
//               <Button
//                 type='button'
//                 color='secondary'
//                 data-dismiss='modal'
//                 onClick={e => setOpenModel(false)}
//               >
//                 Close
//               </Button>
//             </ModalFooter>
//           </div>
//         </Modal>
//       </div>
//     </>
//   )
// }
