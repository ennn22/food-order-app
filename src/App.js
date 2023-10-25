import './App.css';
import { Fragment, useContext } from 'react';
import ItemsContext from './Store/ItemsContext.js';
import Users from './Pages/Users';
import Admin from './Pages/Admin';
import Footer from './Components/Footer'


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
