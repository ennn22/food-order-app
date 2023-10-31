import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { useItemContext } from "../Store/ItemsProvider.js";
import { useCartContext } from "../Store/CartProvider.js"

const MealsItem = ({ item }) => {
  const { deleteItem, switchPage } = useItemContext();
  const { addItem } = useCartContext();
  const { id, name, desc, img, price } = item;
    // const { id, name, desc, img, price } = meal;

  const handleDelete = () => {
    deleteItem(id);
  }

  // const handleAddToCart = (item) => {
  //   addItemToCart(item);
  // }

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
          {
            switchPage ? 
              <Button onClick={() => addItem(item)}>Add to cart</Button> : 
                <Button onClick={handleDelete}>Delete</Button>
          }
        </CardActions>
      </Card>
    </>
  )
}

export default MealsItem;