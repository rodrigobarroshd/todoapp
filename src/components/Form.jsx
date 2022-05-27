import React from 'react'
import { Button, Paper, TextField } from '@mui/material'


export default function Form() {
    return (
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" />
                <Button variant="text">- Adicionar</Button>
            </div>

        </Paper>
        
    )
}

