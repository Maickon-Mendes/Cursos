import React, { Fragment, useState, useEffect } from "react";
import Planeta from "./planeta/Planeta_index";
import Forms from './planet2.0/form/form'


//hooks


async function getPlanetas() {
   let response = await fetch('http://localhost:3000/api/planets.json')
   let data = await response.json()
   return data
}

const Planetas = () => {
   const [planets, setPlanets] = useState([])

   useEffect(() => {
      getPlanetas().then(data => {
         setPlanets(data['planets'])
      })
   }, []) //se quiser que rode só 1 vez precisa deichar os colchetes vazies
      const addPlanet = (new_planet) => {
      setPlanets([...planets, new_planet])
   }

   return (
      <Fragment>
         <h3>Lista de Planetas</h3>
         <hr></hr>
         <Forms addPlanet={addPlanet}/>
         <hr></hr>
         {planets.map((planet, index) =>
            <Planeta
               id={planet.id}
               nome={planet.nome}
               description={planet.description}
               img_url={planet.img_url}
               link={planet.link}
               titulo_with_underline={true}
               key={index}
            />
         )}
         <hr></hr>
      </Fragment>
   )
}
export default Planetas;