import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link, Outlet } from "react-router-dom";
import { Nav } from "react-bootstrap";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ListIcon from "@mui/icons-material/List";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useNavigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';
import "../../style/AdminContant.css"
const drawerWidth = '17%';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminSidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    let logindata = {
      email: "$@.com",
      password: "********",
    };
    const element = {
      City: " ",
      Email: " ",
      FName: "visitor",
      Gender: " ",
      LName: " ",
      Mobile: 0,
      Password: "123",
      State: " ",
      Status: " ",
      UID: 0,
      likes: " ",
    };
    localStorage.setItem("login-info", JSON.stringify([{ logindata }]));
    localStorage.setItem("login-user-info", JSON.stringify([{ element }]));
    navigate("/home");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Box>
              <CssBaseline />
              <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              >
                <Toolbar sx={{ backgroundColor: "#128C7E",position: "relative" }}>
                  <Typography variant="h6" noWrap component="div">
                    <span style={{ color: "white" }}>Admin</span>
                  </Typography>
                  <div style={{ position:" absolute" ,right: "1%"}} className="btn_logout_div">
                      <button  className="btn logout_btn" onClick={logout }>
                  <LogoutIcon  />
                        LOGOUT
                      </button>
                  </div>
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,

                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
                variant="permanent"
                anchor="left"
              >
                <Toolbar />
                <Divider />

                <List
                  sx={{
                    backgroundColor: "#075E54",
                    height: "100vh",
                    spacing: 0,
                  }}
                >
                  <Nav>
                    <ListItemIcon
                      sx={{
                        marginLeft: "35px",
                        marginTop: "10px",
                        color: "black",
                      }}
                    >
                      <MenuBookIcon sx={{ marginTop: "10px" }} />
                      <Link
                        className="nav-link fs-5"
                        to="/admin/allrecipe"
                        style={{ color: "white" }}
                      >
                        <b>All Recipe</b>
                      </Link>
                      
                    </ListItemIcon>

                    <ListItemIcon sx={{ marginLeft: "35px", color: "black" }}>
                      <ListIcon sx={{ marginTop: "10px" }} />
                      <Link
                        className="nav-link fs-5"
                        to="/admin/userlist"
                        style={{ color: "white" }}
                      >
                        <b>User List</b>
                      </Link>
                    </ListItemIcon>

                    <ListItemIcon sx={{ marginLeft: "35px", color: "black" }}>
                      <FeedbackIcon sx={{ marginTop: "10px" }} />
                      <Link
                        className="nav-link fs-5"
                        to="/admin/userfeedback"
                        style={{ color: "white" }}
                      >
                        <b>User Feedback</b>
                      </Link>
                    </ListItemIcon>
{/* 
                    <ListItemIcon sx={{ marginLeft: "35px", color: "black" }}>
                      <PlaylistRemoveIcon sx={{ marginTop: "10px" }} />
                      <Link
                        className="nav-link fs-5"
                        to="/admin/blocklist"
                        style={{ color: "white" }}
                      >
                        <b>BlockList</b>
                      </Link>
                    </ListItemIcon> */}

                      <Divider/>
                    
                  </Nav>
                </List>
                <Divider />
              </Drawer>
              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
              ></Box>
            </Box>
          </div>
          <div className="col-10 p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
