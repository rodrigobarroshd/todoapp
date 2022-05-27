import React from 'react'
import { Container, List } from '@mui/material'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "2em"}}>
      <Form />
      <List sx={{ bgcolor: 'background.paper', marginTop: "1em" }}>
      <TodoItem />

      </List>
    </Container>
   
  )
}
