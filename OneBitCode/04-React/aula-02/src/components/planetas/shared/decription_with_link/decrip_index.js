import React, { Fragment } from "react";
import '../gray_img/style.css'

const DescriptionWithLink = (props) => {
  if( !props.description){
  return null}

  if (props.link) {
    return (
      <Fragment>
        <p>{props.description}</p>
        <p>
          <a href={props.link}>{props.link}</a>
        </p>

      </Fragment>
    )
  } else {
    return (
    <>
    <p className="corPrarag"><u>{props.description}</u></p>
    </>
    )
  }
}
export default DescriptionWithLink;