import React, { useState } from 'react'
import useTodo  from '../contexts/TodoContext'

const TodoForm = () => {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo.trim()) return

    addTodo({
      todo,
      completed: false
    })

    setTodo("")
  }

  return (
    <form
      onSubmit={add}
      className="border-0 w-100 p-0 d-flex justify-content-center align-items-center mb-4"
    >
      <input
        type="text"
        placeholder="Write todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-75 rounded-start-2 bg-light ps-3 me-0 pe-0"
        style={{
          height: '40px',
          border: '.5px solid #bababaff',
          outline: 'none'
        }}
      />

      <button
        type="submit"
        className="btn btn-primary w-25 rounded-end-2 rounded-start-0 border-0 ms-0 ps-0"
        style={{ height: '40px' }}
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
