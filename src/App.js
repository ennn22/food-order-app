import logo from './logo.svg';
import './App.css';
import ItemsContext from './Store/ItemsContext';
import { Fragment } from 'react';


function App() {
  const itemsCtx = useContext(ItemsContext);

  return (
    <Fragment>
      {itemsCtx.switchPage ? <Users /> : <Admin />}
      <Footer />
    </Fragment>
  );
}

export default App;
