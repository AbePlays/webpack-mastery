import React from 'react'
import { createRoot } from 'react-dom/client'

import banner from './banner.png'
import style from './index.scss'

const div = document.getElementById('root')

const ENABLE_CLEAR = process.env.APP_ENV === 'dev'

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
      <img alt="" className={style.banner} src={banner} />
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
        {ENABLE_CLEAR ? (
          <button
            className={style.clear}
            disabled={todos.length === 0}
            onClick={() => setTodos([])}
            type="button"
          >
            Clear
          </button>
        ) : null}
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
