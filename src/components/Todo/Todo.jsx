import React from 'react'
import "./Todo.css"

const Todo = ({todoData}) => {
  return (
    <div>
       
       <div className='todo-wrapper'>
         <input type="checkbox" />
      <h2>{todoData}</h2>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    </div>
  )
}

export default Todo