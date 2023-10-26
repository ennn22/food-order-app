import { useState } from 'react';
import './App.css';
import Users from './Pages/Users';
import Admin from './Pages/Admin';
import Footer from './Components/Footer'

function App() {
  const [switchPage, setSwitchPage] = useState(false);
  
  return (
    <div className='main-container'>
        {switchPage ? <Users /> : <Admin /> }
        <Footer switchPage={switchPage} setSwitchPage={setSwitchPage}/>
    </div>
  );
}

export default App;
