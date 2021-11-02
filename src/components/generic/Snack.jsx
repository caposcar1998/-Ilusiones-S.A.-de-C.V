import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function Snack({open,handleClose,mensaje}){

    return(
    <Snackbar
      open={open}
      onClose={handleClose}
      message={mensaje}
    />
    )
}