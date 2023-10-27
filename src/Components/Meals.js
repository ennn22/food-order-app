import { Grid, Typography } from "@mui/material";
import MealsItem from "./MealsItem";
import { useItemContext } from "../Store/ItemsProvider.js";

const Meals = () => {
  const { itemsData } = useItemContext();

  return (
    <div className="meals-container">
      <Typography variant="h4">Available Foods</Typography>
      <Grid 
        className="meals-grid" 
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        rowSpacing={{ xs: 2, sm: 3, md: 4, lg: 4 }}
      >
        {
          itemsData.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <MealsItem item={item}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )

}

export default Meals;