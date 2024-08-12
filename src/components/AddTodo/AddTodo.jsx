import React from 'react'

import "./AddTodo.css"

const Addtodo = () => {
  return (
    <div className='add-wrapper'>

        <input type="text" className='input' placeholder='Enter a new  todo' />
        <button>Add</button>

    </div>
  )
}

export default Addtodo