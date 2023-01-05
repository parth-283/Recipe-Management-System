import React from "react";
import { Link } from "react-router-dom";
// import About1 from "../pics/About1.jpg";
// import PizzaMuffins1 from "../pics/PizzaMuffins1.png";
// import ShareIcon from '@mui/icons-material/Share';

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
import {useNavigate} from "react-router-dom"
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import "../style/recipe.css";

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

function Recipe({key, title, calories, image, ingredients , query }) {
  const [expanded, setExpanded] = React.useState(false);
  let navigate = useNavigate();
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDetilesRecipe = () => {
    navigate('/showrecipe', { state: query})
  }
  return (
    <div style={{ height: "400px !important" }} className="cardMain">
      <Card sx={{ margin: "15px 15px" }}>
        <CardHeader style={{ height: " 153px" }} title={title} />
        <CardMedia
          style={{ height: "195px" }}
          component="img"
          image={image}
          title={title}
          alt={key}
        />

        <CardActions disableSpacing>
      
          <label className="fs-6">Show details</label>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            className="cardPattern"
            style={{    direction: "rtl"}}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse responsive in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <div>
              <ol className="scroll">
                {ingredients.map((ingredient) => (
                  <li>
                    <Typography key={ingredient} paragraph>{ingredient.text}</Typography>
                  </li>
                ))}
              </ol>
            </div>
            <button className="btn-outline-info fs-5 "  onClick={handleDetilesRecipe}>
          More Info
          </button>
          </CardContent>
        </Collapse>
      </Card>

     
    </div>
  );
}

export default Recipe;
