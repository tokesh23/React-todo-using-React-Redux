 import React, { useState } from 'react'
 import TodoList from './components/Todo/TodoList/TodoList'
 import AddTodo from "./components/AddTodo/AddTodo.jsx"
 import { useState } from 'react'
 import TodoContext from './context/Context.jsx'
 
 import './App.css'
 const App = () => {
 
  
   return (
     <div>
      <TodoContext.Provider value={{list,setList}}/>
      
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