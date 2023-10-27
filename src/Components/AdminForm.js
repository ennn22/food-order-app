import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useItemContext } from "../Store/ItemsProvider.js";

const AdminForm = ({ hideAddItemForm }) => {
  const [newItem, setNewItem] = useState({name:"", desc:"", img:"", price:""});
  const { addItem } = useItemContext();
  // const [newMeal, setNewMeal] = useState({name:"", desc:"", img:"", price:""});

  // const handleSubmitItem = (e) => {
  //   e.preventDefault();
  //   addNewItem(newMeal);
  //   setNewItem({name:"", desc:"", img:"", price:""});
  // }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewItem((previousItem) => ({
      ...previousItem, [name]: value
    })) 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({name:"", desc:"", img:"", price:""});
  }
  
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setNewMeal((previousMeal) => ({
  //     ...previousMeal, [name]: value
  //   })) 
  // };
  
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
            value={newItem.name}
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
            value={newItem.desc}
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
            value={newItem.price}
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
            value={newItem.img}
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