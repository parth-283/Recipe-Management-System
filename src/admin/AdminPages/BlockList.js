import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BlockList = (UID) => {
  const [users, setUsers] = useState([]);
  const [block, setBlock] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:4500/feedback/list `)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("dataa", data);
        setUsers(data);
        console.log("dataaa", data);
      });
  };
  console.log("blockList DATA", users);

  const mulData = users.filter((item) => item.Status === "true");
  console.log("mul dataaa", mulData);

  // setBlock(...block ,mulData);
  // console.log("blockkkkk", block);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <div style={{ marginLeft: "400px" }}>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Feedback " {...a11yProps(0)} />
          <Tab label="UserList" {...a11yProps(1)} />
          <Tab label="Recipe" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
      
      <div>
        {mulData.map((item) => {
          return (
            <div>
              <h3>ID: {item.UID}</h3>
              <h3>Name: {item.Name}</h3>
              <h3>Phone :{item.Phone}</h3>
              <h3>Email :{item.Email}</h3>
              <h3>Message :{item.Message}</h3>
            </div>
          );
        })}


        
      </div>
        </TabPanel>

        </Box>
        </div>
    </>
  );
};

export default BlockList;
