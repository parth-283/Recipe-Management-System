import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { Link,Outlet } from "react-router-dom";
import { Nav } from "react-bootstrap";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ListIcon from "@mui/icons-material/List";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AllRecipe from "../AdminPages/AllRecipe";
import UserList from "../AdminPages/UserList";
// import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';

const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(9)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const AdminSidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    < >
 
      {/* <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ backgroundColor: "#128C7E" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                mr: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <b>Admin</b>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        >
          <DrawerHeader sx={{ backgroundColor: "#075E54" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider /> */}
          <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{  zIndex: (theme) => theme.zIndex.drawer + 1  }}
      >
        <Toolbar  sx={{ backgroundColor: "#128C7E"}}>
          <Typography variant="h6" noWrap component="div">
            <span style={{color:"white"}}>Admin</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />

          <List
            sx={{ backgroundColor: "#075E54", height: "100vh", spacing: 0 }}
          >
            <Nav>
            {/* style={({ isActive}) => {return {backgroundColor:isActive ? '#6d1b7b' :'none'}}} */}
              <ListItemIcon sx={{marginLeft: "35px",marginTop:"10px", color: "black"}}>
                <MenuBookIcon sx={{marginTop:"10px"}} />
                <Link
                  className="nav-link fs-5"
                  // as={Link}
                  to="/admin/allrecipe"
                  style={{ color: "white" }}
                >
                  <b>All Recipe</b>
                </Link>
              </ListItemIcon>

              <ListItemIcon sx={{ marginLeft: "35px", color: "black" }}>
                <ListIcon  sx={{marginTop:"10px"}}/>
                <Link
                  className="nav-link fs-5"
                  // as={Link}
                  to="/admin/userlist"
                  style={{ color: "white" }}
                >
                  <b>User List</b>
                </Link>
              </ListItemIcon>

              <ListItemIcon sx={{ marginLeft: "35px", color: "black" }}>
                <FeedbackIcon  sx={{marginTop:"10px"}}/>
                <Link
                  className="nav-link fs-5"
                  // as={Link}
                  to="/admin/userfeedback"
                  style={{ color: "white" }}
                >
                  <b>User Feedback</b>
                </Link>
              </ListItemIcon>

              <ListItemIcon sx={{ marginLeft: "35px", color: "black" }}>
                <PlaylistRemoveIcon sx={{marginTop:"10px"}}/>
                <Link
                  className="nav-link fs-5"
                  // as={Link}
                  to="/admin/blocklist"
                  style={{ color: "white" }}
                >
                  <b>BlockList</b>
                </Link>
              </ListItemIcon>
            </Nav>

            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <MenuBookIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          </List>
          <Divider />
          {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        </Drawer>
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      ></Box>
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader /> */}
        </Box>
      {/* </Box> */}
      <Outlet/>
    </>
  );
};

export default AdminSidebar;
