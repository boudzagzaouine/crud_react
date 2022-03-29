import React from 'react'

function Form(props) {
  return (
    <form onSubmit={props.addcource}>
        <input type='text' value={props.curent} onChange={props.apdate}></input>
        <button type='submit'>ADD</button>
      </form>
  )
}

export default Form