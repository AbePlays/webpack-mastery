import React from 'react'
import { createRoot } from 'react-dom/client'

import style from './index.scss'

const div = document.getElementById('root')

if (div) {
  const root = createRoot(div)
  root.render(<TodoApp />)
} else {
  throw new Error('Could not find root element')
}

function TodoApp() {
  const [inputValue, setInputValue] = React.useState('')
  const [todos, setTodos] = React.useState<string[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)

  function addTodo() {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
    inputRef.current?.focus()
  }

  function deleteTodo(index: number) {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <div className={style.inputContainer}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a todo"
          ref={inputRef}
          type="text"
          value={inputValue}
        />
        <button onClick={addTodo} type="button">
          Add Todo
        </button>
      </div>
      <ul className={style.todoList}>
        {todos.map((todo, index) => (
          <li className={style.todoItem} key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
