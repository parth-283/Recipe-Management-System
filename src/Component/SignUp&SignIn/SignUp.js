import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router";
// import signup1 from "../../pics/signup1.jpg"

// import Alert from "@mui/material/Alert";
// import Stack from "@mui/material/Stack";

const theme = createTheme();

function SignUp() {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    // validation................

    if (
      vali.firstName === "" &&
      vali.lastName === "" &&
      vali.mobile === "" &&
      vali.email === "" &&
      vali.state === "" &&
      vali.city === "" &&
      vali.gender === "" &&
      vali.password === ""
    ) {
      setVali({
        ...vali,
        errorfirstname: "FisrtName is required",
        errorlastName: "LastName is required",
        erroremail: "Email is required",
        errormobile: "Mobile is required",
        errorstate: "State is required",
        errorcity: "City is required",
        errorgender: "Gender is required",
        errorpassword: "Password is required",
      });
    } else if (vali.firstName === "") {
      setVali({
        ...vali,
        errorfirstname: "*FisrtName is required*",
      });
    } else if (vali.lastName === "") {
      setVali({
        ...vali,
        errorlastName: "LastName is required*",
      });
    } else if (vali.email === "") {
      setVali({
        ...vali,
        erroremail: "Email is required*",
      });
    } else if (vali.mobile === "") {
      setVali({
        ...vali,
        errormobile: "Mobile is required*",
      });
    }else if(vali.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)){
      setVali({
        ...vali,
        erroremail: "Email isincorrect*",
      });
    } 
    else if (vali.state === "") {
      setVali({
        ...vali,
        errorstate: "State is required*",
      });
    } else if (vali.city === "") {
      setVali({
        ...vali,
        errorcity: "City is required*",
      });
    } else if (vali.gender === "") {
      setVali({
        ...vali,
        errorgender: "Gender is required*",
      });
    } else if (vali.password === "") {
      setVali({
        ...vali,
        errorpassword: "Password is required*",
      });
    } else {
      const data = new FormData(event.currentTarget);

      let regdata = {
        UID: users.length + 1,
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        mobile: data.get("mobile"),
        email: data.get("email"),
        state: data.get("state"),
        city: data.get("city"),
        gender: data.get("gender"),
        password: data.get("password"),
      };

      let requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regdata),
      };
      let resultdata = await fetch(
        `http://localhost:4500/add?UID=${regdata.UID}&FName=${regdata.firstName}&LName=${regdata.lastName}&Gender=${regdata.gender}&State=${regdata.state}&City=${regdata.city}&Email=${regdata.email}&Mobile=${regdata.mobile}&Password=${regdata.password}`,
        requestOptions
      );
      let result = await resultdata.json();
      console.log("resultyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", result);
      localStorage.setItem("user-info", JSON.stringify([{ regdata }]));
      navigate("/SignIn");
    }
  }

  const [users, setUsers] = React.useState([]);

  const fetchData = () => {
    fetch("http://localhost:4500/list")
      .then((response) => {
        return response.json();
      })
      .then((getdata) => {
        setUsers(getdata);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log("users.length", users.length + 1);

  const [vali, setVali] = React.useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    gender: "",
    password: "",
  });
  const changeHandler = (e) => {
    setVali({ ...vali, [e.target.name]: e.target.value });
  };
  console.log("vali", vali);

  return (
    <div style={{ marginBottom: "60px" }}>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            backgroundImage:"url(https://media.istockphoto.com/photos/healthy-food-background-picture-id525984711?k=20&m=525984711&s=170667a&w=0&h=s0L5ScafXwysr8ynGyloPVM3qCt6NtfyaSoXyWxSrxE=)",
              
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop:8
            }}

          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => changeHandler(e)}
                  />
                   <label style={{color:"red"}}>{vali.errorfirstname}</label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e) => changeHandler(e)}
                  />
                  <label style={{color:"red"}}>{vali.errorlastName}</label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => changeHandler(e)}
                  />
                  <label style={{color:"red"}}>{vali.erroremail}</label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    autoComplete="mobile"
                    onChange={(e) => changeHandler(e)}
                  />
                  <label style={{color:"red"}}>{vali.errormobile}</label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="state"
                    name="state"
                    autoComplete="state"
                    onChange={(e) => changeHandler(e)}
                  />
                  <label style={{color:"red"}}>{vali.errorstate}</label>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="city"
                    name="city"
                    autoComplete="city"
                    onChange={(e) => changeHandler(e)}
                  />
                  <label style={{color:"red"}}>{vali.errorcity}</label>
                </Grid>
                <Grid item xs={12} >
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"style={{alignItems: "center"}} 
                    className="border border-1 rounded-2 "
                    onChange={(e) => changeHandler(e)}
                  >
                    <FormLabel id="demo-row-radio-buttons-group-label" className="m-2" >
                      Gender
                    </FormLabel>
                    <FormControlLabel
                      name="gender"
                      value="female"
                      control={<Radio value="female" />}
                      label="female"
                    />
                    <FormControlLabel
                      name="gender"
                      value="male"
                      control={<Radio value="male" />}
                      label="male"
                    />
                    <FormControlLabel
                      name="gender"
                      value="other"
                      control={<Radio value="other" />}
                      label="other"
                    />
                  </RadioGroup>
                  <label className="" style={{color:"red"}}>{vali.errorgender}</label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => changeHandler(e)}
                  />
                  <label style={{color:"red"}}>{vali.errorpassword}</label>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item style={{backgroundColor:"darkolivegreen", borderRadius: "3px"}} >
                  <Link href="/SignIn" style={{color:"yellow"}}  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SignUp;
