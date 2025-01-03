import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import UtilityCalc from './components/UtilityCalc'
import UtilityView from './components/UtilityView'

import { ContextProvider } from './context/context';
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utility-cal/" element={<UtilityCalc />} />
        <Route path="/utility-view/" element={<UtilityView />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
      
      <Footer />
    </ContextProvider>
  )
}

export default App
