import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import axios from 'axios';
import TabBusqueda from './TabBusqueda';

let url = 'https://81zuqkns90.execute-api.us-west-2.amazonaws.com/staging'


export default function Inventario() {

    



    const [almacen, setAlmacen] = useState();
    const [almacenes, setAlmacenes] = useState([])
    const [productos, setProductos] = useState([])


    useEffect(() => {
        axios.get(url+"/almacenes/lista").then(response => setAlmacenes(...almacenes ,response["data"]["Items"]))
        },[]);

    const handleChange = (event) => {
        setAlmacen(event.target.value);
        console.log(event.target.value)
        let body = {
            "subinventario": "IDBCA00009"
        }
        axios.post("https://nwaqd8qp0b.execute-api.us-west-2.amazonaws.com/devo/almaceness",body).then(response => setProductos(...productos,response["data"]["Item"]["inventario"]["L"]))
        console.log(productos)
    };
    return(
    <Grid container spacing={4}>
        
        <Grid item xs={12}>
        <h1>.</h1>
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Almacenes</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={almacen}
                    label="Almacen"
                    onChange={handleChange}
                    >
                {almacenes.map((alm) =>(
                <MenuItem value={alm["sub_inventario"]["S"]}>{alm["nombre"]["S"]}</MenuItem>   
                ))}
                    </Select>
            </FormControl>

        </Grid>
        <Grid item xs={12}>
            {almacen != null ?  <TabBusqueda originalRows={productos}/> :<h1>Selecciona un almacen</h1> }
        </Grid>

        
        

        
        </Grid>
        )
}