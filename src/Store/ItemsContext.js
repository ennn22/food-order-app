import { createContext } from "react";

const ItemsContext = createContext({
  itemsData: [],
  editableItem: null,
  switchPage: null,
  addNewItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id, item) => {},
  togglePage: () => {},
});

export default ItemsContext;