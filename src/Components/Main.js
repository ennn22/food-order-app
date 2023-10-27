import { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import AdminForm from "./AdminForm";
import Meals from "./Meals";
import api from "../Api/meals";

const Main = () => {
  const [isValid, setIsValid] = useState(false);

  const showAddItemForm = () => setIsValid(true);
  
  const hideAddItemForm = () => setIsValid(false);

//get Meals Menu from Api
  // const getMeals = async () => {
  //   const res = await api.get("/meals");
  //   const data = res.data;
  //   setMeals(data);
  // }

  // useEffect(() => {
  //   getMeals();
  // }, [])

//Add new meal to menu
// const addMeal = async (meal) => {
//   const request = { id: Date.now(), ...meal};
//   console.log("request:", request);
//   const res = await api.post("/meals", request);
//   console.log("response:", res.data);
//   setMeals([...meals, res.data]);
// };

//Delete meal from menu
// const deleteMeal = async (id) => {
//   await api.delete(`/meals/${id}`);
//   const updatedMealList = meals.filter((meal) => {
//     return meal.id !== id;
//   });
//   setMeals(updatedMealList);
// }

  return (
    <Box>
      {isValid ? (
        <AdminForm hideAddItemForm={hideAddItemForm} />
      ) : (
        <Button
          variant="contained"
          onClick={showAddItemForm}
          className="addItemsButton"
        >
          Add Food Item
        </Button>
      )}
      <Meals />
    </Box>
  )
}
export default Main;