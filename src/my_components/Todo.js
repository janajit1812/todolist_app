import React from 'react'
import Todoitems from './Todoitems'

export const Todo = (props) => {
    let myStyle={
        minHeight: "100vh",
        margin: "50px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h4>My Todos List</h4>
            {props.todos.length === 0 ? "No todos left to display" :
                props.todos.map((todo) => {
                    return <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    // return(
                    // <>
                    // <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    // <hr/>
                    // </>)
                    
                })}
            
        </div>
    )
}

export default Todo;
