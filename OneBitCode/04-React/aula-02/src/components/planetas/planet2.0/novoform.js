import React, { Fragment, useState } from "react";

const initialState = {
   name: ""
}
const NForms = (props) =>{
   const[fields, setFields] = useState(initialState)

   const handleFieldChange = (e) => setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value
      })

      const handleSubmit = event =>{
         props.addSatellite(fields)
         event.preventDefault()
         setFields(initialState) // para limpar o campo
      }

   return (
      <>

<form onSubmit={handleSubmit}>
   <div>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldChange}/>
   </div>
   <br></br>
      <input type="submit"/>
</form>
      </>
   )
}

export default NForms