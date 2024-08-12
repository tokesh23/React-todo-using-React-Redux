 import React from 'react'
 import TodoList from './components/Todo/TodoList/TodoList'
 import AddTodo from "./components/AddTodo/AddTodo.jsx"
 
 import './App.css'
 const App = () => {
   return (
     <div>
      
        <h1 className='heading'>Todo App</h1>
        <hr />
        
        <TodoList/>
        <AddTodo/>

     </div>
   )
 }
 
 export default App