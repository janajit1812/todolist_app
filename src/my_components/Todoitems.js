import React from 'react'

export const Todoitems = ({todo,onDelete}) => {
  return (
    <div className="container my-3">
        <p style={{fontWeight:"bold"}}>{todo.title}</p>
        <p>{todo.desc}</p>
        <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        <hr />
    </div>
    
  )
}

export default Todoitems;
