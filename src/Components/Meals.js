import { Grid, Typography } from "@mui/material";
import MealsItem from "./MealsItem";
const Meals = ({ meals, deleteMeal }) => {
 
  return (
    <div className="meals-container">
      <Typography variant="h4">Available Foods</Typography>
      <Grid className="meals-grid" container >
        {
          meals.map((meal) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={meal.id}>
                <MealsItem 
                  meal={meal}
                  deleteMeal={deleteMeal}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )

}

export default Meals;