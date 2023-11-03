import { Button, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography } from "@mui/material";
import { useItemContext } from "../Store/ItemsProvider.js";
import { useCartContext } from "../Store/CartProvider.js"

const MealsItem = ({ item }) => {
  const { deleteItem, editItem, switchPage } = useItemContext();
  const { addItem } = useCartContext();
  const { id, name, desc, img, price } = item;

  const handleDelete = () => {
    deleteItem(id);
  }

  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            src={img}
            alt={name}
          >
          </CardMedia>
          <CardContent>
            <div className="meal-card">
              <Typography variant="body1">{name}</Typography>
              <Typography className="text-ellipsis" variant="body2">{desc}</Typography>
            </div>
            <div className="meal-price">
              <Typography variant="body1">RM {price}</Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            switchPage ? 
              <Button onClick={() => addItem(item)}>Add to cart</Button> : 
                <>
                  <Button onClick={handleDelete}>Delete</Button>
                  {/* <Button onClick={handleEdit}>Edit</Button> */}
                </>
          }
        </CardActions>
      </Card>
    </>
  )
}

export default MealsItem;