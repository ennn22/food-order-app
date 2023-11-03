import { useContext, useEffect, useState } from 'react';
import ItemsContext from "./ItemsContext";
import api from "../Api/meals";
import Users from '../Pages/Users';
import Admin from '../Pages/Admin';

export function useItemContext() {
  return useContext(ItemsContext);
}
// const initialState = {
//   switchPage: false,
//   itemsData: []
// }

// function reducer(state, action)  {
//   switch(action.type) {
//     case "addNewItem": {
//       return {
//         ...state,
//         itemsData: [...state, action.payload]
//       };
//     }
//     case "removeItem": {
//       const updatedItemData = state.itemsData.filter((item) => item.id !== action.payload);
//       return {
//         ...state,
//         itemsData: updatedItemData
//       }
//     }
//     case "updateItem": {
//       return {
//         ...state,
//         itemsData: state.itemsData.map((item) => {
//           if(item.id === action.payload.id) {
//             return {
//               ...item,
//               ...action.payload
//             }
//           };
//           return item;
//         })
//       }
//     }
//     default:
//       return state;
//   }
//   throw Error('Unknown action: ' + action.type);
// }

const ItemsProvider = ({ children }) => {
  const [switchPage, setSwitchPage] = useState(true);
  const [itemsData, setItemsData] = useState([]);

  // const [state, dispatch] = useReducer(reducer, initialState);

  //get Meals Menu from Api
  // const getMealsAndDispatch = async (itemsData) => {
  //   const getMeals = async (itemsData) => {
  //     const res = (await api.get("/meals"))
  //       .then((res) => res.data());
  //     return res;
  //   }
  //   const meals = await getMeals(itemsData);
  //   dispatch({ type: "addNewItem", payload: meals });
  // }

  //get itemsData from Api


  // {switchPage ? <Users /> : <Admin /> }
  const getItemsData = async () => {
    const res = await api.get("/meals");
    const data = res.data;
    setItemsData(data);
  }
  useEffect(() => {
    getItemsData()
  }, [])
  

  //Add new item to menu
  const addItem = async (item) => {
    const request = { id: Date.now(), ...item};
    const res = await api.post("/meals", request);
    setItemsData([...itemsData, res.data]);
  };

  //Delete item from menu
  const deleteItem = async (id) => {
    await api.delete(`/meals/${id}`);
    const updatedItemsList = itemsData.filter((item) => {
      return item.id !== id;
    });
    setItemsData(updatedItemsList);
  }

  //Edit menu item
  const editItem = async (item) => {
    const res = await api.put(`/meals/${id}`, item);
    const { id } = res.data;
    const editedItemsList = itemsData.map((item) => {
      if(item.id === id) {
        return {...res.data}
      }
      return item;
    })
    setItemsData(editedItemsList);
  }


  // const handleAddItem = async (item) => {
  //   await dispatch({ type: "addNewItem", payload: item });
  // }

  // // Delete meal from menu
  // const handleDeleteItem = async (id) => {
  //   await api.delete(`/meals/${id}`);
  //   dispatch({ type: "removeItem", payload: id });
  //   const updatedMealList = meals.filter((meal) => {
  //     return meal.id !== id;
  //   });
  //   setMeals(updatedMealList);
  // }

  const itemCtxValue = {
    itemsData,
    switchPage,
    setSwitchPage,
    getItemsData,
    addItem,
    deleteItem,
    editItem
  }

  return (
    <ItemsContext.Provider value={itemCtxValue}>
      { children }
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;