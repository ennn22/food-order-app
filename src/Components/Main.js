import { useState } from 'react';
import { Button, Box } from '@mui/material';
import AdminForm from "./AdminForm";
import Meals from "./Meals";

const Main = () => {
  const [isValid, setIsValid] = useState(false);

  const showAddItemForm = () => setIsValid(true);
  const hideAddItemForm = () => setIsValid(false);

  return (
    <Box className="admin-main" m= {2}>
      {isValid ? 
        (<AdminForm hideAddItemForm={hideAddItemForm} />) : 
        (<Button
          variant="contained"
          onClick={showAddItemForm}
          sx={{ 
            backgroundColor: "#ED7D31",
            color: "#F6F1EE"
          }}>
          Add Food Item
        </Button>)}
      <Meals />
    </Box>
  )
}
export default Main;