import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BTable from './generic/BTable';

let url = 'https://81zuqkns90.execute-api.us-west-2.amazonaws.com/staging'

export default function CoAlmacenes() {

  const [value, setValue] = useState([]);
    
    useEffect(() => {
      axios.get(url+"/almacenes/lista").then(response => console.log(response))
      },[]);

    function createData(sub_inventario, nombre) {
        return { sub_inventario, nombre };
      }


      const roows = function() {
        let arrelgo = []
        axios.get(url+"/almacenes/lista").then(response => console.log(response))
        return rows
      }
      
      const rows = [
        createData('Frozen yoghurt', 159),
        createData('Ice cream sandwich', 237),
        createData('Eclair', 262),
        createData('Cupcake', 305),
        createData('Gingerbread', 356),
      ];

    return(
        <BTable tituloUno="SUBINVENTARIO" tituloDos="NOMBRE" rows={rows}/>
    )

}