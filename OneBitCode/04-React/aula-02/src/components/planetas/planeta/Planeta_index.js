import React, { useEffect, useState } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/decription_with_link/decrip_index";

import { Link } from "react-router-dom";

const Planet = (props) => {
   let titulo;
   if (props.titulo_with_underline)
      titulo = <h4><u>{props.nome}</u></h4>
   else {
      titulo = <h4>{props.nome}</h4>
   }
   return (
      <div>
         <Link to={`/planet/${props.id}`}>{titulo}</Link>
         <DescriptionWithLink description={props.description} link={props.link} />
         <GrayImg img_url={props.img_url} gray={props.gray} />
         <hr></hr>
      </div>
   )
}
export default Planet