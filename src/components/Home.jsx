import { Grid } from '@mui/material';
import React from 'react';
import CardOne from './generic/CardOne';
import { useHistory } from "react-router-dom";

export default function Home() {

    let history = useHistory();

    function redireccionar(direccion){
        history.push(direccion)
    }

    const urlFoto = "https://m2crowdoscar.s3.us-west-2.amazonaws.com/"

    return(
        <>
        <h1>.</h1>
            <Grid container spacing={4} >
                <Grid item xs={6}>
                    <Grid container   alignItems="center"justifyContent="center">
                        <CardOne imagen= {urlFoto+"almacen.jpg"} titulo="Almacen" descripcion="Aqui podras realizar tus operaciones CRUD del almacen" accion={() => redireccionar("/almacenes")} boton= "Ir"/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container   alignItems="center"justifyContent="center">
                        <CardOne imagen={urlFoto+"oc2.jpg"} titulo="Ordenes compra" descripcion="Aqui podras realizar tus operaciones CRUD de las ordenes de compra" accion={() => redireccionar("/compras")} boton= "Ir"/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>  
                    <Grid container   alignItems="center"justifyContent="center">
                        <CardOne imagen={urlFoto+"celular.jpg"} titulo="Productos" descripcion="Aqui podras realizar tus operaciones CRUD de productos" accion={() => redireccionar("/")} boton= "Ir"/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container   alignItems="center"justifyContent="center">
                        <CardOne imagen={urlFoto+"inventario.png"} titulo="Inventario" descripcion="Aqui podras hacer consultas a tu inventario total" accion={() => redireccionar("/")} boton= "Ir"/>
                    </Grid>
                </Grid>
                </Grid>
            
            
        </>
    )
}