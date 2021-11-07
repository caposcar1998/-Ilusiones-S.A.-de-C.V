import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

let url = 'https://81zuqkns90.execute-api.us-west-2.amazonaws.com/staging'

export default function Inventario() {

    



    const [almacen, setAlmacen] = useState('');
    const [almacenes, setAlmacenes] = useState([])

    useEffect(() => {
        axios.get(url+"/almacenes/lista").then(response => setAlmacenes(...almacenes ,response["data"]["Items"]))
        },[]);

    const handleChange = (event) => {
        setAlmacen(event.target.value);
      };
    return(
    <>
        <h1>.</h1>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Almacenes</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={almacen}
                label="Age"
                onChange={handleChange}
                >
            {almacenes.map((alm) =>(
             <MenuItem value={alm["sub_inventario"]["S"]}>{alm["nombre"]["S"]}</MenuItem>   
            ))}
                </Select>
        </FormControl>
    

        
        </>
        )
}