import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login"
import {getAuthCode} from "./linkedin"
import Home from "./Home"

function App() {

  const [authToken,setAuthToken] = useState(null)
  useEffect(()=>{
    const _authToken = getAuthCode()
    if(_authToken){
      setAuthToken(_authToken)
    }
},[])
  
  return (
    <div className="app">
        { authToken?(
            <Home/>
          ):
          (
            <Login/>
          )}
    </div>
  );
}

export default App;
