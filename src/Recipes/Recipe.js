import React from "react";
// import { Link } from "react-router-dom";
// import About1 from "../pics/About1.jpg";
// import PizzaMuffins1 from "../pics/PizzaMuffins1.png";

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
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

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

function Recipe({ title, calories, image, ingredients }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: "500", margin: "15px 15px" }}>
        <CardHeader title={title} />
        <CardMedia
          component="img"
          height="194"
          image={image}
          title={title}
          alt={title}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          <IconButton aria-label="share">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ThumbDownIcon />
          </IconButton>
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

            <ol>
              {ingredients.map((ingredient) => (
                <li>
                  <Typography paragraph>{ingredient.text}</Typography>
                </li>
              ))}
            </ol>
          </CardContent>
        </Collapse>
      </Card>

      {/* 
                <p>Title: {title}</p>
            <p>Calories: {calories}</p>
            <img src={image} alt="..." />
            <ol>
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol> */}
    </div>
  );
}

export default Recipe;
