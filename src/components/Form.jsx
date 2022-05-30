import React from 'react'
import { Button, Paper, TextField } from '@mui/material'
import { useState } from 'react';

export default function Form({ todoHandler }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = { text: text, id: id };
        setId(id + 1);
        todoHandler(todoObj);
    };









    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    id="outlined-basic"
                    label="Tarefa"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                    fullWidth />
                <Button variant="text" onClick={() => todoCreate(text)} >Adicionar</Button>
            </div>

        </Paper>

    )
}

