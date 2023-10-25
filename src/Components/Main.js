import { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import AdminForm from "./AdminForm";
import Meals from "./Meals";
import api from "../Api/meals";

const Main = () => {
  const [isValid, setIsValid] = useState(false);
  const [meals, setMeals] = useState([]);

  const showAddItemForm = () => setIsValid(true);
  
  const hideAddItemForm = () => setIsValid(false);

  const getMeals = async () => {
    const res = await api.get("/meals");
    const data = res.data;
    setMeals(data);
  }

  useEffect(() => {
    getMeals();
  }, [])

const addMeals = async (meal) => {
  const request = { id: Date.now(), ...meal};
  console.log("request:", request);
  const res = await api.post("/meals", request);
  console.log("response:", res.data);
  setMeals([...meals, res.data]);
};

  return (
    <Box style={{ flex: 4 }}>
      {isValid ? (
        <AdminForm addMeals={addMeals} hideAddItemForm={hideAddItemForm} />
      ) : (
        <Button
          variant="contained"
          onClick={showAddItemForm}
          className="addItemsButton"
        >
          Add Food Item
        </Button>
      )}
      <Meals meals={meals} addMeals={addMeals}/>
    </Box>
  )
}
export default Main;