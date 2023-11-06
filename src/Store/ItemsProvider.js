import { useContext, useEffect, useReducer, useState } from 'react';
import ItemsContext from "./ItemsContext";
import api from "../Api/meals";

export function useItemContext() {
  return useContext(ItemsContext);
}

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "get": 
      return {...state, itemsData: payload};
    case "togglePage":
      return {...state, switchPage: !state.switchPage};
    case "add":
      return {...state, itemsData: [...state.itemsData, payload]};
    case "remove":
      const updatedItemsList = state.itemsData.filter((item) => {
        return item.id !== payload;
      })
      return {
        ...state, 
        itemsData: updatedItemsList
      }
    case "update":
      const updatedItem = state.itemsData.map((item) => {
        return item.id === payload.id ? {...payload} : item;
      })
      return {
        ...state,
        itemsData: updatedItem
      }
    default: 
      return state;
  }
};

const ItemsProvider = ({ children }) => {
  const [editableItem, setEditableItem] = useState();
  const [state, dispatch] = useReducer(reducer, {
    switchPage: true,
    itemsData: [],
  });

  //get meals items data from api
  const getItemsData = async () => {
    const res = await api.get("/meals");
    dispatch({
      type: "get",
      payload: res.data
    });
  };

  useEffect(() => {
    getItemsData();
  }, []);


  //switch page between admin and users
  const togglePage = () => {
    dispatch({
      type: "togglePage",
      switchPage: !state.switchPage,
    })
  }

  //add new item
  const addNewItem = async (item) => {
    const request = { id: Date.now(), ...item};
    const res = await api.post("/meals", request);
    dispatch({
      type: "add",
      payload: res.data
    })
  }

  //delete item from menu
  const removeItem = async (id) => {
    await api.delete(`/meals/${id}`);
    dispatch({
      type: "remove",
      payload: id
    })
  }

  //Update item 
  const updateItem = async (item) => {
    console.log(item.id)
    const res = await api.put(`/meals/${item.id}`, item);
    console.log(res.data)
    dispatch({
      type: "update",
      payload: res.data
    })
  }

  const itemCtxValue = {
    itemsData: state.itemsData,
    switchPage: state.switchPage,
    editableItem,
    setEditableItem,
    togglePage,
    getItemsData,
    addNewItem,
    removeItem,
    updateItem
  }

  return (
    <ItemsContext.Provider value={itemCtxValue}>
      { children }
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;