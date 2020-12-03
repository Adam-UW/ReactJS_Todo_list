import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodo, filterTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodo={setTodo}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
