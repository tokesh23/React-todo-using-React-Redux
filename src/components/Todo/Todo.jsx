import React, { useState } from 'react'
import "./Todo.css"

const Todo = ({todoData, isFinished,ChangeFinished}) => {

  const [finishd,setFinished]= useState(isFinished)
  return (
    <div>
       
       <div className='todo-wrapper'>
         <input type="checkbox" checked={finishd} onChange={(e)=>{
          setFinished(e.target.checked)
          ChangeFinished(e.target.checked)
         }}/>
      <h2>{todoData}</h2>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    </div>
  )
}

export default Todo