import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let logindata = {
      UID: users.length,
      email: data.get("email"),
      password: data.get("password"),
    };

    localStorage.setItem("login-info", JSON.stringify([{ logindata }]));

    let user = localStorage.getItem("user-info");
    let userdata = JSON.parse(user);
    let emailreg = userdata[0].regdata.email;
    let passwordreg = userdata[0].regdata.password;
    let UIDreg = userdata[0].regdata.UID;
    let usercheck = false;
    console.log("UIDreg",UIDreg);
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (
        element.Email == logindata.email &&
        element.Password == logindata.password
      ) {
        usercheck = true;
        localStorage.setItem("login-user-info", JSON.stringify([{ element }]));

        break;
      }
      usercheck = false;
}

console.log("userchek",usercheck);
    if (usercheck) {
      navigate("/home");
      console.log("user is authenticate");
    }else if (logindata.email == "admin" && logindata.password == "admin") {
      navigate("/admin")
    } else if (emailreg !== logindata.email) {
      alert("Your Email Is Incorrect");
    } else if (passwordreg !== logindata.password) {
      alert("Your Password Is Incorrect");
    }

    

  };

  const [users, setUsers] = useState([]);


  const fetchData = () => {
    fetch("http://localhost:4500/list")
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
        setUsers(getdata);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
console.log("userssssssssssssssss",users);
  

  // let emailreg = SignIn(param.emailreg)
  // let passwordreg = SignIn(param.passwordreg)
  //  if(emailreg === logindata.email && passwordreg === logindata.password ){
  //       navigate("/home")
  //     }
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" ,padding:"25px" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://s3.amazonaws.com/prod.tctmd.com/public/2021-03/Eating%20More%20Ultraprocessed%20%E2%80%98Junk%E2%80%99%20Food%20Linked%20to%20Higher%20CVD%20Risk.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
