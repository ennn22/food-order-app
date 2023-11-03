import './App.css';
import Footer from './Components/Footer';
import Body from './Components/Body';
import ItemsProvider from './Store/ItemsProvider.js';

function App() {
  
  return (
    <ItemsProvider>
      {/* <div className='main-container'> */}
      <Body />
      <Footer />
      {/* </div> */}
    </ItemsProvider>
  );
}

export default App;
