import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AdminForm = ({ addMeal, hideAddItemForm }) => {
  const [newMeal, setNewMeal] = useState({name:"", desc:"", img:"", price:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMeal.name === "" || newMeal.desc === "" || newMeal.price === "" || newMeal.img === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addMeal(newMeal);
    setNewMeal({name:"", desc:"", img:"", price:""});
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewMeal((previousMeal) => ({
      ...previousMeal, [name]: value
    })) 
  };
  
  return (
    <Box className="admin-form-container"> 
      <form onSubmit={handleSubmit}>
        <div className="admin-form-input">
          <TextField
            required
            fullWidth
            size="small"
            margin="dense"
            id="food-name"
            label="Name"
            variant="outlined"
            name="name"
            value={newMeal.name}
            onChange={handleInput}
          /> 
          <TextField
            required
            fullWidth
            size="small"
            margin="dense"
            id="food-desc"
            label="Description"
            variant="outlined"
            name="desc"
            value={newMeal.desc}
            onChange={handleInput}
          /> 
          <TextField
            required
            fullWidth
            size="small"
            margin="dense"
            id="food-price"
            label="Price"
            variant="outlined"
            name="price"
            value={newMeal.price}
            onChange={handleInput}
          />
          <TextField
            required
            fullWidth
            size="small"
            margin="dense"
            id="food-image"
            label="Image"
            variant="outlined"
            name="img"
            value={newMeal.img}
            onChange={handleInput}
          />
        </div>
        {/* <div className="admin-form-upload">
            <label htmlFor="file">Choose a file</label>
            <input type="file" id="file" name="img"/>
        </div> */}
        <div className="admin-form-btn">
          <Button type="submit" size="small" variant="contained" color="success">
            Add
          </Button>
          <Button variant="contained" size="small" color="error" onClick={hideAddItemForm}>
            Cancel
          </Button>
        </div>
      </form>
    </Box>
  )
}

export default AdminForm;