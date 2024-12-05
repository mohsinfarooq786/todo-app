import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }


  return (
    <div>
      <Container>
        <Form onSubmit={(handelSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
            }} type="text" value={input} placeholder="Enter Todo"
              onChange={(e) => setInput(e.target.value)} />
          </Form.Group>
          <Button
            style={{
              width: '100%',
              height: '50px',
              backgroundColor: '#343a40',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
            }}
            className='p-1 bg-dark border'> Add Todo
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddTodo
