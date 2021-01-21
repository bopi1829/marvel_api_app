import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const Table = styled.table `
  padding: 1.5em;
  border: 1px black solid;
  minWidth: 1000px;
 `
/*
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});*/

export default function CustomizedTables(props) {
  //const classes = useStyles();
  const {persos} = props
  console.log('CustomizedTables', props.persos )

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Description</th>
          <th>Date</th>
          <th>Comics</th>
        </tr>
      </thead>
      <tbody>
        {persos.map((row) =>(
          <tr key={row.id}>
            <th>{row.id}</th>
            <th>{row.name}</th>
            <th>{row.description}</th>
            <th>{row.modified}</th>
            <th>{row.comics.available}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
