import Button from '@mui/material/Button';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Input } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";


export default function Login() {

    let history = useHistory();

    function moverHome(){
        history.push('/home')
    }

    return(
        <Grid className={"header"} >
        <Box
        sx={{
            width: 500,
            height: 500,

          }}
        >
        <Paper elevation={3} >
        <Grid container spacing={0}>
            <Grid item xs={12}>
            <img src="https://m2crowdoscar.s3.us-west-2.amazonaws.com/loginFoto.jpg" alt="foto inicio" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom component="div">
                    Ilusiones S.A. de C.V
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={moverHome}>Login</Button>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            </Grid>
        </Paper>
      </Box>
      </Grid>
          
      
          
    )
}