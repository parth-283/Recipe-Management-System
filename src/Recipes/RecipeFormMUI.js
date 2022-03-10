import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Input, InputAdornment, InputLabel } from "@mui/material";
// import { AccountCircle } from "@material-ui/icons";

const theme = createTheme();
const commonStyles = {
  bgcolor: "background.transparent",
  m: 1,
  p:2,
  border: 1,
  width: "auto",
  height: "auto",
};

function RecipeFormMUI() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <MenuBookIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Recipe Form
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="RecipeName"
                  required
                  fullWidth
                  id="RecipeName"
                  label="Recipe Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ShortDec"
                  label="Short Description"
                  multiline
                  rows={4}
                  name="ShortDec"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ ...commonStyles, borderColor: "grey.500" }}>
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Timeing
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">Prep:-</InputAdornment>
                      }
                    />
                    <Input
                      id="input-with-icon-adornment"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          Cook mins:-
                        </InputAdornment>
                      }
                    />
                    <Input
                      id="input-with-icon-adornment"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          Additional mins:-
                        </InputAdornment>
                      }
                    />
                    <Input
                      id="input-with-icon-adornment"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          Total Time:-
                        </InputAdornment>
                      }
                    />
                    <Input
                      id="input-with-icon-adornment"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          Servings-
                        </InputAdornment>
                      }
                    />
                    <Input
                      id="input-with-icon-adornment"
                      fullWidth
                      startAdornment={
                        <InputAdornment position="start">
                          Yield:-
                        </InputAdornment>
                      }
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  
                />
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
                />
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RecipeFormMUI;
