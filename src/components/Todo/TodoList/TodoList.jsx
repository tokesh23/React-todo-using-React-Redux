import React from 'react'
import Todo from '../Todo'

const TodoList = () => {

    const list = [
       { id:1, todData: "todo1"},
       { id:2, todData: "todo2"},

    ]
  return (
    <div>
        {
        list.length>0 && list.map((todo)=><Todo key= {todo.id} todoData={todo.todData}/>)
        }
    </div>
  )
}

export default TodoList