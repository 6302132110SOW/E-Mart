import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './stores/SignIn'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import ACPage from './stores/pages/ACPage'
import FridgePage from './stores/pages/FridgePage'
import TVPage from './stores/pages/TVPage'
import WomanPage from './stores/pages/WomanPage'
import KitchenPage from './stores/pages/KitchenPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './singles/ComputerSingle';
import FridgeSingle from './singles/FridgeSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import KitchenSingle from './singles/KitchenSingle';
import WatchSingle from './singles/WatchSingle';
import WomanSingle from './singles/WomanSingle';
import TvSingle from './singles/TvSingle'
import AcSingle from './singles/AcSingle'
import MenSingle from './singles/MenSingle'



const App = () => {
  return (
    <div>
    <Routes>
    <Route path="/signin" component={SignIn} />

      <Route path='/' element = {   <LandingPage/> }/>
      <Route path='/Mobile' element = {<MobilePage/>}/>
      <Route path='/Computers' element = {<ComputersPage/>}/>
      <Route path='/Watch' element = {<WatchPage/>}/>
      <Route path='/Men' element = {<MenPage/>}/>
      <Route path='/Woman' element = {<WomanPage/>}/>
      <Route path='/Ac' element = {<ACPage/>}/>
      <Route path='/Fridge' element = {<FridgePage/>}/>

      <Route path='/TV' element = {<TVPage/>}/>
      <Route path='/kitchen' element = {<KitchenPage/>}/>
      <Route path='/furniture' element = {<FurniturePage/>}/>
          <Route path = '/mobiles/:id' element={<MobileSingle/>}/>
          <Route path = '/cart' element={<UserCart/>}/>
          <Route path = '/computers/:id' element={<ComputerSingle/>}/>
          <Route path = '/fridge/:id' element={<FridgeSingle/>}/>
          <Route path = '/furniture/:id' element={<FurnitureSingle/>}/>
          <Route path = '/kitchen/:id' element={<KitchenSingle/>}/>
          <Route path = '/mobiles/:id' element={<MobileSingle/>}/>
          <Route path = '/Tv/:id' element={<TvSingle/>}/>
          <Route path = '/watch/:id' element={<WatchSingle/>}/>
          <Route path = '/woman/:id' element={<WomanSingle/>}/>
          <Route path = '/ac/:id' element={<AcSingle/>}/>
          <Route path = '/men/:id' element={<MenSingle/>}/>

    </Routes>
    </div>
  )
}

export default App
