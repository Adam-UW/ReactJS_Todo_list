import React from 'react'

const Todo = ({ text, setTodo, todos, todo }) => {
  const delteHandler = () => {
    console.log(todo)
    setTodo(todos.filter((el) => el.id !== todo.id))
  }

  const checkHandler = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={checkHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={delteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}

export default Todo
