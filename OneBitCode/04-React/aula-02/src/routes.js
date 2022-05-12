import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//imporyada do npm i react-router-dom --save
import PlanetsScreem from './screens/planets'
import PlanetScreem from './screens/planet'

const Rout = () =>(
<BrowserRouter>
<Routes>
   <Route path='/' element={<PlanetsScreem/>} />
   <Route path='/planet/id:' element={<PlanetScreem/>} />

</Routes>

</BrowserRouter>
)

export default Rout