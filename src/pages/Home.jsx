import React, { useState } from 'react'
import { Container, List } from '@mui/material'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    console.log(todo);
    // setTodos([...todos, todo]);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "2em"}}>
      <Form todoHandler={todoHandler}/>
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) =>(
          <div style={{ marginTop: "1em" }}>
            <TodoItem/>
          </div>       
        ))}
      </List>
    </Container>
   
  )
}
