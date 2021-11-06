import { Grid, Typography, Input, Button  } from '@mui/material';
import React, { useState } from 'react';
import {uploadFile} from "../../tools/UploadImage"
import Snack from '../generic/Snack';
import axios from 'axios';

const url = 'https://81zuqkns90.execute-api.us-west-2.amazonaws.com/staging'

export default function Recepcion() {

    const [mensaje, setMensaje] = useState("")
    const [open,setOpen] = useState(false)
    const [archivo,setArchivo] = useState()

    const onChangeHandler=event=>{
        setArchivo(event.target.files[0])
    }

    function subirArchivo(){
        
        uploadFile(archivo).then(res =>{
            console.log(archivo["name"])
            crearOrdenes(archivo["name"])
            setOpen(true)
            setMensaje("Se sube el archivo")
            setTimeout(() => {
                setOpen(false)
              }, 3000);
        }).catch(e =>{
            setOpen(true)
            setMensaje("Error al subir el archivo")
            setTimeout(() => {
                setOpen(false)
              }, 3000);    
        })

    }

    function crearOrdenes(nombreOrden){

        axios.post(url+"/ordenes",nombreOrden).then(res => console.log(res))
        
    }

    const handleClose = () => {
        setOpen(false)
      };

    return(
        <>
        <Snack open={open} handleClose={handleClose} mensaje={mensaje}/>
        <Grid container className={"head"} alignItems="center"justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h3">Deja tu archivo de compra</Typography>
            </Grid>
            <Grid item xs={12}>
            <Input type="file" name="file" onChange={onChangeHandler}/>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={subirArchivo}>Subir</Button>
            </Grid>

        
        
        </Grid>
        </>
    )
}