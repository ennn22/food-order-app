import { useContext, useEffect, useState, useReducer } from 'react';
import ItemsContext from "./ItemsContext";

export function useItemContext() {
  return useContext(ItemsContext);
}

const ItemsProvider = ({ children }) => {
  // const [page, setPage] = useState(true);


  return (
    <ItemsContext.Provider value={{ 
    }}>
      { children }
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;