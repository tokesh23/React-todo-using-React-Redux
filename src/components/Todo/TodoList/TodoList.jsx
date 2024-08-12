import React from 'react'
import Todo from '../Todo'

const TodoList = ({list,setList}) => {



    // const list = [
    //    { id:1, todData: "todo1"},
    //    { id:2, todData: "todo2"},

    // ]
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
        />)
        }
    </div>
  )
}

export default TodoList