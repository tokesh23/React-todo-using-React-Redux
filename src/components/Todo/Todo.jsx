import React, { useState } from 'react'
import "./Todo.css"

const Todo = ({todoData, isFinished,ChangeFinished,onDelete,onEdit}) => {

  const [finishd,setFinished]= useState(isFinished)
  const [isEditing,setIsEditing]=useState(false)
  const [editText,setEditText]=useState(todoData)
  

  return (
    <div>
       
       <div className='todo-wrapper'>
         <input type="checkbox" checked={finishd} onChange={(e)=>{
          setFinished(e.target.checked)
          ChangeFinished(e.target.checked)
         }}/>
      <h2>{todoData}</h2>
        
        <h2>{(isEditing) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)} /> : <span>{todoData}</span> }</h2>
         <button onClick={()=>{
          setEditText(!isEditing)
          onEdit(editText)
         }}>{(!isEditing)? 'Edit':'save'}</button>

         <button onClick={onDelete}>Delete</button>

         
        </div>
    </div>
  )
}

export default Todo