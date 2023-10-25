import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";

const MealsItem = ({ meal, deleteMeal }) => {
  const { id, name, desc, img, price } = meal;

  const handleDelete = () => {
    deleteMeal(id);
  }

  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            src={img}>
          </CardMedia>
          <CardContent>
            <div className="meal-card">
              <p>{name}</p>
              <p>{desc}</p>
            </div>
            <div className="meal-price">
              <p>{price}</p>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default MealsItem;