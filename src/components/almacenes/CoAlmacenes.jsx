import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BTable from './generic/BTable';

let url = 'https://81zuqkns90.execute-api.us-west-2.amazonaws.com/staging'

export default function CoAlmacenes() {

  const [almacenes, setAlmacenes] = useState([]);
    
    useEffect(() => {
      axios.get(url+"/almacenes/lista").then(response => setAlmacenes(...almacenes ,response["data"]["Items"]))
      },[]);



    return(
        <BTable tituloUno="SUBINVENTARIO" tituloDos="NOMBRE" rows={almacenes}/>
    )

}