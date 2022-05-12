import React, { useEffect, useState } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/decription_with_link/decrip_index";
import NForms from "../planet2.0/novoform"

import{useParams, useNavigate, Navigate } from 'react-router-dom'

async function getPlanet(id) {
   let response = await fetch(`http://localhost:3000/api/${id}.json`)
   let data = await response.json()
   return data
}

const Planet = () => {
   const [satellites, setSatellites] = useState([])
   const [planet, setPlanet] = useState({})
   const [redirect, setNavigate] = useState(false)

   let { id } = useParams() //useparames estrai todos os objetos, mas com as {} só tras o q esta dentro delas
   let history = useNavigate()

   useEffect(() => {
      getPlanet(id).then(data => {
         setSatellites(data['satellites'])
         setPlanet(data['data'])//data vem da api
      }, error => {
         setNavigate(true)
      })
   }, [])

   const goToPlanets = () =>{
      history.push("/")
   }

   const addSatellite = (new_satellite) => {
      setSatellites({...satellites, new_satellite})
   }

   let titulo;
   if (planet.titulo_with_underline)
      titulo = <h4><u>{planet.name}</u></h4>
   else {
      titulo = <h4>{planet.name}</h4>
   }
   if(redirect)
   return <Navigate to="/"/>
   
   return (
      <div>
         {titulo}
         <DescriptionWithLink description={planet.description} link={planet.link} />
         <GrayImg img_url={planet.img_url} gray={planet.gray} />
         <h4>Satélites</h4>
         <hr></hr>
         <NForms addSatellite={addSatellite}/>
         <hr></hr>
         <ul>
            {satellites.map((satellite, index) =>
               <li key={index}>{satellite.name}</li>
            )}
         </ul>
         <hr></hr>
         <button type="button" onClick={goToPlanets}>voltar a listagem</button>
      </div>
   )
}
export default Planet