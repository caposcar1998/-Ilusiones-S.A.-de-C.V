import { Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useState } from 'react';

const url = "https://81zuqkns90.execute-api.us-west-2.amazonaws.com/staging"

export default function CAlmacenes() {

    const [nombre, setNombre]= useState("")
    const [clave, setClave] = useState("")

    const handleSetNombre = event => {
        setNombre(event.target.value);
    }

    const handleSetClave = event => {
        setClave(event.target.value);
    }


    function crearAlmacen(){
        console.log(clave)
        console.log(nombre)
        const body = {"nombre":nombre, "subinventario":clave}
        axios.post(url+"/almacen",body).then(response => console.log(response))
    }

    return(
        <Grid  >
        <Box
        >
        <Paper elevation={3} >
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3">Introduce la informacion del almacen</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" gutterBottom component="div">
                    Nombre
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" gutterBottom component="div">
                    Clave
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" gutterBottom component="div">
                    <TextField 
                    id="standard-basic"
                    label="Nombre" 
                    variant="standard"
                    value = {nombre}
                    onChange= {handleSetNombre}
                    />
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" gutterBottom component="div">
                <TextField 
                id="standard-basic" 
                label="Clave"
                variant="standard"
                value = {clave}
                onChange= {handleSetClave} 
                 />
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={crearAlmacen}>Crear</Button>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            </Grid>
        </Paper>
      </Box>
      </Grid>

    )

}