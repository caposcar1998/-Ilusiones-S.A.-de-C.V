import { Grid, Typography, Input, Button  } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import {uploadFile} from "../../tools/UploadImage"
import Snack from '../generic/Snack';

const url = process.env.REACT_APP_URL_PROJECT

export default function Ordenes() {

    const [mensaje, setMensaje] = useState("")
    const [open,setOpen] = useState(false)
    const [archivo,setArchivo] = useState()

    const onChangeHandler=event=>{
        setArchivo(event.target.files[0])
    }

    function subirArchivo(){
        
        uploadFile(archivo).then(res =>{
            console.log(archivo["name"])
            crearRecepcionOrdenes(archivo["name"])
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

    function crearRecepcionOrdenes(nombreOrden){

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