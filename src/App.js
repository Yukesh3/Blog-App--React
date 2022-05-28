import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kollywood from './Component/Kollywood';
import Hollywood from './Component/Hollywood';
import Fitness from './Component/Fitness';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Food from './Component/Food';
import Technology from './Component/Technology';
import Data from "./Component/Data"
import Article from "./Component/Article"


const App = () => {
  return (
    <Data>

      <>
        <BrowserRouter>
          <Navbar />



          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/home' element={<Home />} />

            <Route path='/kollywood' element={<Kollywood />} />

            <Route path='/hollywood' element={<Hollywood />} />

            <Route path='/fitness' element={<Fitness />} />

            <Route path='/food' element={<Food />} />

            <Route path='/technology' element={<Technology />} />
            <Route
              path='/article/:articleTitle/:articleCategory'
              element={<Article />}
            />




          </Routes>
        </BrowserRouter>









      </>
    </Data>
  )
}

export default App