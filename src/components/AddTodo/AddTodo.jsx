import React, { useState } from 'react'

import "./AddTodo.css"

const Addtodo = () => {
    const [inpuText,setInputText] = useState('');
  return (
    <div className='add-wrapper'>

        <input type="text" className='input' placeholder='Enter a new  todo' value={inpuText}onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={()=>updateList(inpuText)}>Add</button>

    </div>
  )
}

export default Addtodo