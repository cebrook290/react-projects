import React from 'react'
import Todo from './todo'

export default function ToDoList( { todos }) {
  return (
    todos.map(todo => {
        return <Todo todo={todo} />
    })
  )
}
