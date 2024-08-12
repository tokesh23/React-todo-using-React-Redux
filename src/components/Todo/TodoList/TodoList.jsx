import React, { useState } from 'react'
import Todo from '../Todo'
import TodoContext from '../../../context/Context'
 
 

const TodoList = () => {
  const {list,setList}= useState(TodoContext)


 
  return (
    <div>
  
        {
        list.length>0 && list.map((todo)=><Todo key= {todo.id} todoData={todo.todData}
        isFinished={(todo.Finished)} 
        ChangeFinished={(isFinished)=>{
          console.log("isFinished",isFinished);
          const updateList = list.map((t)=>{
            if (t.id== todo.id){
              todo.Finished=isFinished
            }
          return t
          })
          setList(updateList)
          
        }}
        onDelete={()=>{
          const updateList = list.filter(t=>t.id!=todo.id)
          setList(updateList)
        }}
          onEdit={(todoText)=>{
            const  updateList = list.map((t)=>{
              if(t.id==todo.id){
                todo.todData=todoText;
              }
              return t
            })
            setList (updateList)
          }} 

        />)
        }
    </div>
  )
}

export default TodoList