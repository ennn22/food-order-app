import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import { useItemContext } from "../Store/ItemsProvider.js";

const apiKey = process.env.REACT_APP_API_KEY;

const AdminForm = ({ hideAddItemForm }) => {
  const [newItem, setNewItem] = useState({name:"", desc:"", price:"", file: ""});
  const { addItem } = useItemContext();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewItem((previousItem) => ({
      ...previousItem, [name]: value
    })) 
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });


  const uploadFile = (data) => {
    

    axios.post('https://api.imgbb.com/1/upload', {
      key: apiKey,
      image: data,
      expiration: 600
    }, {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Headers': '*',
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = document.querySelector('#file-input') ;
    const img = await toBase64(fileInput.files[0]);
    console.log(img)
    uploadFile(img)
    // addItem(newItem);
    // setNewItem({name:"", desc:"", price:"", file: ""});

  }
  
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
          {/* <TextField
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
          /> */}
        </div>
        <div className="admin-form-upload">
            <label htmlFor="file"></label>
            <input required id="file-input" type="file" name="img"/>
        </div>
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