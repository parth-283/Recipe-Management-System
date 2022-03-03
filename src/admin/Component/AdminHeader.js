import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material"; 
import Box from "@mui/material/Box"; 

const AdminHeader = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar variant="dense"  >


        <Typography>Admin</Typography>
          {/* <Nav>
        <Link className="nav-link fs-5" as={Link} to="/home">
          <b>Home</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/about">
          <b>About</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/contact">
          <b>Contact</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/feedback">
          <b>FeedBack</b>
        </Link>
        <Link className="nav-link fs-5" as={Link} to="/recipeform">
          <b>Recipe</b>
        </Link>
      </Nav> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default AdminHeader;
