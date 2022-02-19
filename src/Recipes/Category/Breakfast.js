import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Breakfast = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const location = useLocation();
  const recipe = location.state.recipedata;
  console.log("location", location);
  return (
    <div>
      {/* <h1>{location.state.recipedata.calories[0]}</h1> */}
      <Grid container spacing={2}>
        {/* {recipe.map((item) => ( */}
          <Grid item xs={8}>
            <Card sx={{ maxWidth: "200", margin: "15px 15px" }}>
              {console.log("recipe in break",recipe)}
              <CardHeader title={recipe.title[0]} />
              <CardMedia
                component="img"
                height="194"
                image={recipe.recipeimage[0]}
              />
              <CardActions disableSpacing>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Ingredients
                  </Typography>
                </CardContent>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Ingredients:</Typography>
                  {recipe.ingredients[0].map((ingredient) => (
                    <Typography paragraph>{ingredient.text}</Typography>
                  ))}
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          {/* ))} */}
      </Grid>
    </div>
  );
};

export default Breakfast;
