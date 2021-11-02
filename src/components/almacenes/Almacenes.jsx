import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import TabP from "./generic/TabP"

export default function Almacenes() {

    return(
    <Grid container>
    <h1>Hola</h1>
    <TabP/>

    <Grid container spacing={2}>
        <Grid item xs={6}>
            8
        </Grid>
        <Grid item xs={6}>
            4
        </Grid>
    </Grid>
    </Grid>
        
    )
}