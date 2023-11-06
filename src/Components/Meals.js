import { Box, Grid, Typography } from "@mui/material";
import MealsItem from "./MealsItem";
import { useItemContext } from "../Store/ItemsProvider.js";

const Meals = ({ showEditForm }) => {
  const { itemsData } = useItemContext();

  return (
    <Box className="meals-container">
      <Typography variant="h4" fontWeight={600} p= {2} 
        sx= {{ fontSize: {
          xs: 16,
          sm: 18, 
          md: 20, 
          lg: 24
        }
        }}
      >
        Available Foods
      </Typography>
      <Grid 
        container 
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        rowSpacing={{ xs: 2, sm: 3, md: 4, lg: 4 }}
      >
        {itemsData.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <MealsItem item={item} showEditForm={showEditForm} />
            </Grid>
          )
        })
        }
      </Grid>
    </Box>
  )

}

export default Meals;