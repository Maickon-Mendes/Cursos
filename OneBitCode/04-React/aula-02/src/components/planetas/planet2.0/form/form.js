import React, { useState } from "react";

const initialState = {
   name: ''
}

const Forms = (props) =>{
   const [fields, setFields] = useState(initialState)

   const handleFieldChange = (e) => setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value
      })

   const handleSubmit = event => {
      props.addPlanet({fields})
      event.preventDefault()//evita recarregar qual form enviado
      setFields(initialState)
   }
   return (
      <>
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldChange}/>
         </div>
         <div>
            <label htmlFor="description">description:</label>
            <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldChange}/>
         </div>
         <br></br>
            <input type="submit"/>
      </form>
      </>
   )
}

export default Forms