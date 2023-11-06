import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useItemContext } from "../Store/ItemsProvider.js";

const apiKey = process.env.REACT_APP_API_KEY;

const AdminForm = ({ hideAddItemForm }) => {
  const { addNewItem, updateItem, editableItem } = useItemContext();

  const apiUrl = `https://api.imgbb.com/1/upload?&key=${apiKey}`;

  const [inputFields, setInputFields] = useState({
    name:"", desc:"", price:"", img: ""
  });

  const handleInputChanges = (e) => {
    setInputFields((previousItem) => {
      return {
        ...previousItem,
        [e.target.name]: e.target.value
      }
    })
  }
  
  const uploadFile = (data, callback) => {
    console.log(data)
    const fileInput = new FormData();
    fileInput.append('image', data);

    axios.post(apiUrl, fileInput)
      .then(
        (res) => {
          callback({
            img: res.data.data.url
          });
        })
      .catch(
        (err) => {
          console.log(err);
        }
      );
  }

  const fileInput = document.querySelector('#file-input');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableItem) {
      submitEditForm()
    } else {
      submitNewForm()
    };
  };

  const submitEditForm = () => {
    if (fileInput.files[0]) {
      uploadFile(fileInput.files[0], (img) => {
        updateItem({
          ...inputFields,
          ...img, 
          id: editableItem.id
        })
      });
    } else {
      updateItem({
        ...inputFields,
        id: editableItem.id
      })
    }
    resetForm();
  } 

  const submitNewForm = () => {
    uploadFile(fileInput.files[0], (img) => {
      addNewItem({
        ...inputFields,
        ...img
      });
      resetForm();
    });
  }

  const resetForm = () => {
    hideAddItemForm();
    setInputFields({ name: "", desc: "", price: "", img: ""});
    fileInput.value = "";
  }

  // useEffect(() => {
  //   console.log(inputFields)
  // }, [inputFields])

  // const [newItem, setNewItem] = useState({name:"", desc:"", price:"", img: ""});

  //handle text input from admin form except file
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setNewItem((previousItem) => ({
  //     ...previousItem, [name]: value
  //   })) 
  // };

  //upload image from local and get url
  // const uploadFile = (data) => {
  //   const fileInput = new FormData();
  //   fileInput.append('image', data);
  //   axios.post(apiUrl, fileInput)
  //     .then((res) => {
  //     setNewItem((previousItem) => ({
  //       ...previousItem, img: res.data.data.url
  //     }))
  //     })
  //     .catch((err) => {
  //     console.log(err);
  //     });
  // }

  //handle submit of file
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   uploadFile(fileInput.files[0]);
  // }
    
  //add new item 
  // useEffect(() => {
  //   if (newItem.img !== "") {
  //     addNewItem(newItem);
  //     setNewItem({name:"", desc:"", price:"", img: ""});
  //     fileInput.value = "";
  //   }
  // }, [newItem.img]);

  useEffect(() => {
    if (editableItem) {

      setInputFields(editableItem)
    }
  }, [editableItem])

  return (
    <Box className="admin-form-container"> 
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="admin-form-input">
          <TextField
            required
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
            id="food-name"
            label="Name"
            name="name"
            type="text"
            inputProps={{maxLength: 20}}
            value={inputFields.name}
            onChange={handleInputChanges}
            // onChange={(e)=> {handleInputChanges()}}
            // onChange={handleInput}
          /> 
          <TextField
            sx= {{ backgroundColor: "#F6F1EE" }}
            required
            fullWidth
            multiline
            size="small"
            margin="dense"
            variant="outlined"
            id="food-desc"
            label="Description"
            name="desc"
            type="text"
            inputProps={{maxLength: 130}}
            value={inputFields.desc}
            onChange={handleInputChanges}
            // onChange={(e)=> {handleInputChanges()}}
            // onChange={handleInput}
          /> 
          <TextField
            required
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
            id="food-price"
            label="Price"
            name="price"
            type="number"
            placeholder="RM 0.00"
            inputProps={{
              step: 0.1,
              min: 0,
              max: 200
            }}
            value={inputFields.price}
            onChange={handleInputChanges}
            // onChange={(e)=> {handleInputChanges()}}
            // onChange={handleInput}
          />
        </div>
        <div className="admin-form-upload">
            <label htmlFor="file-input"></label>
            <input required={!editableItem} id="file-input" type="file" name="img"/>
        </div>
        <div className="admin-form-btn">
          <Button type="submit" size="small" variant="contained" color="success">
            Submit
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