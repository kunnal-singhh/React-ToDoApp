import React, { useState } from 'react'
import useTodo from '../contexts/TodoContext'
const TodoItem = ({todo}) => {
  const [isTodoEditable,setIsTodoEditable]=useState(false)
  const [todoMsg,setTodoMsg]=useState(todo.todo)
  const {deleteTodo,updateTodo,toggleComplete}=useTodo()
  const editTodo=()=>{ 
    updateTodo(todo.id,{...todo,todo:todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted=()=>{ 
     toggleComplete(todo.id)
  }
  return (
      <div className={` w-100 w-lg-50  d-flex justify-content-evenly align-items-center gap-2 rounded-3 mt-1 mb-1 ${todo.completed ?'work-done':'bg-light'}`} style={{padding:'4px 9px',height:'50px',border:'.2px solid #ccc'}}> 
      <input 
       type='checkbox'
      checked={todo.completed}
      onChange={toggleCompleted}
      />
      <input 
        type='text'
        value={todoMsg}
        onChange={(e)=>setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={` border-0  ps-1 ${todo.completed?"text-decoration-line-through":""}`}
        style={{outline:'none',width:'80%',backgroundColor:'#d6d0d030',height:'75%'}}
      />
      <button onClick={()=>{ 
        if(todo.completed) return;
        if(isTodoEditable){ 
          editTodo();
        }
        else{ 
          setIsTodoEditable((prev)=>!prev)
        }
      }} 
       disabled={todo.completed}

      className='btn  btn-info d-flex justify-content-center align-items-center ' style={{width:'50px',height:'30px' }}>{isTodoEditable?<i className="fa-regular fa-floppy-disk"></i>:<i className="fa-regular fa-pen-to-square"></i>}</button>
      <button onClick={()=>deleteTodo(todo.id)} className='btn  btn-danger  d-flex justify-content-center align-items-center' style={{width:'50px',height:'30px' }}><i class="fa-regular fa-trash-can"></i></button>
      </div>
  )
}

export default TodoItem