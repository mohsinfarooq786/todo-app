import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'

const TodosList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()


  const [editingText, setEditingText] = useState('')
  const [editingId, setEditingId] = useState(null)

  const handleEditClick = (todo) => {
    setEditingText(todo.text)
    setEditingId(todo.id)
  }

  const handleSaveEdit = () => {
    if (editingText.trim() !== '') {
      dispatch(updateTodo({ id: editingId, text: editingText }))
      setEditingText('')
      setEditingId(null)
    }
  }

  return (
    <>
      <Container>
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#333',
        }} className='text-center py-3'>
          Todos
        </h1>
        {todos.map((todo) => (
          <div key={todo.id}
            style={{
              backgroundColor: '#f0f0f0',
              padding: '15px',
              border: '1px solid #0000000D',
              borderRadius: '10px',
              marginBottom: '1rem'
            }}
          >
            {editingId === todo.id ? (
              <InputGroup className="mb-3">
                <FormControl
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <Button variant="primary" onClick={handleSaveEdit}>Save</Button>
              </InputGroup>
            ) : (
              <span>{todo.text}</span>
            )}

            <Button onClick={() => { dispatch(removeTodo(todo.id)) }} className='ms-5' variant="danger">Delete</Button>
            <Button onClick={() => handleEditClick(todo)} className='ms-2' variant="primary">Edit</Button>
          </div>
        ))}
      </Container>
    </>
  )
}

export default TodosList
