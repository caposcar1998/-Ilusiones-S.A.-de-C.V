import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });



export default function TabBusqueda({originalRows}) {

    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
    const classes = useStyles();
    const requestSearch = (searchedVal) => {
        const filteredRows = originalRows.filter((row) => {
          return row["M"]["Imei"]["S"].includes(searchedVal);
        });
        setRows(filteredRows);
      };
    
      const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
      };

    return(
        <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Imei</TableCell>
                <TableCell align="right">Folio</TableCell>
                <TableCell align="right">Modelo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {originalRows.map((row) => (
                <TableRow key={row["M"]["Imei"]["S"]}>
                  <TableCell component="th" scope="row">
                  {row["M"]['Imei']["S"]}
                  </TableCell>
                  <TableCell align="right">{row["M"]["Folio"]["S"]}</TableCell>
                  <TableCell align="right">{row["M"]["modelo"]["S"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
}