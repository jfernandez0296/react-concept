import React from 'react';
import { CustomRouter } from './router';
import Loader from './components/Loader/Loader';
import { useState } from 'react';
import { Context, initialContext} from './context';
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
    <Context.Provider
      store={initialContext}
    >
    <div className="App">

      <CustomRouter/>

    </div>
    </Context.Provider>
  );
}

export default App;
