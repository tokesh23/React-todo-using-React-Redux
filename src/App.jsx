 import React, { useState } from 'react'
 import TodoList from './components/Todo/TodoList/TodoList'
 import AddTodo from "./components/AddTodo/AddTodo.jsx"
 
 import './App.css'
 const App = () => {

  const [list,setList] =useState([
    {id:1,todoData: "todo1",finished:false},
    {id:2,todoData: "todo2",finished:true}
  ])
  
   return (
     <div>
      
        <h1 className='heading'>Todo App</h1>
        <hr />
        
        <TodoList/>
        <AddTodo updateList={(todo)=>setList([
          ...list,{id:list.length+1,todoData:todo,finished:false

          }
        ])}/>
      <TodoList list={list} setList={setList}/>
     </div>
   )
 }
 
 export default App