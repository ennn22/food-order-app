import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useItemContext } from "../Store/ItemsProvider.js";

const MealsItem = ({ item }) => {
  const { deleteItem, switchPage } = useItemContext();
  const { id, name, desc, img, price } = item;
    // const { id, name, desc, img, price } = meal;

  const handleDelete = () => {
    deleteItem(id);
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
          {
            switchPage ? "Add to Cart" : "Delete"
          }
        </CardActions>
      </Card>
    </>
  )
}

export default MealsItem;