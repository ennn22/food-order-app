import { createContext } from "react";

const ItemsContext = createContext({
  itemsData: [],
  switchPage: null,
  addNewItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id) => {},
  togglePage: () => {},
});

export default ItemsContext;