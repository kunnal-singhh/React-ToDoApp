import { useEffect, useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/TodoContext.js'
function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [...prev,{ id: Date.now(), ...todo }])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }} >
      <div style={{width:'100%'}} > 

           <h1 className=' text-center pt-5'>Manage your Tasks</h1>
      <div className='container responsive p-3 bg-light shadow-lg  rounded-3 mt-5' style={{ position: 'relative', margin:'auto',border:'.2px solid #ccc',height:'auto'}}>
        <div className='mb-4 '> <TodoForm /></div>
        <div className='flex-1 overflow-y-auto'>
          {
            todos.map((todo) => (
              <div key={todo.id} className='w-100'>
                <TodoItem todo={todo} />
              </div>
            ))
          }
        </div>



      </div>
      </div>
   

    </TodoProvider>
  )
}

export default App
