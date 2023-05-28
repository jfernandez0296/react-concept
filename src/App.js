import logo from './logo.svg';

import { CustomRouter } from './router';
import Loader from './components/Loader/Loader';
import { useState } from 'react';

import './App.scss';

function App() {

  const [loading, setLoading] = useState(false);

  const cambiarEstado=()=>{

    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },5000);
  }

  if(loading)
  {

    
  }
  return (
    <div className="App">

      <CustomRouter/>

    </div>
  );
}

export default App;
