import React from "react";
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


const CategoryData = (title, calories, image, ingredients) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{height:"400px !important"}} className="cardMain">
    <Card sx={{  margin: "15px 15px"}}>
      <CardHeader style={{    height:" 153px"}} title={title} />
      <CardMedia 
      style={{height: "195px"}}
        component="img"
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
          className="cardPattern"
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
              <li >
                <Typography paragraph>{ingredient.text}</Typography>
              </li>
            ))}
          </ol>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  );
};

export default CategoryData;
