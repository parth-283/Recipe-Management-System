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
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let logindata = {
      UID: Math.random().toString().substr(2, 3),
      email: data.get("email"),
      password: data.get("password"),
    };

    localStorage.setItem("login-info", JSON.stringify([{ logindata }]));

    let user = localStorage.getItem("user-info");
    let userdata = JSON.parse(user);
    let emailreg = userdata[0].regdata.email;
    let passwordreg = userdata[0].regdata.password;
    let usercheck = false;

    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (
        element.Email == logindata.email &&
        element.Password == logindata.password
      ) {
        usercheck = true;
        break;
      }
      usercheck = false;
    }
    if (usercheck) {
      navigate("/home");
    } else if (emailreg !== logindata.email) {
      alert("Your Email Is Incorrect");
    } else if (passwordreg !== logindata.password) {
      alert("Your Password Is Incorrect");
    }
  };

  const fetchData = () => {
    fetch(" http://localhost:4500/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // let emailreg = SignIn(param.emailreg)
  // let passwordreg = SignIn(param.passwordreg)
  //  if(emailreg === logindata.email && passwordreg === logindata.password ){
  //       navigate("/home")
  //     }
  // console.log("userssssssssssssssss",emailreg);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/e7/07/6e/e7076e1dda8f38d9494e4f11d6409408.jpg)",
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
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
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
