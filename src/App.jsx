import React, { useEffect, useState } from 'react';

import SplashScreen from './components/SplashScreen';
import Main from './pages/Main';
import GlobalStyle from './styles/globalStyle'

function App() {

  const[loading,setLoading]=useState(true)

  function splashScreenLoading(){
    return(
      <SplashScreen/>
    )
  }
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[loading])

  return (
    <>
    <GlobalStyle/>
    {loading ? splashScreenLoading():<Main/>}
    
    </>
  );
}

export default App;
